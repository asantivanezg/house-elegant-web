import {Client} from "./client";

export class ClientBuilder {
  private id: String = "";
  private name: String = "";
  private dni: String = "";
  private address: String = "";
  private phone: String = "";


  setId(value: String): ClientBuilder {
    this.id = value;
    return this;
  }

  setName(value: String): ClientBuilder {
    this.name = value;
    return this;
  }

  setDni(value: String): ClientBuilder {
    this.dni = value;
    return this;
  }

  setAddress(value: String): ClientBuilder {
    this.address = value;
    return this;
  }

  setPhone(value: String): ClientBuilder {
    this.phone = value;
    return this;
  }

  create(): Client {
    return new Client(
      this.id,
      this.name,
      this.dni,
      this.address,
      this.phone,
    )
  }
}
