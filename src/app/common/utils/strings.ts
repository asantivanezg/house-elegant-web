export class Strings {

  public static TEXT_BASICS = {
    INFORMATION: 'Información',
    ALERT: 'Alerta',
    ACCEPT: 'Aceptar',
    CANCEL: 'Cancelar',
    LOADING: 'Cargando...',
    ERROR: 'Error',
    CONFIRMATION: 'Confirmación',
    SUCCESS: 'Éxito',
    OTHERS: 'Otros',
    PERMISSION: 'Permisos',
    MODIFY: 'Modificar',
    ADD: 'Agregar',
    PAUSE: 'Pausar',
    RESUME: 'Reanudar'
  };

  public static SUCCESS_MESSAGE = {
    SAVE: 'La información se guardó con éxito.',
    UPDATE: 'La información se actualizó con éxito.',
    EMAIL: 'Se envió el correo con éxito.',
    DELETE: 'Se procederá con eliminar definitivamente el elemento. ¿Desea continuar?',
    ESTADO: 'Se procederá con inactivar el elemento y no estará disponible para utilizarlo en el sistema. ¿Desea continuar?',
    ESTADOACTIVO: 'Se procederá con activar el elemento y estará disponible para seleccionarlo en el sistema. ¿Desea continuar?',
    DOWNLOAD: 'La información se descargó con éxito.',
    SAVE_LANDING_TAKEOFF: 'Se ha guardado la información de la operación',
    SAVE_TRANSACTIONS: 'Se ha guardado la información del acta de constatación y acciones correctivas',
    SAVE_NOTAM: 'Se ha guardado la información de la solicitud',
    SAVE_SIGHTING: 'Se ha guardado la informacion de avistamiento',
    DELETED_LANDING_TAKEOFF: 'Se ha eliminado el registro correctamente',
    UPDATE_TRANSACTION: 'Se ha procesado correctamente el cambio de estado de las actas de constatación.',
    UPDATE_TRANSACTION_AND_NOT: 'Se ha procesado correctamente el cambio de estado de las actas de constatación [:updated]. Ocurrió un error inesperado al intentar actualizar las siguientes actas de constatación: [:notUpdated]',
    SUCCESS_SEND_SAP_TAKEOFF: 'Se ha enviado a SAP la operación :codOperacion del despegue correctamente',
    SUCCESS_SEND_SAP: 'Se ha enviado a SAP la operación :codOperacion del despegue correctamente',
    ACCESS_CHARGES_SEA: {
      APPROVE: 'Se ha grabado correctamente el estado APROBADO en el cargo de acceso',
      REFUSE: 'Se ha grabado correctamente el estado RECHAZADO en el cargo de acceso'
    },
    ACCESS_CHARGES_ADP: {
      RESEND: 'Se ha grabado correctamente el estado REENVIADO en el cargo de acceso'
    },
    SAVE_USER_SAP: 'Usuario SAP registrado con éxito',
    SEND_MAIL_FORCE_CLOSE: 'Correo enviado con éxito',
    SAVE_NOTIFICATION: 'Se ha guardado la información correctamente',
    SEND_EMAIL_FINDING: 'Se ha enviado correctamente el reporte de hallazgo.',
    SEND_EMAIL_DISPERSION: 'Se ha enviado correctamente la actividad de dispersión',
    SEND_EMAIL_NOTIFICATION: 'Se ha enviado correctamente la notificación',
    SEND_EMAIL_IMPACT: 'Se ha enviado correctamente el impacto',
  };

  public static ERROR_DEFAULT = {
    HEADER: Strings.TEXT_BASICS.INFORMATION,
    MESSAGE: 'Lo sentimos, ocurrió algo inesperado. Contacte con el administrador.',
    MESSAGE_RETRY: 'Lo sentimos, ocurrió algo inesperado. Contacte con el administrador. Inténtelo más tarde.'
  };

  public static COMMON_HEADER_TEXT_DISCLAIMER = {
    CANCEL: 'Salir',
  };

  public static COMMON_TEXT_DISCLAIMER = {
    SAVE: 'Se procederá a grabar la información de la operación. ¿Desea continuar?',
    CANCEL: 'Se procederá a cerrar la pantalla sin grabar la información registrada. ¿Desea continuar?',
    DELETE: 'Se procederá a eliminar el registro del aterrizaje y despegue. Esta acción no podrá ser revertida. ¿Desea continuar?'
  };

  public static TEXT_DISCLAIMER_HEADER = {
    LOGOUT: 'Cerrar sesión',
    SAVE_LANDING_TAKEOFF: 'Grabar aterrizaje',
    CANCEL_LANDING_TAKEOFF: 'Salir',
  };

  public static TEXT_ALERT = {
    HOUR_TAKEOFF: 'La fecha/hora de despegue no puede ser menor a la fecha/hora de aterrizaje',
    HOUR_LANDING: 'La fecha/hora de aterrizaje no puede ser mayor a la fecha/hora de despegue'
  };
  public static TEXT_DISCLAIMER = {
    LOGOUT: '¿Seguro que deseas cerrar sesión?',
    LANDING_TAKEOFF: {
      SAVE: 'Se procederá a grabar la información de la operación. ¿Desea continuar?',
      CANCEL: 'Se procederá a cerrar la pantalla sin grabar la información registrada. ¿Desea continuar?',
      DELETE: 'Se procederá a eliminar el registro del aterrizaje y despegue. Esta acción no podrá ser revertida. ¿Desea continuar?'
    },
    SAVE_TRANSACTIONS: 'Se procederá a grabar la información del acta de constatación y sus acciones correctivas. ¿Desea continuar? ',
    SAVE_DISPERSION: 'Se procederá a grabar la información de la actividad de dispersión. ¿Desea continuar?',
    SAVE_FINDING: 'Se procederá a grabar la información del hallazgo. ¿Desea continuar?',
    SAVE_NOTAM_N: 'Se procederá a grabar la información de la solicitud de NOTAM N. ¿Desea continuar?',
    SAVE_NOTAM_R: 'Se procederá a grabar la información de la solicitud de NOTAM R. ¿Desea continuar?',
    SAVE_NOTAM_C: 'Se procederá a grabar la información de la solicitud de NOTAM C. ¿Desea continuar?',
    LOG_OUT_VIEW: 'Se procederá a cerrar la pantalla sin grabar la información registrada ¿Desea continuar?',
    SENDS_TO_SAP: {
      REGISTER: 'Se procederá a enviar el registro de la operación a SAP. Esta acción no podrá ser revertida. ¿Desea continuar?',
      UPDATE: 'Se procederá a actualizar el registro de la operación en SAP con la información del despegue. Esta acción no podrá ser revertida. ¿Desea continuar?',
      FORCE_CLOSE: {
        TO_SEND_OPERATION: 'Las clases de vuelo son distintas en el aterrizaje y despegue, Se procederá a registrar dos operaciones en SAP con cierre forzado. Esta acción no podrá ser revertida. ¿Desea continuar?',
        TO_UPDATE_TAKEOFF: 'Las clases de vuelo son distintas en el aterrizaje y despegue, Se procederá al cierre forzado de la operación de aterrizaje existente y se registrará otra operación en SAP del despegue con cierre forzado. Esta acción no podrá ser revertida. ¿Desea continuar?'
      }
    },
    RAMP_SERVICES: {
      REGISTER: '¿Está seguro de agregar el servicio?',
      EDIT: '¿Está seguro de actualizar la información del servicio?',
      DELETE: 'Se procederá a eliminar el registro del servicio. Esta acción no podrá ser revertida. ¿Desea continuar?'
    },
    FLIGHT_CLASS_NOT_EQUAL: 'Se ha ingresado diferentes clases de vuelo en aterrizaje y despegue. ¿Desea continuar?',

    SEND_EMAIL_TRANSACTION: 'Se procederá a enviar por correo el acta de constatación y las acciones correctivas. ¿Desea continuar?',
    SEND_EMAIL_NOTAM: 'Se procederá a enviar por correo el NOTAM. ¿Desea continuar?',
    CHANGE_TRANSACTION_TO_FINALIZE: 'Se procederá a cambiar el estado a FINALIZADO FIRMADO, a las actas de constatación número: [ $1 ]  ¿Desea continuar?',
    CHANGE_TRANSACTION_TO_FINALIZE_WITHOUT_SIGNATURE: 'Se procederá a cambiar el estado a FINALIZADO SIN FIRMAR, a las actas de constatación número: $1 ¿Desea continuar?',
    ACCESS_CHARGES_ADP: {
      EXPORT_EXCEL: 'Se procederá a exportar el resultado de la pantalla a un archivo Excel. ¿Desea continuar?',
      RESEND: 'Se procederá a REENVIAR el cargo de acceso del vuelo: :flight ¿Desea continuar?'
    },
    ACCESS_CHARGES_SEA: {
      APPROVE: 'Se procederá a APROBAR el cargo de acceso del vuelo: :flight ¿Desea continuar?',
      REFUSE: 'Se procederá a RECHAZAR el cargo de acceso del vuelo: :flight ¿Desea continuar?'
    },
    NOTIFICATION: {
      EXPORT_EXCEL: 'Se procederá a exportar el resultado de la pantalla a un archivo Excel ¿Desea continuar?',
      SAVE: 'Se procederá a grabar la información de la notificación ¿Desea continuar?',
    },
    SEND_MAIL_FINDING: 'Se procederá a enviar por correo el hallazgo. ¿Desea continuar?',
    QUESTION_SEND_EMAIL_DISPERSION: 'Se procederá a enviar por correo la actividad de dispersión. ¿Desea continuar?',
    SEND_MAIL_NOTIFICATION: 'Se procederá a enviar por correo la notificación ¿Desea continuar?',
    IMPACT: {
      SEND_EMAIL: 'Se procederá a enviar por correo el registro de impacto. ¿Desea continuar?'
    },
    ADMINISTRATION: {
      ROLES_REQUIRED: 'Se requiere asignación de permisos al rol',
      SAVE_DATA: '¿Está seguro que desea registrar el rol?',
      SAVE_DATA_SUCCESS: 'Se ha registrado el rol exitosamente',
      DELETE_DATA: '¿Esta seguro que desea eliminar el rol?',
      SAVE_AIRPORT_CONFIGURATION: '¿Está seguro que desea registrar la información?'
    },
    FILE: 'El archivo se borrará permanentemente ¿Esta seguro que desea eliminar?'
  };

  public static COMMON_ERROR = {
    SELECT_EMAIL: 'Por favor seleccione algún correo destinatario.',
    SELECT_TRANSACTION: 'Por favor seleccione al menos una acta.',
    SELECT_NOTAM_TO_CANCEL: 'Para realizar esta acción, se debe seleccionar una solicitud de NOTAM que se encuentre en estado VIGENTE o VENCIDO y que tenga número de NOTAM.',
    SELECT_NOTAM_TO_REPLACE: 'Para realizar esta acción, se debe seleccionar una solicitud de NOTAM que se encuentre en estado VIGENTE y que tenga número de NOTAM.',
    DONT_HAS_INFORMATION: 'No existen resultados.',
    ERROR_USER_SAP: 'Usuario y/o contraseña incorrecto. Si el problema persiste contacte con el administrador.',
    DATE: 'La Fecha de Despegue debe ser mayor a la fecha de Aterrizaje',
    DATE_NOTAM: 'La Fecha Hasta debe ser mayor a la fecha de Desde',
    ELEMENT_EQUALS_DISPERSION_FAUNA: 'Por favor seleccione una fauna diferente.',
    ELEMENT_EQUALS_DISPERSION_EQUIPMENT: 'Por favor seleccione un equipo diferente.',
    INCOMPLETE_INFO: 'Por favor ingrese todo los datos',
    DOWNLOAD_ERROR: 'Ocurrió un error durante la descarga de la información.',
    ERROR_SAVE_DATA: 'Ocurrió un error al intentar guardar la información.',
    ERROR_SEND_EMAIL: 'Ocurrió un error al intentar enviar el reporte.',
    ERROR_LOADING_DATA: 'No se pudo cargar la información'
  };

  public static ERROR_IMAGE_FILE = {
    FILE_INVALID_IMAGE: 'EL archivo seleccionado no es una imagen válida.',
  };

  public static ERROR_HTML5 = {
    CAMERA_NOT_AVAILABLE: 'La función de cámara no está disponible para su dispositivo.',
    CAMERA_NOT_PERMISSIONS: 'Para poder usar esta función, debe dar permisos para que la aplicación pueda usar la cámara del dispositivo.'
  };

  public static CONTROL_LABELS = {
    ALL: '-TODOS-',
    ALL_NO_SELECT: 'TODOS',
    SELECT: '-SELECCIONE-'
  };

  public static BOOLEAN = {
    TRUE: 'SÍ',
    FALSE: 'NO'
  };

  public static ERROR_LOGIN_SETUP = {
    ERROR_ON_GET_DATA: 'Ocurrió un error al intentar obtener la data de configuración inicial.',
    ERROR_ON_SAVE_DATA: 'Ocurrió un error al intentar guardar la data de configuración inicial.',
    ERROR_ON_UPDATE_LAST_SYNC_DATE: 'Ocurrió un error al intentar actualizar la fecha de última sincronización.',
    ERROR_ON_CLEAN_DATABASE: 'Ocurrió un error al iniciar la sincronización. Contacte con el administrador.',
    ERROR_SERVICE_401: 'Por seguridad necesita ingresar nuevamente sus credenciales.',
    ERROR_USER_LOGIN_NOT_SAME: 'El usuario ingresado no es válido para restaurar su sesión.',
  };

  public static ERROR_LOGOUT = {
    REMOVE_DB: 'Ocurrio un error con el cierre de sesión',
    REMOVE_SESSION: 'Ocurrio un error al eliminar la sesión del usuario'
  };

  public static DONT_HAVE_PERMISSIONS = 'Usted no tiene permiso.';
  public static NOTAM_REQUIRED_FILE = 'Será obligatorio subir el archivo del NOTAM respectivo (Notam emitido por Corpac)';
  public static VALIDATION_GROUP = {
    CORRECT: 'Por favor ingrese todo los datos correctos.',
    REQUIRED: 'Por favor revise los campos obligatorios'
  };

  public static ERROR_LOAD_DATA = {
    ERROR_ON_LOAD_REASON_OBSERVATIONS: 'Ocurrió un error al cargar las observaciones.',
    ERROR_ON_LOAD_VISIT_DETAIL: 'Ocurrió un error al cargar el detalle de la visita.'
  };

  public static PWA_MESSAGES = {
    TITLE_INSTALL: 'Actualización',
    MESSAGE_INSTALL: 'Hay una nueva versión de la aplicación. ¿Quieres obtenerla?'
  };

  public static NETWORK_STATUS = {
    ONLINE: 'Conectado a internet',
    OFFLINE: '¡Se perdió la conexión a internet!',
    NEED_ONLINE: 'Con el fin de no perder su información, es necesario estar conectado a internet para poder realizar la acción solicitada.',
    NEED_ONLINE_DEFAULT: 'Se requiere de internet para realizar esta acción.'
  };

  public static readonly TITLE_ACTIONS = {
    LANDING_TAKEOFF: 'Bandeja de gestión de aterrizaje y despegue',
    VERIFICATION_TRAY: 'Bandeja de gestión de actas y constatación',
    CREATE_TRANSACTIONS: 'Acta de constatación',
    TRANSACTION_CORRECTIVE_ACTIONS: 'Acciones Correctivas',
    REQUEST_NOTAM: 'Bandeja de solicitudes de NOTAM',
    CREATE_NOTE_M: 'Solicitud de emisión de NOTAM',
    ACCESS_CHARGES_ADP: 'Bandeja de gestión de cargo de acceso - ADP',
    ACCESS_CHARGES_SEA: 'Bandeja de gestión de cargo de acceso - SEA',
    EXPORT_EXCEL: 'Exportar excel',
    SEND_EMAIL: 'Enviar por correo',
    SIGHTING: 'Bandeja de Gestión de Avistamiento',
    NOTIFICATIONS: 'Bandeja de Gestión de Notificaciones',
    DISPERSION: 'Bandeja de Gestión de Dispersión y Repulsión de Fauna Silvestre',
    FINDING: 'Bandeja de Gestión de Hallazgos',
    IMPACT: 'Bandeja de Gestión de Notificaciones de Choques con Fauna',
    OCCURRENCES: 'Bandeja de Gestión de Ocurrencias',
    PHYSICAL_TEST_INBOX: 'Bandeja de gestión de evaluación física del personal',
    REGISTER_PHYSICAL_TEST: 'Registro de evaluación física',
    VEHICLE_ANOMALIES: 'Bandeja de Gestión de Anomalías de Vehículos',
    ADMINISTRATION: 'CONFIGURACIÓN',
  };
  static LABEL_NOTAMS = {
    NOTAM_N: 'NOTAM N',
    NOTAM_R: 'NOTAM R',
    NOTAM_C: 'NOTAM C',
  };

  public static readonly CUSTOM_VALIDATION = {
    LANDING: {
      VALID_PLATE: 'Por favor registre una matrícula  válida en la sección aterrizaje.',
      VALID_AIRPORT: 'Por favor registre un aeropuerto válido en la sección aterrizaje.',
      UNIQUE_PLATE: 'No se permite registrar una matrícula ya existente en gestión.',
      UNIQUE_FLIGHT: 'No se permite registrar un vuelo ya existente en gestión.',
      DATE: 'La fecha de servicio rampa no puede ser menor a la fecha de aterrizaje'
    },
    TAKEOFF: {
      VALID_PLATE: 'Por favor registre una matrícula válida en la sección despegue.',
      VALID_AIRPORT: 'Por favor registre un aeropuerto válido en la sección despegue.',
      UNIQUE_PLATE: 'No se permite registrar una matrícula ya existente en gestión.',
      UNIQUE_FLIGHT: 'No se permite registrar un vuelo ya existente en gestión.',
      DATE: 'La fecha de servicio rampa no puede ser mayor a la fecha de despegue'
    },
    NOT_FOUND: 'Validación no identificada',
    NOT_FOUND_LANDING_TAKEOFF: 'Este registro no existe o ha sido eliminado',
    NOTIFICATION: {
      PLATE: 'Por favor registre una matrícula válida',
      SPECIE: 'Por favor elegir una especie.'
    },
    SIGHTING: {
      ALREADY_DATE: 'La fecha :fecha ya está registrada para el aeropuerto :aeropuerto y origen :origen',
      IS_NOT_NUMBER: 'Por favor ingrese sólo números.'
    }
  };
  static SENDER = 'Aeropuertos del Perú';

  static labelNotamReplace = 'remplazar';
  static labelNotamCancel = 'cancelar';

  static REGISTER_STATE = {
    IN_REGISTRY: 'EN REGISTRO',
    END: 'FINALIZADO'
  };

  static readonly NOT_FOUND = 'NotFound';
}
