import {ClientRestEntity} from "./client-rest-entity";

export class ClientRestEntityBuilder {
  private id: String = "";
  private name: String = "";
  private dni: String = "";
  private address: String = "";
  private phone: String = "";


  setId(value: String): ClientRestEntityBuilder {
    this.id = value;
    return this;
  }

  setName(value: String): ClientRestEntityBuilder {
    this.name = value;
    return this;
  }

  setDni(value: String): ClientRestEntityBuilder {
    this.dni = value;
    return this;
  }

  setAddress(value: String): ClientRestEntityBuilder {
    this.address = value;
    return this;
  }

  setPhone(value: String): ClientRestEntityBuilder {
    this.phone = value;
    return this;
  }

  create(): ClientRestEntity {
    return new ClientRestEntity(
      this.id,
      this.name,
      this.dni,
      this.address,
      this.phone,
    )
  }
}
