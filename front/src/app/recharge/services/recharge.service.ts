import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Recharge } from '../interfaces/recharge.model';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  constructor(private httpService: HttpClient) {}
  
  async getRechargesList(operator:string,seller:string): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get<any>(`http://localhost:9000/recharges?operator=${operator}&seller=${seller}`, {
        headers: {
        },
      })
    );

    return response;
  }


  async postNewRecharge(recharge:Recharge): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.post<any>('http://localhost:9000/recharge', recharge)
    );

    return response;
  }
}
