import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewiewsComponent } from './rewiews.component';

describe('RewiewsComponent', () => {
  let component: RewiewsComponent;
  let fixture: ComponentFixture<RewiewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewiewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewiewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
