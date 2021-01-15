import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZyBasicComponent } from './basic.component';


describe('ZyLibComponent', () => {
  let component: ZyBasicComponent;
  let fixture: ComponentFixture<ZyBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZyBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZyBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
