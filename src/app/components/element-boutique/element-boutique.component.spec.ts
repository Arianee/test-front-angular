import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBoutiqueComponent } from './element-boutique.component';

describe('ElementBoutiqueComponent', () => {
  let component: ElementBoutiqueComponent;
  let fixture: ComponentFixture<ElementBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementBoutiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
