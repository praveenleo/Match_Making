import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeUserComponent } from './prime-user.component';

describe('PrimeUserComponent', () => {
  let component: PrimeUserComponent;
  let fixture: ComponentFixture<PrimeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
