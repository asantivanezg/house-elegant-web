import {Client} from "../model/client";

export interface ClientRepositoryInterface {
  insertClient(client: Client): Promise<any>
}
