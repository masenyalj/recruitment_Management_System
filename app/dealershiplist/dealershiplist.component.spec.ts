import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealershiplistComponent } from './dealershiplist.component';

describe('DealershiplistComponent', () => {
  let component: DealershiplistComponent;
  let fixture: ComponentFixture<DealershiplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealershiplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershiplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
