import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealershipaddremoveComponent } from './dealershipaddremove.component';

describe('DealershipaddremoveComponent', () => {
  let component: DealershipaddremoveComponent;
  let fixture: ComponentFixture<DealershipaddremoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealershipaddremoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershipaddremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
