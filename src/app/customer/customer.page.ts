import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Customer } from '../services/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  customer: Customer = {
    email: '',
    name: '',
    status: 'Active'
  };

  error: any;
  success = false;
  response: any;

  constructor(
    private data: DataService,
    public modalController: ModalController
    ) { }

  ngOnInit() {
  }

  async submit() {
    if (!this.customer.email || this.customer.email === '') {
      this.error = 'Email required';
      return;
    }

    if (!this.customer.name || this.customer.name === '') {
      this.error = 'Email required';
      return;
    }

    this.response =  await this.data.createCustomer(this.customer);
    if (this.response) { this.success = true; }
    this.customer = {
      email: '',
      name: '',
      status: 'Active'
    };
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
