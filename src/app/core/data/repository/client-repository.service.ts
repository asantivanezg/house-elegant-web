import {Injectable} from '@angular/core';
import {RestClientDataStoreService} from "../datasource/rest/store/rest-client-data-store.service";
import {ClientRepositoryInterface} from "../../domain/repository/client-repository.interface";
import {Client} from "../../domain/model/client";
import {ClientDto} from "../datasource/rest/dto/client-dto";

@Injectable({
  providedIn: 'root'
})
export class ClientRepositoryService implements ClientRepositoryInterface {

  // private clientMapper: Cli

  constructor(private rest: RestClientDataStoreService) {
  }

  insertClient(client: Client): Promise<any> {
    return new Promise<any>(((resolve, reject) => {
      let dto: ClientDto = {
        id: client.id,
        nombre: client.name,
        dni: client.dni,
        direccion: client.address,
        telefono: client.phone,
      }

      this.rest.insertClient(dto).then((res) => {
        resolve(res)
      }).catch(error => reject(error))
    }))
  }

}
