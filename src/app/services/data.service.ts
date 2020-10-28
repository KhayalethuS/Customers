import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import corse from 'cors';

export interface Customer {
  email: string;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  readonly API_URL = environment.baseUrl;

  constructor(private  httpClient: HttpClient) { }

  public async getCustomers() {
    const url = `${this.API_URL}/customers`;

    try {
      const resp = await this.httpClient.get(url).toPromise();
      return resp;
    } catch (error) {
      return error;
    }
  }

  public async createCustomer(params: Customer) {
    const url = `${this.API_URL}/customers`;
    try {
      const resp = await this.httpClient.post(url, params, corse).toPromise();
      return resp;
    } catch (error) {
      return error;
    }
  }

  // public getMessageById(id: number): Customer {
  //   return this.Customers[id];
  // }
}
