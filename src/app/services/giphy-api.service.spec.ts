import { TestBed, inject } from '@angular/core/testing';

import { GiphyApiService } from './giphy-api.service';

describe('GiphyApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphyApiService]
    });
  });

  it('should be created', inject([GiphyApiService], (service: GiphyApiService) => {
    expect(service).toBeTruthy();
  }));
});
