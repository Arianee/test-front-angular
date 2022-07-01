import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLivreDialogComponent } from './details-livre-dialog.component';

describe('DetailsLivreDialogComponent', () => {
  let component: DetailsLivreDialogComponent;
  let fixture: ComponentFixture<DetailsLivreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLivreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLivreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
