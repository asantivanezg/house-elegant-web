export class Client {
  id: String;
  name: String;
  dni: String;
  address: String;
  phone: String;

  constructor(id: String, name: String, dni: String, address: String, phone: String) {
    this.id = id;
    this.name = name;
    this.dni = dni;
    this.address = address;
    this.phone = phone;
  }
}
