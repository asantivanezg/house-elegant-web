import {AdapterMapperWM} from "./adapter.mapper";
import {ClientRestEntity} from "../datasource/rest/entities/client-rest-entity";
import {Client} from "../../domain/model/client";
import {ClientRestEntityBuilder} from "../datasource/rest/entities/client-rest-entity.builder";
import {ClientBuilder} from "../../domain/model/client.builder";

export class ClientMapper implements AdapterMapperWM<ClientRestEntity, Client> {
  mapperFromListWs(listItem: Array<any>): Array<ClientRestEntity> {
    const mapper = new ClientMapper()
    return listItem.map(mapper.mapperFromWs);
  }

  mapperFromListWsToModel(listItem: Array<ClientRestEntity>): Array<Client> {
    const mapper = new ClientMapper()
    return listItem.map(mapper.mapperFromWsToModel);
  }

  mapperFromWs(item: any): ClientRestEntity {
    return new ClientRestEntityBuilder()
      .setDni(item.dni)
      .setId(item.id)
      .setName(item.nombre)
      .setAddress(item.direccion)
      .setPhone(item.telefono)
      .create()
  }

  mapperFromWsToModel(item: ClientRestEntity): Client {
    return new ClientBuilder()
      .setDni(item.dni)
      .setName(item.name)
      .setAddress(item.address)
      .setPhone(item.phone)
      .setId(item.id)
      .create();
  }

}
