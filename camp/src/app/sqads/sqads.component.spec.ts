import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqadsComponent } from './sqads.component';

describe('SqadsComponent', () => {
  let component: SqadsComponent;
  let fixture: ComponentFixture<SqadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
