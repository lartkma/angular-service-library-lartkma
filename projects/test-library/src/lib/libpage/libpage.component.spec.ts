import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibPageComponent } from './libpage.component';

describe('LibPageComponent', () => {
  let component: LibPageComponent;
  let fixture: ComponentFixture<LibPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
