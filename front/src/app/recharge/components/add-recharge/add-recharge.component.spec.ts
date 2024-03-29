import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRechargeComponent } from './add-recharge.component';

describe('AddRechargeComponent', () => {
  let component: AddRechargeComponent;
  let fixture: ComponentFixture<AddRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRechargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
