import {ClientDto} from "./rest/dto/client-dto";

export interface ClientDataStoreInterface {

  insertClient(dto: ClientDto): Promise<any>;
}
