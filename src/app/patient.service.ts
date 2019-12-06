import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:49843/api';

  constructor(private http: HttpClient) { }


  addPatients(patient: Patient) {
    return this.http.post(this.baseUrl + '/Pat_registration', patient);
  }
}

