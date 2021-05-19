import {Injectable} from "@angular/core";
import {ClientRepositoryService} from "../../data/repository/client-repository.service";
import {Client} from "../model/client";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ClientController {

  constructor(private repo: ClientRepositoryService) {

  }

  clientInsert(client: Client): Promise<any> {
    return this.repo.insertClient(client);
  }
}
