import React, { useState, useEffect, useRef, useContext } from "react";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

import { i18n } from "../../translate/i18n";

import api from "../../services/api";
import toastError from "../../errors/toastError";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginRight: theme.spacing(1),
    flex: 1,
  },

  extraAttr: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  btnWrapper: {
    position: "relative",
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Demasiado corto!")
    .max(50, "Demasiado largo!")
    .required("Requerido"),
  number: Yup.string().min(8, "Demasiado corto!").max(50, "Demasiado largo!"),
  email: Yup.string().email("Correo electrónico no válido"),
});

const ContactListItemModal = ({
  open,
  onClose,
  contactId,
  initialValues,
  onSave,
}) => {
  const classes = useStyles();
  const isMounted = useRef(true);

  const {
    user: { companyId },
  } = useContext(AuthContext);
  const { contactListId } = useParams();

  const initialState = {
    name: "",
    number: "",
    email: "",
  };

  const [contact, setContact] = useState(initialState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchContact = async () => {
      if (initialValues) {
        setContact((prevState) => {
          return { ...prevState, ...initialValues };
        });
      }

      if (!contactId) return;

      try {
        const { data } = await api.get(`/contact-list-items/${contactId}`);
        if (isMounted.current) {
          setContact(data);
        }
      } catch (err) {
        toastError(err);
      }
    };

    fetchContact();
  }, [contactId, open, initialValues]);

  const handleClose = () => {
    onClose();
    setContact(initialState);
  };

  const handleSaveContact = async (values) => {
    try {
      if (contactId) {
        await api.put(`/contact-list-items/${contactId}`, {
          ...values,
          companyId,
          contactListId,
        });
        handleClose();
      } else {
        const { data } = await api.post("/contact-list-items", {
          ...values,
          companyId,
          contactListId,
        });
        if (onSave) {
          onSave(data);
        }
        handleClose();
      }
      toast.success(i18n.t("contactModal.success"));
    } catch (err) {
      toastError(err);
    }
  };

  return (
    <div className={classes.root}>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" scroll="paper">
        <DialogTitle id="form-dialog-title">
          {contactId
            ? `${i18n.t("contactModal.title.edit")}`
            : `${i18n.t("contactModal.title.add")}`}
        </DialogTitle>
        <Formik
          initialValues={contact}
          enableReinitialize={true}
          validationSchema={ContactSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              handleSaveContact(values);
              actions.setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <DialogContent dividers>
                <Typography variant="subtitle1" gutterBottom>
                  {i18n.t("contactModal.form.mainInfo")}
                </Typography>
                <Field
                  as={TextField}
                  label={i18n.t("contactModal.form.name")}
                  name="name"
                  autoFocus
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  variant="outlined"
                  margin="dense"
                  className={classes.textField}
                />
                <Field
                  as={TextField}
                  label={i18n.t("contactModal.form.number")}
                  name="number"
                  error={touched.number && Boolean(errors.number)}
                  helperText={touched.number && errors.number}
                  placeholder="5519971395449"
                  variant="outlined"
                  margin="dense"
                />
                <div>
                  <Field
                    as={TextField}
                    label={i18n.t("contactModal.form.email")}
                    name="email"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    placeholder="dirección de correo electrónico"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                  />
                </div>
              </DialogContent>
              <DialogActions>
                <Button
                  startIcon={<CancelIcon />}
                  onClick={handleClose}
		  style={{
                  color: "white",
                  backgroundColor: "#db6565",
                  boxShadow: "none",
                  borderRadius: 0,
                  fontSize: "12px",
                  }}
                  disabled={isSubmitting}
                  variant="outlined"
                >
                  {i18n.t("contactModal.buttons.cancel")}
                </Button>
                <Button
                  startIcon={<SaveIcon />}
                  type="submit"
		  style={{
                  color: "white",
                  backgroundColor: "#437db5",
                  boxShadow: "none",
                  borderRadius: 0,
                  fontSize: "12px",
                  }}
                  disabled={isSubmitting}
                  variant="contained"
                  className={classes.btnWrapper}
                >
                  {contactId
                    ? `${i18n.t("contactModal.buttons.okEdit")}`
                    : `${i18n.t("contactModal.buttons.okAdd")}`}
                  {isSubmitting && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default ContactListItemModal;
