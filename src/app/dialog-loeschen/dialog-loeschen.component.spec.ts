import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoeschenComponent } from './dialog-loeschen.component';

describe('DialogLoeschenComponent', () => {
  let component: DialogLoeschenComponent;
  let fixture: ComponentFixture<DialogLoeschenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogLoeschenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLoeschenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
