import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServeComponent } from './my-serve.component';

describe('MyServeComponent', () => {
  let component: MyServeComponent;
  let fixture: ComponentFixture<MyServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
