export class Constants {
  public static readonly KEY_SESSION = 'SESSION';
  public static readonly LAST_DATE_SYNC = 'LAST_DATE_SYNC_V5';

  public static readonly DB_NAME = 'oktopusV4';
  public static readonly DB_NAME_PARAMETER = 'oktopus-parameter';
  public static readonly DB_NAME_LANDING_TAKEOFF = 'oktopus-landing-takeoffV3';
  public static readonly DB_NAME_FINDING = 'oktopus-findingV3';
  public static readonly DB_NAME_DISPERSION = 'oktopus-dispersionV3';
  public static readonly DB_NAME_NOTIFICATION = 'oktopus-notificationV3';

  public static FORMAT_TIME = 'HH:mm';
  public static FORMAT_DATE = 'dd/MM/yyyy';
  public static FORMAT_TIME_HHMMSS = 'HH:mm:ss';
  public static PAGINATION_DEFAULT = [15, 30, 100];
  public static readonly TABLE_PAGE_SIZE_OPTIONS = [10, 30, 50];
  public static LAST_URL = 'lastUrl';
  public static NOT_SHOW_ERROR = 'NSE000001';
  public static ALL_OPTION = 'Todos';
  public static SELECT_OPTION = 'Seleccione';
  public static readonly IDAIRPORT_FAKE = 'e1713b83-7259-42e4-ac97-3665e11cef8b';
  public static readonly ID_FILE_AIRPORT = '23655ec9-9474-4191-a09e-c0a6f0de191c';
  public static readonly ID_ALL_LANDING_TAKEOFF = 'bf49538e-0d0a-4d48-a780-f73e3887cbf0';
  public static readonly FLIGHT_CLASS_VIC_VPE = '1';
  public static readonly URL_FILE_STORAGE = 'atoctopusapi.blob.core.windows.net';
  public static readonly FAUNA_COORDINATOR_LABEL = 'Coordinador de Fauna Silvestre';// Using in Create Impact

  public static readonly ALL_MODULES = [
    {
      id: 'PER001',
      nombre: 'Plataforma',
      orden: 1,
      ruta: null,
      hijos: [],
      imagen: 'assets/images/plataforma.png'
    },
    {
      id: 'PER009',
      nombre: 'Fauna',
      orden: 7,
      ruta: null,
      hijos: [],
      imagen: 'assets/images/fauna.png'
    },
    {
      id: 'PER015',
      nombre: 'Administracion',
      orden: 1,
      ruta: null,
      hijos: [],
      imagen: 'assets/images/administracion.png'
    },
    {
      id: 'PER022',
      nombre: 'SEI',
      orden: 1,
      ruta: null,
      hijos: [],
      imagen: 'assets/images/sei.png'
    },
    {
      id: 'PER025',
      nombre: 'Gestion',
      orden: 1,
      ruta: null,
      hijos: [],
      imagen: 'assets/images/operaciones.png'
    }
  ];

  public static readonly USER_SAP = {
    USER: 'EPINEDO',
    PASSWORD: 'Adp2019**'
  };
  public static UPLOAD_FILE_STATUS = {
    NONE: 'FIST0001',
    PROGRESS: 'FIST0002',
    FINISH: 'FIST0003'
  };

  public static PAGINATOR = {
    INDEX: 1,
    TAMANIO: 10
  };
  public static readonly OPTIONS_PAGINATION = [
    {
      name: 10,
      length: 10
    },
    {
      name: 30,
      length: 30
    },
    {
      name: 50,
      length: 50
    }

  ];

  public static DEFAULT_LENGTH_PAGINATION: 10;
  public static COMMENT = {
    CA_ADP: 'ENTI0003',
    LANDING_TAKEOFF: 'ENTI0004'
  };
  public static readonly MAT_AUTOCOMPLETE = {
    PLATE: 1,
    AIRPORT: 2,
    AIRLINE: 3
  };

