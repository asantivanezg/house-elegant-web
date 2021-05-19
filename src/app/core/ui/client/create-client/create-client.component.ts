import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.sass']
})
export class CreateClientComponent implements OnInit {
  name: String = "";
  dni: String = "";
  address: String = "";
  phone: String = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  saveClient() {

  }
}
