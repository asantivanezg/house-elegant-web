export class User {

  id: number;
  idSession: number;
  name: string;
  lastName: string;
  motherLastName: string;
  email: string;
  token: string;
  dateSession: Date;
  dateLastSync: Date;
  pagination: number;
  userSap: string;
  passwordSap: string;
  dni: string;
  userPrincipalName: string;
  profiles: Array<Profile>;
  idAirportDefault: string;
  profile: string;
  idProfile: number;
  principalName: string;
  nameAirportDefault: string;
  isSea: boolean;
  idSea: string;

  constructor(id: number, idSession: number, name: string, lastName: string, motherLastName: string, email: string, token: string, dateSession: Date, dateLastSync: Date, pagination: number, userSap: string, passwordSap: string, dni: string, userPrincipalName: string, profiles: Array<Profile>, idAirportDefault: string, profile: string, idProfile: number, principalName: string, nameAirportDefault: string, isSea: boolean, idSea: string) {
    this.id = id;
    this.idSession = idSession;
    this.name = name;
    this.lastName = lastName;
    this.motherLastName = motherLastName;
    this.email = email;
    this.token = token;
    this.dateSession = dateSession;
    this.dateLastSync = dateLastSync;
    this.pagination = pagination;
    this.userSap = userSap;
    this.passwordSap = passwordSap;
    this.dni = dni;
    this.userPrincipalName = userPrincipalName;
    this.profiles = profiles;
    this.idAirportDefault = idAirportDefault;
    this.profile = profile;
    this.idProfile = idProfile;
    this.principalName = principalName;
    this.nameAirportDefault = nameAirportDefault;
    this.isSea = isSea;
    this.idSea = idSea;
  }
}

export class Profile {
  id: string;
  description: string;

  constructor(id: string, description: string) {
    this.id = id;
    this.description = description;
  }
}
