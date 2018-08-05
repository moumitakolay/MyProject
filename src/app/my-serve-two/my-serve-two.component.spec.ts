import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServeTwoComponent } from './my-serve-two.component';

describe('MyServeTwoComponent', () => {
  let component: MyServeTwoComponent;
  let fixture: ComponentFixture<MyServeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
