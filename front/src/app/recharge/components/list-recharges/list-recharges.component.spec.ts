import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRechargesComponent } from './list-recharges.component';

describe('ListRechargesComponent', () => {
  let component: ListRechargesComponent;
  let fixture: ComponentFixture<ListRechargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRechargesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRechargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