  public static readonly STATUS_PARAM = {
    REFUSED: 'ESCA0001',
    PENDING: 'ESCA0002',
    RESEND: 'ESCA0003',
    APPROVED: 'ESCA0004',
    IN_PROGRESS: 'ESCA0005',
    FINALIZED: 'ESCA0006',
  };

  public static readonly STATUS_DESCRIPTION = {
    IN_PROGRESS: 'En progreso',
    FINALIZED: 'Finalizado',
  };
  public static readonly NO_VALUE = 'NO_VALUE';

  public static readonly PARAMETERS = {
    RETENTION_DAYS: 'RETE',
    FLIGHT_CLASS: 'CLAV',
    FLIGHT_TYPE: 'TPVU',
    AIRPORTS: 'AEROP',
    AIRPORTS_ADP: 'AEROP_ADP',
    PEA: 'PEAL',
    PERSONAL_ADP: 'PERSO',
    AIRLINES: 'AERO',
    COMPANY_RATED_CARGO: 'CVAL',
    PLATE: 'MATR',
    RAMP_SERVICES: 'SERM',
    REQUEST_NOTAM_STATUS: 'ESSO',
    REQUEST_NOTAM_REASON: 'MOSN',
    REQUEST_NOTAM_TYPE: 'TPSN',
    NOTAM_TYPE: 'NTIP',
    TRANSACTION_STATUS: 'ESAC',
    TRANSACTION_TYPE: 'TPAC',
    TRANSACTION_PLACE: 'LUAC',
    TRANSACTION_COMPANY: 'EMPR',
    EMAIL: 'ACAS',
    PLANE_TYPE: 'TIAE',
    ACCESS_CHARGES_STATUS: 'ESCA',
    ACCESS_CHARGES_WEIGHT: 'PECA',
    SIGHTING_ORIGIN: 'AVOR',
    SIGHTING_STATE: 'AVES',
    FINDING_SIZE: 'TITA',
    FINDING_STATE: 'HAES',
    FAUNA: 'AVTF',
    EQUIPMENT: 'DIEQ',
    MUNITIONS: 'DIMU',
    DISPERSION_STATE: 'DIES',
    IMPACT_STATE: 'IMES',
    IMPACT_FlIGHT_PHASE: 'IMFV',
    IMPACT_ZONE: 'IMZI',
    HORA: 'HORA',
    FORCED_FAUNA_CLOSURE: 'ESFF',
  };

  public static readonly ENTITIES = {
    PARAMETER_VALUE: 'ENTI0001',
    FILE: 'ENTI0002',
    LANDING_TAKEOFF: 'ENTI0003',
    RAMP_SERVICES: 'ENTI0004',
    TRANSACTION: 'ENTI0005',
    NOTE: 'ENTI0006',
    ANNOTATION: 'ENTI0007',
    USER_DETAIL: 'ENTI0008',
    SIGHTING: 'ENTI0009',
    IMPACT: 'ENTI0010',
    NOTIFICATION: 'ENTI0011',
    DISPERSION: 'ENTI0012',
    FINDING: 'ENTI0013',
    AIRPORT_KEY_VALUE: 'ENTI0014',
    OCCURRENCE: 'ENTI0015',
    ALL_LANDING_TAKEOFF: 'ENTI0016',
  };

  public static readonly OPERATION_STATUS = {
    TO_COMPLETE_LANDING_REGISTER: {
      ID: 'OPST0001',
      VALUE: 'Por Completar Registro de Aterrizaje'
    },
    TO_COMPLETE_TAKEOFF_REGISTER: {
      ID: 'OPST0002',
      VALUE: 'Por Completar Registro de Despegue'
    },
    LANDING_TAKEOFF_COMPLETED: {
      ID: 'OPST0003',
      VALUE: 'Aterrizaje y Despegue Completado'
    }
  };

