import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhouComponent } from './zhou.component';

describe('ZhouComponent', () => {
  let component: ZhouComponent;
  let fixture: ComponentFixture<ZhouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
