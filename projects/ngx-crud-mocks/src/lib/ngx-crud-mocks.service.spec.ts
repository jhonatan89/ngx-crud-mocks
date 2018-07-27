import { TestBed, inject } from '@angular/core/testing';

import { NgxCrudMocksService } from './ngx-crud-mocks.service';

describe('NgxCrudMocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxCrudMocksService]
    });
  });

  it('should be created', inject([NgxCrudMocksService], (service: NgxCrudMocksService) => {
    expect(service).toBeTruthy();
  }));
});
