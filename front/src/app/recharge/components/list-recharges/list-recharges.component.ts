import { Component } from '@angular/core';
import { RechargeService } from '../../services/recharge.service';
import { Recharge } from '../../interfaces/recharge.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-recharges',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './list-recharges.component.html',
  styleUrl: './list-recharges.component.css'
})
export class ListRechargesComponent {

  filterForm: FormGroup;
  public listRecharges:Recharge[]=[]
  public showDropDawn=false
  public listOperadtors=[
    {
      name:"Tigo",
      value:"Tigo",
    },
    {
      name:"Claro",
      value:"Claro",
    },
    {
      name:"Movistar",
      value:"Movistar",
    },
    {
      name:"Comcel",
      value:"Comcel",
    }
  ]
  constructor(private rechargeService:RechargeService){
    this.filterForm = new FormGroup({
      seller: new FormControl('', []),
      operator: new FormControl('', )
    });
  }

  async ngOnInit(): Promise<void> {
    await this.loadData()
  }

  showDropdown(){
    this.showDropDawn=!this.showDropDawn
    }
  

  saveOperator(value:string){
    this.filterForm.get('operator')?.setValue(value)
    this.showDropDawn=false;
  }


 async filterAPi(){
   await this.loadData()
  }

  async loadData(){
   this.listRecharges=await this.rechargeService.getRechargesList(this.filterForm.get('operator')?.value,this.filterForm.get('seller')?.value);
  }
  

}
