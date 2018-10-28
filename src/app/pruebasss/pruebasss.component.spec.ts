import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasssComponent } from './pruebasss.component';

describe('PruebasssComponent', () => {
  let component: PruebasssComponent;
  let fixture: ComponentFixture<PruebasssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebasssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
