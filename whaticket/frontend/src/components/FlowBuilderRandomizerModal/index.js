import React, { useState, useEffect, useRef } from "react";

import * as Yup from "yup";
import { Formik, FieldArray, Form, Field } from "formik";
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
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CircularProgress from "@material-ui/core/CircularProgress";

import { i18n } from "../../translate/i18n";

import api from "../../services/api";
import toastError from "../../errors/toastError";
import { Slider, Stack } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginRight: theme.spacing(1),
    flex: 1
  },

  extraAttr: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  btnWrapper: {
    position: "relative"
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

const FlowBuilderRandomizerModal = ({
  open,
  onSave,
  data,
  onUpdate,
  close
}) => {
  const classes = useStyles();
  const isMounted = useRef(true);

  const [percent, setPercent] = useState(0);
  const [activeModal, setActiveModal] = useState(false);
  

  useEffect(() => {
    if (open === "edit") {
      setPercent(data.data.percent);
      setActiveModal(true);
    } else if (open === "create") {
      setPercent(0);
      setActiveModal(true);
    }
    return () => {
      isMounted.current = false;
    };
  }, [open]);

  const handleClose = () => {
    close(null);
    setActiveModal(false);
  };

  const handleValue = (event, newValue) => {
    setPercent(newValue)
  }

  const handleSaveContact = async values => {
    if (!percent || parseInt(percent) <= 0) {
      return toast.error("Añadir el valor del rango");
    }
    if (parseInt(percent) > 120) {
      return toast.error("Tiempo máximo alcanzado 120 segundos");
    }
    if (open === "edit") {
      onUpdate({
        ...data,
        data: { percent: percent }
      });
    } else if (open === "create") {
      onSave({
        percent: percent
      });
    }
    handleClose();
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={activeModal}
        onClose={handleClose}
        fullWidth="md"
        scroll="paper"
      >
        <DialogTitle id="form-dialog-title">
          {open === "create"
            ? `Añadir un aleatorizador al flujo`
            : `Editar aleatorizador`}
        </DialogTitle>
        <Stack>
          <DialogContent dividers>
            <Stack direction={'row'} minHeight={120} alignItems={'center'} gap={4}>
              <Typography>{percent}%</Typography>
              <Slider
                aria-label="Temperature"
                defaultValue={percent}
                valueLabelDisplay="auto"
                onChange={handleValue}
                step={10}
                marks
                min={0}
                max={100}
              />
              <Typography>{100 - percent}%</Typography>
            </Stack>
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
              variant="outlined">
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
              variant="contained"
              className={classes.btnWrapper}
              onClick={() => handleSaveContact()}
            >
              {open === "create" ? `Para agregar` : "Editar"}
            </Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </div>
  );
};

export default FlowBuilderRandomizerModal;
