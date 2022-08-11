import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIntroCustomComponent } from './product-intro-custom.component';

describe('ProductIntroCustomComponent', () => {
  let component: ProductIntroCustomComponent;
  let fixture: ComponentFixture<ProductIntroCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductIntroCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIntroCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