  public static readonly SAP_STATUS = {
    NO_AVAILABLE_TO_SEND: {
      ID: 'SAST0001',
      VALUE: 'No Disponible para Envío'
    },
    TO_SEND_OPERATION: {
      ID: 'SAST0002',
      VALUE: 'Por Enviar Operación'
    },
    TO_UPDATE_TAKEOFF: {
      ID: 'SAST0003',
      VALUE: 'Por Actualizar Despegue'
    }
  };

  public static readonly TYPE_REGISTER_SAP = {
    A: 'A', // Todos los campos necesarios de Aterrizaje
    B: 'B', // Todos los campos necesarios de Aterrizaje y Despegue (Sin Cod op)
    C: 'C' // Primero haberse ejecutado A y luego actualizar Despegue (Con Cod op)
  };

  public static readonly FORCE_CLOSE = {
    YES: '1',
    NO: '0'
  };

  public static readonly SOCIETY = {
    LANDING_TAKEOFF: '330'
  };

  public static readonly MODAL_ACTION = {
    REGISTER: 1,
    EDIT: 2,
    DELETE: 3,
    APPROVED: 4,
    REFUSED: 5
  };

  public static TRANSACTION_STATE = {
    ON_REGISTER: 'ESAC0001',
    FINALIZE: 'ESAC0002',
    FINALIZE_WITHOUT_SIGNATURE: 'ESAC0003'
  };

  public static NOTAM_STATE = {
    ON_REGISTER: 'ESSO0001',
    ACTIVE: 'ESSO0002',
    CANCELED: 'ESSO0003',
    REPLACE: 'ESSO0004',
    FINALIZE: 'ESSO0005',
    VALID: '' // TODO JC:JC change value
  };

  public static NOTAM_TYPE = {
    NOTAM_N: 'TPSN0001',
    NOTAM_R: 'TPSN0002',
    NOTAM_C: 'TPSN0003'
  };

  public static readonly TYPE_AIRPORT = {
    GENERAL: 'TPAE0001',
    ADP: 'TPAE0002'
  };

  public static readonly TYPES_OF_FILES = {
    FILE: 'TIAR0002'
  };

  public static readonly TYPES_OF_ENTITIES = {
    NOTE: 'ENTI0001',
    TRANSACTION: 'ENTI0002'
  };

  public static MIME_TYPES = {
    EXCEL: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    PDF: 'application/pdf',
    IMAGE: 'image/jpeg'
  };

  public static TYPE_FILE_ORIGIN = {
    CAMERA: 'TFO00001',
    FILE: 'TFO00002'
  };

  public static OTHERS_CONSTANTS = {
    BUSINESS: 'EMPR0003' //   ToDO JC:JC Change value ¡important!
  };

  public static ACTIONS_NOTAMS = {
    REPLACE: '0',
    CANCEL: '1',
    EDIT: '2'
  };

  public static RUC = 'TIEN0003';

  public static IDENTITY_TYPE = [
    {
      NAME: 'L.E/DNI',
      ONLY_NUMBER: true,
      IS_EXACT: true,
      LENGTH: 8,
      VALUE: 'TIEN0001'
    }, {
      NAME: 'CARNET EXT.',
      ONLY_NUMBER: false,
      IS_EXACT: false,
      LENGTH: 12,
      VALUE: 'TIEN0002'
    }, {
      NAME: 'RUC',
      ONLY_NUMBER: true,
      IS_EXACT: true,
      LENGTH: 11,
      VALUE: 'TIEN0003'
    }, {
      NAME: 'PASAPORTE',
      ONLY_NUMBER: false,
      IS_EXACT: false,
      LENGTH: 12,
      VALUE: 'TIEN0004'
    }, {
      NAME: 'OTROS',
      ONLY_NUMBER: false,
      IS_EXACT: false,
      LENGTH: 15,
      VALUE: 'TIEN0005'
    }

  ];
  static FILE_TYPES = {
    NOTE: 'TIAR0001',
    TRANSACTION_ACTS: 'TIAR0003',
    TRANSACTION_ACTIONS: 'TIAR0004',
    DISPERSION: 'TIAR0005',
    FINDING: 'TIAR0006',
  };

