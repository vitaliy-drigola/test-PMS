/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HumanService } from './human.service';

describe('Service: Human', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HumanService]
    });
  });

  it('should ...', inject([HumanService], (service: HumanService) => {
    expect(service).toBeTruthy();
  }));
});
