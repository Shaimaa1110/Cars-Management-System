import { TestBed } from '@angular/core/testing';
import { admin_Service } from '../serves.service';




describe('admin_Service', () => {
  let service: admin_Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(admin_Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
