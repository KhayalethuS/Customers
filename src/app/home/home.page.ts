import { Component, OnInit } from '@angular/core';
import { DataService, Customer } from '../services/data.service';
import { ModalController } from '@ionic/angular';
import { CustomerPage } from '../customer/customer.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  customers: any;
  constructor(
    private data: DataService,
    public modalController: ModalController
    ) {}

  async ngOnInit() {
    this.customers = await this.data.getCustomers();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  async createCustomerModal() {
    const modal = await this.modalController.create({
      component: CustomerPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    return await modal.present();
  }

}
