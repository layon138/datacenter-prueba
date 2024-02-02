import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Recharge } from '../interfaces/recharge.model';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  constructor(private httpService: HttpClient) {}

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  
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
