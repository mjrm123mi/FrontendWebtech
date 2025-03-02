import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaktionenComponent } from './transaktionen.component';

describe('TransaktionenComponent', () => {
  let component: TransaktionenComponent;
  let fixture: ComponentFixture<TransaktionenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransaktionenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransaktionenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
