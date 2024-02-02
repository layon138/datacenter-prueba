import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RechargeService } from '../../services/recharge.service';
import { Recharge } from '../../interfaces/recharge.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-recharge',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],

  templateUrl: './add-recharge.component.html',
  styleUrl: './add-recharge.component.css'
})
export class AddRechargeComponent{
  rechargeForm: FormGroup;
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
  constructor(private rechargeService:RechargeService,private cdr: ChangeDetectorRef) {
    this.rechargeForm = new FormGroup({
      seller: new FormControl('', [Validators.required]),
      amont: new FormControl('',[ Validators.required,  Validators.pattern("^[0-9]*$"),  Validators.minLength(4),]),
      operator: new FormControl('', Validators.required)
    });
  }

  


  showDropdown(){
    this.showDropDawn=!this.showDropDawn
    }
  
    saveOperator(value:string){
      this.rechargeForm.get('operator')?.setValue(value)
      this.showDropDawn=false;
    }
  
  
  
    async registerAPi(){
      if(this.rechargeForm.valid){
        const newRecharge:Recharge={
          ...this.rechargeForm.value ,
          id:uuidv4()
        } 
         await this.rechargeService.postNewRecharge(newRecharge);
         this.rechargeService.changeMessage("mama")
      }
    
    }

}
