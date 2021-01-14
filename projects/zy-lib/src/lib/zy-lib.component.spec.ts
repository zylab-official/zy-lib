import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyLibComponent } from './zy-lib.component';

describe('ZyLibComponent', () => {
  let component: ZyLibComponent;
  let fixture: ComponentFixture<ZyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZyLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
