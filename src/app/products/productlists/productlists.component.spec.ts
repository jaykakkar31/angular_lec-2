import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistsComponent } from './productlists.component';

describe('ProductlistsComponent', () => {
  let component: ProductlistsComponent;
  let fixture: ComponentFixture<ProductlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductlistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
