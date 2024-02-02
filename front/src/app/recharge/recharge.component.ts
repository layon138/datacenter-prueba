import { Component } from '@angular/core';
import { RechargeService } from './services/recharge.service';
import { AddRechargeComponent } from './components/add-recharge/add-recharge.component';
import { ListRechargesComponent } from './components/list-recharges/list-recharges.component';

@Component({
  selector: 'app-recharge',
  standalone: true,
  imports: [AddRechargeComponent,ListRechargesComponent],
  templateUrl: './recharge.component.html',
  styleUrl: './recharge.component.css'
})
export class RechargeComponent {

  constructor(private rechargeService:RechargeService){

  }

  async ngOnInit(): Promise<void> {
    await this.loadData()
  }

  async loadData(){

  }



}
