import { TestBed } from '@angular/core/testing';

import { ShareComponentsService } from './share-components.service';

describe('ShareComponentsService', () => {
  let service: ShareComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
