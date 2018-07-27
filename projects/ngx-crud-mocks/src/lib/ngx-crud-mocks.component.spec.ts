import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCrudMocksComponent } from './ngx-crud-mocks.component';

describe('NgxCrudMocksComponent', () => {
  let component: NgxCrudMocksComponent;
  let fixture: ComponentFixture<NgxCrudMocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCrudMocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCrudMocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