  static ENTITIES_TYPE = {
    NOTE: 'ENTI0001',
    TRANSACTION: 'ENTI0002',
    FAUNA: 'ENTI0007',
    DISPERSION: 'ENTI0008',
    FINDING: 'ENTI0009',
    IMPACT: 'ENTI0010',
    SIGHTING: 'ENTI0011'
  };

  public static TIDS_PARAMETER = {
    TO: 'TIDS0001',
    WITH_COPY: 'TIDS0002',
    HIDDEN_COPY: 'TIDS0003'
  };

  public static USER_MODULES = 'USER_MODULES';

  public static readonly UNIQUE_ERROR = {
    LANDING: {PLATE: 1, FLIGHT: 2},
    TAKEOFF: {PLATE: 3, FLIGHT: 4}
  };
  public static readonly VALID_ERROR = {
    LANDING: {PLATE: 1, AIRPORT: 2},
    TAKEOFF: {PLATE: 3, AIRPORT: 4}
  };

  public static DISPERSION_STATE = {
    ON_REGISTER: 'DIES0001',
    FINALIZE: 'DIES0002',
  };

  public static IMPACT_STATE = {
    ON_REGISTER: 'IMES0001',
    FINALIZE: 'IMES0002',
  };

  public static FAUNA_STATE = {
    ON_REGISTER: {
      ID: 'AVES0001',
      DESCRIPTION: 'EN REGISTRO'
    },
    FINALIZE: {
      ID: 'AVES0002',
      DESCRIPTION: 'FINALIZADO'
    },
  };

  public static TYPE_AIRPORT_VALUE = {
    FAUNA: 'TPLA0001',
    ORIGIN: 'TPLA0002',
  };

  public static COUNT_DIS_LIST = 5;

  public static readonly NOTIFICATION = {
    WITH_OPERATION: 1,
    WITHOUT_OPERATION: 2,
    LANDING: 1,
    TAKEOFF: 2
  };

  public static OTHER_OPTION = {
    PARAM: 'OTRO',
    DESCRIPTION: 'Otro'
  };

  public static ALL_OPTION_PARAM = {
    PARAM: 'TODOS',
    DESCRIPTION: 'Todos'
  };

  public static FINDING_STATE = {
    REGISTER: 'HAEP0001',
    END: 'HAEP0002',
  };

  public static NOTIFICATION_STATUS = {
    IN_PROGRESS: {ID: 'NOES0001', VALUE: 'En registro'},
    FINALIZED: {ID: 'NOES0002', VALUE: 'Finalizado'},
  };

  public static MAX_LENGTH_VALIDATION = {
    // General
    TEXTAREA: 300,
    TEXTAREA_2: 600,
    NOTIFIED_BY: 50,
    FLIGHT: 15,
    PLATE: 10,
    OBSERVED_NUMBER: 4,
    CHARGE: 100,
    // Sighting
    REGISTER_BY: 50,
    SIGHTING_QUANTITY: 4,
    // Notification
    OBSERVATION_ZONE: 200,
    // Dispersion
    PLACE_ACTIVITY: 100,
    FAUNA_QUANTITY: 4,
    // FINDING
    FINDING_PLACE: 100,
    PICK_UP_BY: 100,
    COORDINATOR: 100,
    REFERENCE_ENTRY: 100,
    REFERENCE_OUTPUT: 100,
    // Impact
    TEMPERATURE: 3,
    IMPACT_HEIGHT: 5,
    ANIMALS_NUMBER: 4,
    // Notam
    NOTAM_NUMBER: 20,
    // Veritication
    VERIFIED_PERSON: 100,
    VERIFICATION_PLACE: 40,
    CORRECTIVE_ACTIONS: 1000,
    ACTS_CONTROL: 1000,
    RESULTS: 1000,
  };
}
