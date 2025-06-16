const messages = {
  pt: {
    translations: {
      signup: {
        title: "Crea tu cuenta",
        toasts: {
          success: "¡Usuario creado con éxito! Inicia sesión.",
          fail: "Error al crear el usuario. Verifica los datos proporcionados.",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
          company: "Nombre de la Empresa",
          phone: "Whatsapp (CÓDIGO + NÚMERO)",
        },
        buttons: {
          submit: "Registrar",
          login: "¿Ya tienes una cuenta? ¡Entra!",
        },
      },
      login: {
        title: "Iniciar sesión",
        form: {
          email: "Correo electrónico",
          password: "Contraseña",
          button: "Acceder",
        },
        buttons: {
          submit: "Entrar al Sistema",
          register: "¿No tienes una cuenta? ¡Regístrate!",
        },
      },
      companies: {
title: "Registrar Empresa",
form: {
  name: "Nombre de la Empresa",
  plan: "Elige el Plan",
  token: "Token",
  submit: "Registrar",
  success: "¡Empresa creada con éxito!",
        },
      },
      auth: {
        toasts: {
          success: "¡Inicio de sesión exitoso!",
        },
        dueDate: {
expiration: "Tu suscripción expira en",
days: "días!",
day: "día!",
expirationToday: "¡Tu suscripción expira hoy!",
        },
        token: "Token",
      },
      dashboard: {
        tabs: {
indicators: "Indicadores",
assessments: "NPS",
attendants: "Agentes",
        },
        charts: {
          perDay: {
            title: "Atenciones hoy: ",
          },
        },
        cards: {
inAttendance: "En Atención",
waiting: "En Espera",
activeAttendants: "Atendentes Activos",
finalized: "Finalizados",
newContacts: "Nuevos Contactos",
totalReceivedMessages: "Mensajes Recibidos",
totalSentMessages: "Mensajes Enviados",
averageServiceTime: "T.M. de Atención",
averageWaitingTime: "T.M. de Espera",
status: "Estado (Actual)",
activeTickets: "Tickets Activos",
passiveTickets: "Tickets Pasivos",
groups: "Grupos",
        },
        users: {


name: "Nombre",
numberAppointments: "Cantidad de Atenciones",
statusNow: "Actual",
totalCallsUser: "Total de atenciones por usuario",
totalAttendances: "Total de atenciones",

        },
        date: {
initialDate: "Fecha Inicial",
finalDate: "Fecha Final",

        },
        licence: {
          available: "Disponible hasta",
        },
        assessments: {
totalCalls: "Total de Atenciones",
callsWaitRating: "Atenciones esperando evaluación",
callsWithoutRating: "Atenciones sin evaluación",
ratedCalls: "Atenciones evaluadas",
evaluationIndex: "Índice de evaluación",
score: "Puntuación",
prosecutors: "Promotores",
neutral: "Neutros",
detractors: "Detractores",

        },
      },
      reports: {
title: "Informe de Encuestas Realizadas",
operator: "Operador",
period: "Período",
until: "Hasta",
date: "Fecha",
reportTitle: "Informes",
calls: "Atenciones",
search: "Búsquedas",
durationCalls: "Duración de las atenciones",
grupoSessions: "Atenciones en grupos",
groupTicketsReports: {
  timezone: "America/Sao_Paulo",
  msgToast: "Generando informe comprimido, por favor espera.",
  errorToast: "Error al generar el informe",
  back: "Volver",
  groupServiceReport: "Informe de Atención en Grupos",
  loading: "Cargando...",
  contact: "Contacto",
  dateOpen: "Fecha de apertura",
  dateLastUpdated: "Última actualización",
  agent: "Atendido por",
  agentClosed: "Cerrado por",
  waitingAssistance: "Esperando atención",
  process: "En atención",
        },
        researchReports: {
response: "respuesta",
active: "(Activa)",
inactive: "(Inactiva)",
quantity: "Cantidad",
percentage: "porcentaje",
title: "Informe de Encuestas Realizadas",
activeSearch: "Encuesta activa",
inactiveSearch: "Encuesta inactiva",

        },
        ticketDurationDetail: {
msgToast: "Generando informe comprimido, por favor espera.",
title: "Informe de Duración de la Atención",
startService: "Inicio de la atención",
lastUpdated: "Última actualización",
lastAgent: "Último agente",
durationFinished: "Duración tras finalizar",

        },
        ticketDuration: {
title: "Informe de Duración de las Atenciones",
contact: "Contacto",
open: "Abiertos",
pending: "Pendientes",
finished: "Finalizados",
durationFinished: "Duración de los finalizados",
durationAfterFinished: "Duración tras finalizar",
actions: "Acciones",

        },
        ticketReports: {
msgToast: "Generando informe comprimido, por favor espera.",
title: "Informe de Atención",

        },
        pdf: {
title: "Relación de Atenciones Realizadas",
exportTitle: "Relación de Atenciones en Grupos Realizadas",

        },
      },
      todo: {
newTask: "Nueva Tarea",
add: "Agregar",
task: "Tareas",

      },
      contactImportWpModal: {
title: "Exportar Contactos a Excel",
buttons: {
  downloadModel: "Descargar modelo de excel para importación",
  closed: "Cerrar",
  import: "Selecciona el archivo de excel para importar Contactos",
        },
      },
      connections: {
title: "Conexiones",
waitConnection: "Espera... ¡Tus conexiones se reiniciarán!",
newConnection: "Nueva Conexión",
restartConnections: "Reiniciar Conexiones",
callSupport: "Llamar Soporte",
toasts: {
  deleted: "¡Conexión eliminada con éxito!",
  disconnected: "¡Conexión desconectada con éxito!",
  closedimported:
    "Estamos cerrando los tickets importados, por favor espera unos instantes",
        },
        confirmationModal: {
closedImportedTitle: "Cerrar tickets importados",
closedImportedMessage:
  "Si confirmas, todos los tickets importados serán cerrados.",
deleteTitle: "Eliminar",
deleteMessage: "¿Estás seguro? Esta acción no se puede deshacer.",
disconnectTitle: "Desconectar",
disconnectMessage:
  "¿Estás seguro? Necesitarás leer el código QR nuevamente.",

        },
        buttons: {
add: "Agregar Conexión",
disconnect: "Desconectar",
tryAgain: "Intentar nuevamente",
qrcode: "CÓDIGO QR",
newQr: "Nuevo CÓDIGO QR",
closedImported: "Cerrar todos los tickets importados",
preparing: "Preparando mensajes para importación",
importing: "Importando mensajes de WhatsApp",
processed: "Procesado",
in: "de",
connecting: "Conectando",

        },
        typography: {
processed: "Procesado",
in: "de",
date: "Fecha del mensaje",

        },
        toolTips: {
          disconnected: {
title: "Error al iniciar sesión en WhatsApp",
content:
  "Asegúrate de que tu teléfono esté conectado a Internet e inténtalo nuevamente, o solicita un nuevo Código QR",

          },
          qrcode: {
title: "Esperando la lectura del Código QR",
content:
  "Haz clic en el botón 'CÓDIGO QR' y escanea el Código QR con tu teléfono para iniciar la sesión",

          },
          connected: {
            title: "¡Conexión establecida!",

          },
          timeout: {
title: "Se perdió la conexión con el teléfono",
content:
  "Asegúrate de que tu teléfono esté conectado a Internet y que WhatsApp esté abierto, o haz clic en el botón 'Desconectar' para obtener un nuevo Código QR",

          },
        },
        table: {
name: "Nombre",
status: "Estado",
lastUpdate: "Última actualización",
default: "Predeterminado",
actions: "Acciones",
session: "Sesión",
number: "Número de WhatsApp",

        },
      },
      showTicketOpenModal: {
        title: {
         header: "Atención Existente",
        },
        form: {
message: "Este contacto ya está en atención:",
user: "Agente",
queue: "Cola",
messageWait:
  "Este contacto ya está esperando atención. ¡Consulta en la pestaña Esperando!",

        },
      },
      showTicketLogModal: {
        title: {
          header: "Logs",
        },
        options: {
create: "Ticket creado.",
chatBot: "ChatBot iniciado.",
queue: " - Cola definida.",
open: " inició la atención.",
access: "accedió al ticket.",
transfered: "transfirió el ticket.",
receivedTransfer: "recibió el ticket transferido.",
pending: "devolvió a la cola.",
closed: "cerró el ticket.",
reopen: "reabrió el ticket.",
redirect: "- redirigido",

        },
      },
      whatsappModal: {
        title: {
add: "Agregar Conexión",
edit: "Editar Conexión",

        },
        tabs: {
general: "General",
messages: "Mensajes",
assessments: "NPS",
integrations: "Integraciones",
schedules: "Horario laboral",

        },
        form: {
importOldMessagesEnable: "Importar mensajes del dispositivo",
importOldMessages: "Fecha de inicio de la importación",
importRecentMessages: "Fecha de finalización de la importación",
importOldMessagesGroups: "Importar mensajes de grupo",
closedTicketsPostImported: "Cerrar tickets después de la importación",
name: "Nombre",
queueRedirection: "Redirección de Cola",
queueRedirectionDesc:
  "Seleccione una cola para redirigir los contactos que no tienen cola",
default: "Predeterminado",
group: "Permitir grupos",
timeSendQueue: "Tiempo en minutos para redirigir a la cola",
importAlert:
  "ATENCIÓN: Al guardar, su conexión se cerrará y será necesario escanear el Código QR nuevamente para importar los mensajes",
groupAsTicket: "Tratar grupos como ticket",
timeCreateNewTicket: "Crear nuevo ticket en x minutos",
maxUseBotQueues: "Enviar bot x veces",
timeUseBotQueues: "Enviar bot en x minutos",
expiresTicket: "Cerrar chats abiertos después de x minutos",
expiresTicketNPS:
  "Cerrar chats esperando evaluación después de x minutos",
maxUseBotQueuesNPS:
  "Cantidad máxima de veces que se enviará la evaluación",
closeLastMessageOptions1: "Del agente/Cliente",
closeLastMessageOptions2: "Del agente",
outOfHoursMessage: "Mensaje fuera de horario",
greetingMessage: "Mensaje de saludo",
complationMessage: "Mensaje de finalización",
lgpdLinkPrivacy: "Enlace a la política de privacidad",
lgpdMessage: "Mensaje de saludo LGPD",
lgpdDeletedMessages: "Ocultar mensaje eliminado por el contacto",
lgpdSendMessage: "Siempre solicitar confirmación del contacto",
ratingMessage: "Mensaje de evaluación - La escala debe ser de 0 a 10",
token: "Token para integración externa",
sendIdQueue: "Cola",
inactiveMessage: "Mensaje de inactividad",
timeInactiveMessage:
  "Tiempo en minutos para enviar el aviso de inactividad",
whenExpiresTicket:
  "Cerrar chats abiertos cuando el último mensaje sea",
expiresInactiveMessage: "Mensaje de cierre por inactividad",
prompt: "Prompt",
collectiveVacationEnd: "Fecha final",
collectiveVacationStart: "Fecha inicial",
collectiveVacationMessage: "Mensaje de vacaciones colectivas",
queueIdImportMessages: "Cola para importar los mensajes",

        },
        buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",

        },
        menuItem: {
enabled: "Habilitado",
disabled: "Deshabilitado",
minutes: "minutos",

        },
success: "Conexión guardada con éxito.",
errorSendQueue:
  "Se indicó un tiempo para redirigir la cola, pero no se seleccionó una cola para redirigir. Ambos campos deben estar completos.",
errorExpiresNPS:
  "Es obligatorio informar un tiempo para la evaluación cuando se utiliza el NPS.",
errorRatingMessage:
  "Es obligatorio informar un mensaje de evaluación cuando se utiliza el NPS.",

      },
      qrCode: {
        message: "Escanea el Código QR para iniciar la sesión",

      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto eliminado con éxito!",
        },
searchPlaceholder: "Buscar...",
confirmationModal: {
  deleteTitle: "Eliminar ",
  importTitlte: "Importar contactos",
  exportContact: "Exportar contactos",
  deleteMessage:
    "¿Estás seguro de que deseas eliminar este contacto? Todas las atenciones relacionadas se perderán.",
  blockContact: "¿Estás seguro de que deseas bloquear este contacto?",
  unblockContact: "¿Estás seguro de que deseas desbloquear este contacto?",
  importMessage: "¿Deseas importar todos los contactos del teléfono?",
  importChat: "Importar Conversaciones",
  wantImport: "¿Deseas importar todas las conversaciones del teléfono?",
        },
        buttons: {
import: "Importar Contactos",
add: "Agregar Contacto",
export: "Exportar Contacto",

        },
        table: {
name: "Nombre",
whatsapp: "Conexión",
email: "Correo Electrónico",
actions: "Acciones",
lastMessage: "Último Mensaje",

        },
        menu: {
importYourPhone: "Importar desde el dispositivo predeterminado",
importToExcel: "Importar / Exportar desde Excel",
        },
      },
      forwardMessage: {
        text: "Reenviada",
      },
      forwardMessageModal: {
        title: "Reenviar mensaje",
        buttons: {
          ok: "Reenviar",
        },
      },
      promptModal: {
        form: {
name: "Nombre",
prompt: "Prompt",
voice: "Voz",
max_tokens: "Máximo de Tokens en la respuesta",
temperature: "Temperatura",
apikey: "Clave de API",
max_messages: "Máximo de mensajes en el Historial",
voiceKey: "Clave de la API de Voz",
voiceRegion: "Región de Voz",

        },
        success: "¡Prompt guardado con éxito!",
        title: {
add: "Agregar Prompt",
edit: "Editar Prompt",
        },
        buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
name: "Nombre",
queue: "Sector/Cola",
max_tokens: "Máximo de Tokens en la Respuesta",
actions: "Acciones",
        },
        confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage: "¿Estás seguro? ¡Esta acción no se puede deshacer!",
        },
        buttons: {
          add: "Agregar Prompt",
        },
      },
      contactModal: {
        title: {
add: "Agregar contacto",
edit: "Editar contacto",
        },
        form: {
mainInfo: "Datos del contacto",
extraInfo: "Información adicional",
name: "Nombre",
number: "Número de WhatsApp",
email: "Correo Electrónico",
extraName: "Nombre del campo",
extraValue: "Valor",
chatBotContact: "Deshabilitar chatbot",
termsLGDP: "Términos LGPD aceptados en:",
whatsapp: "Conexión de Origen: ",

        },
        buttons: {
addExtraInfo: "Agregar información",
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
        },
       success: "Contacto guardado con éxito.",
      },
      flowbuilderModal: {
        flowNotIdPhrase: "Flujo predeterminado",
      },
      queueModal: {
        title: {
queueData: "Datos de la cola",
text: "Horarios de atención",
add: "Agregar cola",
edit: "Editar cola",
confirmationDelete:
  "¿Estás seguro? Todas las opciones de integraciones serán eliminadas.",
        },
        form: {
name: "Nombre",
color: "Color",
orderQueue: "Orden de la cola (Bot)",
rotate: "Rotación",
timeRotate: "Tiempo de Rotación",
greetingMessage: "Mensaje de saludo",
complationMessage: "Mensaje de conclusión",
outOfHoursMessage: "Mensaje fuera de horario",
token: "Token",
integrationId: "Integración",
fileListId: "Lista de archivos",
closeTicket: "Cerrar ticket",
queueType: "Tipo de menú",
message: "Mensaje de retorno",
queue: "Cola para transferencia",
integration: "Integración",
file: "Lista de archivos",

        },
        buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
        },
        bot: {
title: "Opciones",
toolTipTitle: "Agrega opciones para construir un chatbot",
toolTip:
  "Si solo hay una opción, se seleccionará automáticamente, haciendo que el bot responda con el mensaje de la opción y continúe",
selectOption: "Selecciona una opción",
text: "Texto",
attendent: "Agente",
queue: "Cola",
integration: "Integración",
file: "Archivo",
toolTipMessageTitle:
  "El mensaje es obligatorio para avanzar al siguiente nivel",
toolTipMessageContent:
  "El mensaje es obligatorio para avanzar al siguiente nivel",
selectUser: "Selecciona un Usuario",
selectQueue: "Selecciona una Cola",
selectIntegration: "Selecciona una Integración",
addOptions: "Agregar opciones",

        },
        serviceHours: {
          dayWeek: "Día de la semana",
          startTimeA: "Hora de inicio",
          endTimeA: "Fin de los tiempos",
          startTimeB: "Hora de inicio",
          endTimeB: "Hora final",
          monday: "Lunes",
          tuesday: "Martes",
          wednesday: "Miércoles",
          thursday: "Jueves",
          friday: "Viernes",
          saturday: "Sábado",
          sunday: "Domingo",
        },
      },
      queueIntegrationModal: {
        title: {
add: "Agregar proyecto",
edit: "Editar proyecto",
        },
        form: {
id: "ID",
type: "Tipo",
name: "Nombre",
projectName: "Nombre del Proyecto",
language: "Idioma",
jsonContent: "Contenido JSON",
urlN8N: "URL",
typebotSlug: "Typebot - Slug",
typebotExpires: "Tiempo en minutos para que expire una conversación",
typebotKeywordFinish: "Palabra para finalizar el ticket",
typebotKeywordRestart: "Palabra para reiniciar el flujo",
typebotRestartMessage: "Mensaje al reiniciar la conversación",
typebotUnknownMessage: "Mensaje de opción inválida",
typebotDelayMessage: "Intervalo (ms) entre mensajes",

        },
        buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
test: "Probar Bot",
        },
        messages: {
testSuccess: "¡Integración probada con éxito!",
addSuccess: "Integración agregada con éxito.",
editSuccess: "Integración editada con éxito.",
        },
      },
      userModal: {
warning:
  "¡Para realizar la importación de los mensajes es necesario leer el qrCode nuevamente!",
        title: {
add: "Agregar usuario",
edit: "Editar usuario",
updateImage: "Actualizar imagen",
removeImage: "Eliminar imagen",
        },
        form: {
name: "Nombre",
email: "Correo Electrónico",
password: "Contraseña",
farewellMessage: "Mensaje de despedida",
profile: "Perfil",
startWork: "Inicio de trabajo",
endWork: "Fin de trabajo",
whatsapp: "Conexión Predeterminada",
allTicketEnable: "Habilitado",
allTicketDisable: "Deshabilitado",
allTicket: "Visualizar tickets sin cola",
allowGroup: "Permitir Grupos",
defaultMenuOpen: "Abierto",
defaultMenuClosed: "Cerrado",
defaultMenu: "Menú predeterminado",
defaultTheme: "Tema Predeterminado",
defaultThemeDark: "Oscuro",
defaultThemeLight: "Claro",
allHistoric: "Ver conversaciones de otras colas",
allHistoricEnabled: "Habilitado",
allHistoricDisabled: "Deshabilitado",
allUserChat: "Ver conversaciones de otros usuarios",
userClosePendingTicket: "Permitir cerrar tickets pendientes",
showDashboard: "Ver Dashboard",
allowRealTime: "Ver Panel de Atenciones",
allowConnections: "Permitir acciones en las conexiones",

        },
        tabs: {
general: "General",
permissions: "Permisos",
        },
        buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
addImage: "Agregar Imagen",
editImage: "Editar Imagen",
        },
        success: "Usuario guardado con éxito.",
      },
      companyModal: {
        title: {
add: "Agregar empresa",
edit: "Editar empresa",
        },
        form: {
name: "Nombre",
email: "Correo Electrónico",
passwordDefault: "Contraseña",
numberAttendants: "Usuarios",
numberConections: "Conexiones",
        },
        buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
        },
        success: "Empresa guardada con éxito.",
      },
      scheduleModal: {
        title: {
          add: "Nuevo horario",
          edit: "Editar horario",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de cita",
          sentAt: "Fecha de envío",
          assinar: "Enviar firma"
        },
        buttons: {
          okAdd: "Para agregar",
          okEdit: "Ahorrar",
          cancel: "Cancelar",
          addSchedule: "Agregar horario"
        },
        success: "Cita guardada exitosamente.",
      },
      tagModal: {
        title: {
add: "Nueva Etiqueta",
edit: "Editar Etiqueta",
addKanban: "Nuevo Tablero",
editKanban: "Editar Tablero",
        },
        form: {
name: "Nombre",
color: "Color",
timeLane: "Tiempo en horas para redirigir al tablero",
nextLaneId: "Tablero",
greetingMessageLane: "Mensaje de saludo del Tablero",
rollbackLaneId: "Volver al Tablero después de retomar la atención",
        },
        buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
        },
