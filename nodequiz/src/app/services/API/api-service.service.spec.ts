import { TestBed } from '@angular/core/testing';
import { imports } from '../../services/Util/util.imports';
import { declarations } from '../../services/Util/util.imports';
import { providers } from '../../services/Util/util.imports';

import { APIService } from './api-service.service';

describe('APIServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [declarations],
    imports: [imports],
    providers: [providers]
  }));

  it('should be created', () => {
    const service: APIService = TestBed.get(APIService);
    expect(service).toBeTruthy();
  });
});
