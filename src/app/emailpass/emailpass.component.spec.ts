import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailpassComponent } from './emailpass.component';

describe('EmailpassComponent', () => {
  let component: EmailpassComponent;
  let fixture: ComponentFixture<EmailpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