success: "Etiqueta guardada con éxito.",
successKanban: "Tablero guardado con éxito.",
      },
      fileModal: {
        title: {
add: "Agregar lista de archivos",
edit: "Editar lista de archivos",
        },
        buttons: {
okAdd: "Guardar",
okEdit: "Editar",
cancel: "Cancelar",
fileOptions: "Agregar archivo",
        },
        form: {
name: "Nombre de la lista de archivos",
message: "Detalles de la lista",
fileOptions: "Lista de archivos",
extraName: "Mensaje para enviar con archivo",
extraValue: "Valor de la opción",
        },
        success: "¡Lista de archivos guardada con éxito!",
      },
      chat: {
        noTicketMessage: "Seleccione un ticket para comenzar a conversar.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop:
"⬇️ ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO DE ABAJO ⬇️",
titleFileList: "Lista de archivo(s)",
        },
      },
      chatInternal: {
        new: "Nuevo",
        modal: {
conversation: "Conversación",
title: "Título",
filterUsers: "Filtro por Usuarios",
cancel: "Cerrar",
save: "Guardar",
        },
        modalDelete: {
title: "Eliminar Conversación",
message: "Esta acción no se puede deshacer, ¿confirmar?",
        },
      },
      ticketsManager: {
questionCloseTicket: "¿DESEAS CERRAR TODOS LOS TICKETS?",
yes: "SÍ",
not: "NO",
        buttons: {
newTicket: "Nuevo",
resolveAll: "Resolver Todos",
close: "Cerrar",
new: "Nuevo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Colas",
      },
      tickets: {
        inbox: {
closedAllTickets: "¿Cerrar todos los tickets?",
closedAll: "Cerrar Todos",
newTicket: "Nuevo Ticket",
yes: "SÍ",
no: "NO",
open: "Abiertos",
resolved: "Resueltos",
        },
        toasts: {
          deleted: "El ticket que estabas atendiendo ha sido eliminado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
open: { title: "Abiertas" },
closed: { title: "Resueltos" },
search: { title: "Búsqueda" },
        },
        search: {
placeholder: "Buscar ticket y mensajes",
filterConections: "Filtro por Conexión",
          filterConectionsOptions: {
open: "Abierto",
closed: "Cerrado",
pending: "Pendiente",
          },
filterUsers: "Filtro por Usuarios",
filterContacts: "Filtro por Contactos",
ticketsPerPage: "Tickets por página",
        },
        buttons: {
showAll: "Todos",
returnQueue: "Devolver a Cola",
scredule: "Agendamiento",
deleteTicket: "Eliminar Ticket",
quickmessageflash: "Mensaje Rápido",
        },
        closedTicket: {
closedMessage: "Cerrar Ticket Con Mensaje de Despedida",
closedNotMessage: "Cerrar Ticket Sin Mensaje de Despedida",
        },
      },
      transferTicketModal: {
title: "Transferir Ticket",
fieldLabel: "Escriba para buscar usuarios",
fieldQueueLabel: "Transferir a cola",
fieldQueuePlaceholder: "Seleccione una cola",
fieldWhatsapp: "Seleccione un whatsapp",
noOptions: "No se encontró ningún usuario con ese nombre",
msgTransfer: "Observaciones - mensaje interno, no se enviará al cliente",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      chatInternal: {
       new: "Nuevo",
        modal: {
conversation: "Conversación",
title: "Título",
filterUsers: "Filtro por Usuarios",
cancel: "Cerrar",
save: "Guardar",
        },
        modalDelete: {
title: "Eliminar Conversación",
message: "Esta acción no se puede deshacer, ¿confirmar?",
        },
      },
      ticketsList: {
called: "Llamado",
today: "Hoy",
missedCall: "Llamada de voz/vídeo perdida a las",
pendingHeader: "Esperando",
assignedHeader: "Atendiendo",
groupingHeader: "Grupos",
noTicketsTitle: "¡Nada aquí!",
noTicketsMessage: "No se encontraron tickets con este estado o término buscado",
noQueue: "Sin Cola",
        buttons: {
accept: "Aceptar",
cancel: "Cancelar",
start: "Iniciar",
closed: "Cerrar",
reopen: "Reabrir",
transfer: "Transferir",
ignore: "Ignorar",
exportAsPDF: "Exportar a PDF",
kanbanActions: "Opciones de Kanban",
        },
        acceptModal: {
title: "Aceptar Chat",
queue: "Seleccionar sector",
        },
      },
      newTicketModal: {
title: "Crear Ticket",
fieldLabel: "Escriba para buscar el contacto",
add: "Agregar",
        buttons: {
          ok: "Salvar",
          cancel: "Cancelar",
        },
      },
      SendContactModal: {
title: "Enviar contacto",
fieldLabel: "Escriba para buscar el contacto",
add: "Agregar",
        buttons: {
          ok: "Enviar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
dashboard: "Dashboard",
connections: "Conexiones",
chatsTempoReal: "Panel",
tickets: "Atenciones",
quickMessages: "Respuestas rápidas",
contacts: "Contactos",
queues: "Colas & Chatbot",
tags: "Etiquetas",
administration: "Administración",
companies: "Empresas",
users: "Usuarios",
settings: "Configuraciones",
files: "Lista de archivos",
helps: "Ayuda",
messagesAPI: "API",
schedules: "Agendamientos",
campaigns: "Campañas",
annoucements: "Informativos",
chats: "Chat Interno",
financeiro: "Financiero",
queueIntegration: "Integraciones",
version: "Versión",
kanban: "Kanban",
prompts: "Open.AI",
allConnections: "Gestionar conexiones",
reports: "Informes",
management: "Gestión",

        },
        appBar: {
          user: {
profile: "Perfil",
logout: "Salir",
message: "Hola",
messageEnd: "bienvenido a",
active: "Activo hasta",
goodMorning: "Hola,",
myName: "mi nombre es",
continuity: "y continuaré con su atención.",
virtualAssistant: "Asistente Virtual",
token: "Token inválido, por favor contacte con el administrador de la plataforma.",
          },
          message: {
location: "Ubicación",
contact: "Contacto",
          },
notRegister: "Ningún registro",
refresh: "Actualizar",
        },
      },
      languages: {
        undefined: "Idioma",
        "pt-BR": "Português",
        es: "Español",
        en: "English",
        tr: "Türkçe",
      },
      messagesAPI: {
        title: "API",
        textMessage: {
number: "Número",
body: "Mensaje",
token: "Token registrado",
userId: "ID del usuario/agente",
queueId: "ID de la Cola",
        },
        mediaMessage: {
number: "Número",
body: "Nombre del archivo",
media: "Archivo",
token: "Token registrado",
        },
        API: {
          title: "Documentación para el envío de mensajes",
          methods: {
title: "Métodos de Envio",
messagesText: "Mensajes de Texto",
messagesMidia: "Mensajes con Archivos",
          },
          instructions: {
title: "Instrucciones",
comments: "Observaciones Importantes",
comments1:
  "Antes de enviar mensajes, es necesario registrar el token vinculado a la conexión que enviará los mensajes. <br />Para realizar el registro, acceda al menú 'Conexiones', haga clic en el botón de editar de la conexión e ingrese el token en el campo correspondiente.",
comments2:
  "El número para el envío no debe tener máscara ni caracteres especiales y debe estar compuesto por:",
codeCountry: "Código del País",
code: "DDD",
number: "Número",
          },
          text: {
title: "1. Mensajes de Texto",
instructions:
  "A continuación, se muestra la lista de información necesaria para el envío de los mensajes de texto:",
          },
          media: {
title: "2. Mensajes con Archivo",
instructions:
  "A continuación, se muestra la lista de información necesaria para el envío de los mensajes de texto:",
          },
        },
      },
      notifications: {
        noTickets: "Ninguna notificación.",
      },
      quickMessages: {
title: "Respuestas Rápidas",
searchPlaceholder: "Buscar...",
noAttachment: "Sin adjunto",
        confirmationModal: {
deleteTitle: "Eliminación",
deleteMessage: "¡Esta acción es irreversible! ¿Deseas continuar?",
        },
        buttons: {
add: "Agregar",
attach: "Archivo",
cancel: "Cancelar",
edit: "Editar",
        },
        toasts: {
success: "¡Atajo agregado con éxito!",
deleted: "¡Atajo eliminado con éxito!",
        },
        dialog: {
title: "Mensaje Rápido",
shortcode: "Atajo",
message: "Respuesta",
save: "Guardar",
cancel: "Cancelar",
geral: "Permitir editar",
add: "Agregar",
edit: "Editar",
visao: "Permitir vista",
        },
        table: {
shortcode: "Atajo",
message: "Mensaje",
actions: "Acciones",
mediaName: "Nombre del Archivo",
status: "Estado",
        },
      },
      contactLists: {
        title: "Listas de Contactos",
        table: {
name: "Nombre",
contacts: "Contactos",
actions: "Acciones",
        },
        buttons: {
        add: "Nueva Lista",
        },
        dialog: {
name: "Nombre",
company: "Empresa",
okEdit: "Editar",
okAdd: "Agregar",
add: "Agregar",
edit: "Editar",
cancel: "Cancelar",
        },
        confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage: "Esta acción no se puede deshacer.",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      contactListItems: {
title: "Contactos",
searchPlaceholder: "Buscar",
        buttons: {
add: "Nuevo",
lists: "Listas",
import: "Importar",
        },
        dialog: {
name: "Nombre",
number: "Número",
whatsapp: "Whatsapp",
email: "Correo Electrónico",
okEdit: "Editar",
okAdd: "Agregar",
add: "Agregar",
edit: "Editar",
cancel: "Cancelar",
        },
        table: {
name: "Nombre",
number: "Número",
whatsapp: "Whatsapp",
email: "Correo Electrónico",
actions: "Acciones",
        },
        confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage: "Esta acción no se puede deshacer.",
importMessage: "¿Deseas importar los contactos de esta hoja de cálculo?",
importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },

      kanban: {
        title: "Kanban",
searchPlaceholder: "Buscar",

        subMenus: {
list: "Panel",
tags: "Tableros",
        },
      },

      campaigns: {
title: "Campañas",
searchPlaceholder: "Buscar",
        subMenus: {
list: "Listado",
listContacts: "Lista de contactos",
settings: "Configuraciones",
        },
        settings: {
randomInterval: "Intervalo Aleatorio de Disparo",
noBreak: "Sin Intervalo",
intervalGapAfter: "Intervalo mayor después de",
undefined: "No definido",
messages: "mensajes",
laggerTriggerRange: "Intervalo de disparo mayor",
addVar: "Agregar variable",
save: "Guardar",
close: "Cerrar",
add: "Agregar",
shortcut: "Atajo",
content: "Contenido",
        },
        buttons: {
add: "Nueva Campaña",
contactLists: "Listas de Contactos",
        },
        table: {
name: "Nombre",
whatsapp: "Conexión",
contactList: "Lista de Contactos",
option: "Ninguna",
disabled: "Deshabilitada",
enabled: "Habilitada",
status: "Estado",
scheduledAt: "Agendamiento",
completedAt: "Concluida",
confirmation: "Confirmación",
actions: "Acciones",
        },
        dialog: {
new: "Nueva Campaña",
update: "Editar Campaña",
readonly: "Solo Visualización",
help: "Utiliza variables como {nombre}, {número}, {correo} o define variables personalizadas.",
          form: {
name: "Nombre",
message1: "Mensaje 1",
message2: "Mensaje 2",
message3: "Mensaje 3",
message4: "Mensaje 4",
message5: "Mensaje 5",
confirmationMessage1: "Mensaje de Confirmación 1",
confirmationMessage2: "Mensaje de Confirmación 2",
confirmationMessage3: "Mensaje de Confirmación 3",
confirmationMessage4: "Mensaje de Confirmación 4",
confirmationMessage5: "Mensaje de Confirmación 5",
messagePlaceholder: "Contenido del mensaje",
whatsapp: "Conexión",
status: "Estado",
scheduledAt: "Agendamiento",
confirmation: "Confirmación",
contactList: "Lista de Contactos",
tagList: "Etiquetas",
statusTicket: "Estado del Ticket",
openTicketStatus: "Abierto",
pendingTicketStatus: "Pendiente",
closedTicketStatus: "Cerrado",
enabledOpenTicket: "Habilitado",
disabledOpenTicket: "Deshabilitado",
openTicket: "Abrir ticket",

          },
          buttons: {
add: "Agregar",
edit: "Actualizar",
okadd: "Aceptar",
cancel: "Cancelar Disparos",
restart: "Reiniciar Disparos",
close: "Cerrar",
attach: "Archivo",
          },
        },
        confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage: "Esta acción no se puede deshacer.",
        },
        toasts: {
success: "Operación realizada con éxito",
cancel: "Campaña cancelada",
restart: "Campaña reiniciada",
deleted: "Registro eliminado",
        },
      },
      campaignReport: {
title: "Informe de",
inactive: "Inactiva",
scheduled: "Programada",
process: "En Proceso",
cancelled: "Cancelada",
finished: "Finalizada",
campaign: "Campaña",
validContacts: "Contactos Válidos",
confirmationsRequested: "Confirmaciones Solicitadas",
confirmations: "Confirmaciones",
deliver: "Entregados",
connection: "Conexión",
contactLists: "Lista de Contactos",
schedule: "Agendamiento",
conclusion: "Conclusión",

      },
      announcements: {
title: "Informativos",
searchPlaceholder: "Buscar",
active: "Activo",
inactive: "Inactivo",
        buttons: {
add: "Informativo",
contactLists: "Listas de Informativos",

        },
        table: {
priority: "Prioridad",
title: "Título",
text: "Texto",
mediaName: "Archivo",
status: "Estado",
actions: "Acciones",
        },
        dialog: {
edit: "Edición de Informativo",
add: "Informativo",
update: "Editar Informativo",
readonly: "Solo Visualización",
          form: {
priority: "Prioridad",
title: "Título",
text: "Texto",
mediaPath: "Archivo",
status: "Estado",
high: "Alta",
medium: "Media",
low: "Baja",
active: "Activo",
inactive: "Inactivo",
          },
          buttons: {
add: "Agregar",
edit: "Actualizar",
okadd: "Aceptar",
cancel: "Cancelar",
close: "Cerrar",
attach: "Archivo",
          },
        },
        confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage: "Esta acción no se puede deshacer.",
        },
        toasts: {
success: "Operación realizada con éxito",
deleted: "Registro eliminado",
        },
      },
      campaignsConfig: {
        title: "Configuraciones de Campañas",
      },
      queues: {
        title: "Colas & Chatbot",
        table: {
name: "Nombre",
color: "Color",
greeting: "Mensaje de saludo",
orderQueue: "Orden de la cola (bot)",
actions: "Acciones",
ID: "ID",
        },
        buttons: {
          add: "Agregar cola",
        },
        toasts: {
success: "Cola guardada con éxito",
deleted: "Cola eliminada con éxito",
        },
        confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage:
  "¿Estás seguro? ¡Esta acción no se puede deshacer! Los tickets de esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
        },
      },
      queue: {
        queueData: "Datos",
      },
      queueSelect: {
inputLabel: "Colas",
inputLabelRO: "Colas solo lectura",
withoutQueue: "Sin cola",
      },
      reports: {
        title: "Informes de Atenciones",
        table: {
id: "Ticket",
user: "Usuario",
dateOpen: "Fecha de Apertura",
dateClose: "Fecha de Cierre",
NPS: "NPS",
status: "Estado",
whatsapp: "Conexión",
queue: "Cola",
actions: "Acciones",
lastMessage: "Últ. Mensaje",
contact: "Cliente",
supportTime: "Tiempo de Atención",
        },
        buttons: {

filter: "Filtrar",
onlyRated: "Solo Evaluados",
        },
       searchPlaceholder: "Buscar...",

      },
      queueIntegration: {
        title: "Integraciones",
        table: {
id: "ID",
type: "Tipo",
name: "Nombre",
projectName: "Nombre del Proyecto",
language: "Idioma",
lastUpdate: "Última actualización",
actions: "Acciones",
        },
        buttons: {
          add: "Agregar Proyecto",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage:
  "¿Estás seguro? ¡Esta acción no se puede deshacer! Y será removido de las colas y conexiones vinculadas",
        },
      },
      users: {
        title: "Usuarios",
        table: {
status: "Estado",
name: "Nombre",
email: "Correo Electrónico",
profile: "Perfil",
startWork: "Inicio de trabajo",
endWork: "Fin de trabajo",
actions: "Acciones",
ID: "ID",
        },
        buttons: {
          add: "Agregar usuario",
        },
        toasts: {
          deleted: "Usuario eliminado con éxito.",
        },
        confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage:
  "Todos los datos del usuario se perderán. Los tickets abiertos de este usuario se moverán a la cola.",
        },
      },
      compaies: {
        title: "Empresas",
        table: {
ID: "ID",
status: "Activo",
name: "Nombre",
email: "Correo Electrónico",
password: "Contraseña",
phone: "Teléfono",
plan: "Plan",
active: "Activo",
numberAttendants: "Agentes",
numberConections: "Conexiones",
value: "Valor",
namePlan: "Nombre del Plan",
numberQueues: "Colas",
useCampaigns: "Campañas",
useExternalApi: "Rest API",
useFacebook: "Facebook",
useInstagram: "Instagram",
useWhatsapp: "Whatsapp",
useInternalChat: "Chat Interno",
useSchedules: "Agendamiento",
createdAt: "Creada En",
dueDate: "Vencimiento",
lastLogin: "Último Login",
actions: "Acciones",
money: "$",
yes: "Sí",
no: "No",
document: "CNPJ/CPF",
recurrence: "Recurrencia",
monthly: "Mensual",
bimonthly: "Bimestral",
quarterly: "Trimestral",
semester: "Semestral",
yearly: "Anual",
clear: "Limpiar",
delete: "Eliminar",
user: "Usuario",
save: "Guardar",

        },
        buttons: {
add: "Agregar empresa",
        },
        toasts: {
          deleted: "Empresa eliminada con éxito.",
        },
        confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage:
  "Todos los datos de la empresa se perderán. Los tickets abiertos de este usuario se moverán a la cola.",
        },
      },
      plans: {
        form: {
name: "Nombre",
users: "Usuarios",
connections: "Conexiones",
campaigns: "Campañas",
schedules: "Agendamientos",
enabled: "Habilitadas",
disabled: "Deshabilitadas",
clear: "Cancelar",
delete: "Eliminar",
save: "Guardar",
yes: "Sí",
no: "No",
money: "$",
public: "Público",

        },
      },
      helps: {
        title: "Centro de Ayuda",
        settings: {
codeVideo: "Código del Video",
description: "Descripción",
clear: "Limpiar",
delete: "Eliminar",
save: "Guardar",
        },
      },
      schedules: {
        title: "Agendamientos",
        confirmationModal: {
deleteTitle: "¿Estás seguro de que deseas eliminar este Agendamiento?",
deleteMessage: "Esta acción no se puede deshacer.",
        },
        table: {
contact: "Contacto",
body: "Mensaje",
sendAt: "Fecha de Agendamiento",
sentAt: "Fecha de Envío",
status: "Estado",
actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Agendamiento",
        },
        toasts: {
          deleted: "Agendamiento eliminado con éxito.",
        },
      },
      tags: {
        title: "Tags",
        confirmationModal: {
deleteTitle: "¿Estás seguro de que deseas eliminar esta Etiqueta?",
deleteMessage: "Esta acción no se puede deshacer.",
        },
        table: {
id: "ID",
name: "Nombre",
kanban: "Kanban",
color: "Color",
tickets: "Registros de Etiquetas",
contacts: "Contactos",
actions: "Acciones",

        },
        buttons: {
         add: "Nueva Etiqueta",
        },
        toasts: {
          deleted: "Etiqueta eliminada con éxito.",
        },
      },

      tagsKanban: {
title: "Tableros",
laneDefault: "En abierto",
        confirmationModal: {
deleteTitle: "¿Estás seguro de que deseas eliminar este Tablero?",
deleteMessage: "Esta acción no se puede deshacer.",
        },
        table: {
name: "Nombre",
color: "Color",
tickets: "Tickets",
actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Tablero",
        },
        toasts: {
          deleted: "Tablero eliminado con éxito.",
        },
      },

      files: {
        title: "Lista de archivos",
        table: {
name: "Nombre",
contacts: "Contactos",
actions: "Acción",
        },
        toasts: {
deleted: "¡Lista eliminada con éxito!",
deletedAll: "¡Todas las listas han sido eliminadas con éxito!",
        },
        buttons: {
add: "Agregar",
deleteAll: "Eliminar Todos",
        },
        confirmationModal: {
deleteTitle: "Eliminar",
deleteAllTitle: "Eliminar Todos",
deleteMessage: "¿Estás seguro de que deseas eliminar esta lista?",
deleteAllMessage: "¿Estás seguro de que deseas eliminar todas las listas?",
        },
      },
      settings: {
success: "Configuraciones guardadas con éxito.",
title: "Configuraciones",
        tabs: {
options: "Opciones",
plans: "Planes",
helps: "Ayuda",
        },
        settings: {
          userCreation: {
            name: "Creación de usuario",
            options: {
enabled: "Activado",
disabled: "Desactivado",

            },
          },
          tabs: {
options: "Opciones",
schedules: "Horarios",
plans: "Planes",
help: "Ayuda",
          },
          options: {
disabled: "Deshabilitado",
enabled: "Habilitado",
updating: "Actualizando...",
creationCompanyUser: "Creación de Empresa/Usuario",
evaluations: "Evaluaciones",
officeScheduling: "Agendamiento de Horario",
queueManagement: "Gestión por Cola",
companyManagement: "Gestión por Empresa",
connectionManagement: "Gestión por Conexión",
sendGreetingAccepted: "Enviar saludo al aceptar el ticket",
sendMsgTransfTicket:
  "Enviar mensaje al transferir sector/agente",
checkMsgIsGroup: "Ignorar Mensajes de Grupos",
chatBotType: "Tipo de Bot",
userRandom: "Seleccionar agente aleatorio",
buttons: "Botones",
acceptCallWhatsapp: "¿Informar que no acepta llamadas en WhatsApp?",
sendSignMessage: "Permitir que el agente elija ENVIAR Firma",
sendGreetingMessageOneQueues:
  "Enviar saludo cuando solo haya una cola",
sendQueuePosition: "Enviar mensaje con la posición en la cola",
sendFarewellWaitingTicket:
  "Enviar mensaje de despedida en la espera",
acceptAudioMessageContact:
  "¿Aceptar recibir audios de todos los contactos?",
enableLGPD: "Habilitar tratamiento LGPD",
requiredTag: "Etiqueta obligatoria para cerrar ticket",
closeTicketOnTransfer: "Cerrar ticket al transferir a otra cola",
DirectTicketsToWallets: "Mover automáticamente al cliente a la cartera",
showNotificationPending: "Mostrar notificación para tickets pendientes",

          },
          customMessages: {
sendQueuePositionMessage: "Mensaje de posición en la cola",
AcceptCallWhatsappMessage: "Mensaje para informar que no acepta llamadas",
greetingAcceptedMessage: "Mensaje de saludo al aceptar ticket",
transferMessage: "Mensaje de transferencia - ${queue.name} = cola destino",
          },
          LGPD: {
            title: "LGPD",
welcome: "Mensaje de bienvenida (LGPD)",
linkLGPD: "Enlace a la política de privacidad",
obfuscateMessageDelete: "Ofuscar mensaje eliminado",
alwaysConsent: "Siempre solicitar consentimiento",
obfuscatePhoneUser: "Ofuscar número de teléfono para usuarios",
enabled: "Habilitado",
disabled: "Deshabilitado",
          },
        },
      },
      messagesList: {
        header: {
assignedTo: "Asignado a:",
dialogRatingTitle:
  "¿Desea dejar una evaluación de atención para el cliente?",
dialogClosingTitle: "¡Finalizando la atención con el cliente!",
dialogRatingCancel: "Con mensaje de despedida",
dialogRatingSuccess: "Resolver y enviar evaluación",
dialogRatingWithoutFarewellMsg: "SIN mensaje de despedida",
ratingTitle: "Elija un menú de evaluación",
notMessage: "Ningún mensaje seleccionado",
amount: "Valor de prospección",

          buttons: {
return: "Regresar",
resolve: "Resolver",
reopen: "Reabrir",
accept: "Aceptar",
rating: "Enviar Evaluación",
enableIntegration: "Habilitar integración",
disableIntegration: "Deshabilitar integración",
logTicket: "Registros del Ticket",
requiredTag: "Debe asignar una etiqueta antes de cerrar el ticket.",

          },
        },
      },
      messagesInput: {
placeholderPrivateMessage:
  "Escribe un mensaje o presiona / para respuestas rápidas",
placeholderOpen:
  "Escribe un mensaje o presiona / para respuestas rápidas",
placeholderClosed:
  "Reabre o acepta este ticket para enviar un mensaje.",
signMessage: "Firmar",
privateMessage: "Mensaje Privado",
      },
      contactDrawer: {
        header: "Datos del contacto",
        buttons: {
edit: "Editar contacto",
block: "Bloquear",
unblock: "Desbloquear",
        },
        extraInfo: "Otras informaciones",
      },
      messageVariablesPicker: {
        label: "Variables disponibles",
        vars: {
contactFirstName: "Primer Nombre",
contactName: "Nombre",
user: "Agente",
greeting: "Saludo",
protocolNumber: "Protocolo",
date: "Fecha",
hour: "Hora",
ticket_id: "Nº del Ticket",
queue: "Sector",
connection: "Conexión",

        },
      },
      ticketOptionsMenu: {
schedule: "Agendamiento",
delete: "Eliminar",
transfer: "Transferir",
registerAppointment: "Observaciones del Contacto",
resolveWithNoFarewell: "Finalizar sin despedida",
acceptAudioMessage: "¿Aceptar audios del contacto?",

        appointmentsModal: {
title: "Observaciones del Ticket",
textarea: "Observación",
placeholder: "Ingrese aquí la información que desea registrar",

        },
        confirmationModal: {
title: "Eliminar el ticket del contacto",
titleFrom: "del contacto ",
message:
  "¡Atención! Todos los mensajes relacionados con el ticket se perderán.",
        },
        buttons: {
delete: "Eliminar",
cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageInput: {
        tooltip: {
signature: "Habilitar/Deshabilitar Firma",
privateMessage: "Habilitar/Deshabilitar Mensaje Privado",
meet: "Enviar enlace para videoconferencia",

        },
        type: {
imageVideo: "Fotos y vídeos",
cam: "Cámara",
contact: "Contacto",
meet: "Videollamada",

        },
      },
      messageOptionsMenu: {
delete: "Eliminar",
reply: "Responder",
edit: "Editar",
forward: "Reenviar",
toForward: "Reenviar",
talkTo: "Hablar Con",
        confirmationModal: {
title: "¿Eliminar mensaje?",
message: "Esta acción no se puede deshacer.",
        },
      },
      invoices: {
        table: {
invoices: "Facturas",
details: "Detalles",
users: "Usuarios",
connections: "Conexiones",
queue: "Colas",
value: "Valor",
expirationDate: "Fecha Venc.",
action: "Acción",

        },
      },
      backendErrors: {
ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
ERR_NO_DEF_WAPP_FOUND:
  "No se encontró un WhatsApp predeterminado. Verifique la página de conexiones.",
ERR_WAPP_NOT_INITIALIZED:
  "Esta sesión de WhatsApp no se ha inicializado. Verifique la página de conexiones.",
ERR_WAPP_CHECK_CONTACT:
  "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
ERR_WAPP_DOWNLOAD_MEDIA:
  "No se pudo descargar el archivo multimedia de WhatsApp. Verifique la página de conexiones.",
ERR_INVALID_CREDENTIALS:
  "Error de autenticación. Por favor, inténtelo nuevamente.",
ERR_SENDING_WAPP_MSG:
  "Error al enviar mensaje de WhatsApp. Verifique la página de conexiones.",
ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
ERR_OTHER_OPEN_TICKET: "Ya existe un ticket abierto para este contacto.",
ERR_SESSION_EXPIRED: "Sesión expirada. Por favor, inicie sesión nuevamente.",
ERR_USER_CREATION_DISABLED:
  "La creación de usuarios ha sido deshabilitada por el administrador.",
ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
ERR_FETCH_WAPP_MSG:
  "Error al buscar el mensaje en WhatsApp, puede que sea muy antiguo.",
ERR_QUEUE_COLOR_ALREADY_EXISTS:
  "Este color ya está en uso, elija otro.",
ERR_WAPP_GREETING_REQUIRED:
  "El mensaje de saludo es obligatorio cuando hay más de una cola.",
ERR_OUT_OF_HOURS: "¡Fuera del Horario de Atención!",

      },
    },
  },
};

export { messages };
