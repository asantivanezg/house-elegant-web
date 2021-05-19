import {Component, OnInit} from '@angular/core';
import {ClientController} from "../../../domain/controller/client-controller";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ClientBuilder} from "../../../domain/model/client.builder";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.sass']
})
export class CreateClientComponent implements OnInit {

  clientFromGroup: FormGroup;
  nameFormControl: FormControl = new FormControl();
  addressFormControl: FormControl = new FormControl();
  dniFormControl: FormControl = new FormControl();
  phoneFormControl: FormControl = new FormControl();

  constructor(private clientController: ClientController, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  saveClient() {
    const name = this.nameFormControl.value
    const address = this.addressFormControl.value
    const phone = this.phoneFormControl.value
    const dni = this.dniFormControl.value

    const client = new  ClientBuilder()
      .setId(Guid.create().toString())
      .setName(name)
      .setPhone(phone)
      .setAddress(address)
      .setDni(dni)
      .create()

    this.clientController.clientInsert(client)

  }

  private createForm() {
    this.nameFormControl = new FormControl(null)
    this.addressFormControl = new FormControl(null)
    this.dniFormControl = new FormControl(null)
    this.phoneFormControl = new FormControl(null)
    this.clientFromGroup = new FormGroup({
      nameFormControl: this.nameFormControl,
      addressFormControl: this.addressFormControl,
      dniFormControl: this.dniFormControl,
      phoneFormControl: this.phoneFormControl,
    })
  }
}
