import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-regadd',
  templateUrl: './regadd.component.html',
  styleUrls: ['./regadd.component.scss']
})
export class RegaddComponent implements OnInit {
  patientForm: FormGroup;
  //patients: Observable<Patient[]>;
  patient: Patient = new Patient();

  constructor(private patientService: PatientService,
    private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      f_name: ['', Validators.compose([Validators.required])],
      l_name: ['', Validators.compose([Validators.required])],
      age: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      phno: ['', Validators.compose([Validators.required])]
    });

    //this.patienttypes = this.patientService.getpatientTypes();
  }

  addPatient() {
    this.patient.f_name = this.patientForm.controls.f_name.value;
    this.patient.l_name = this.patientForm.controls.l_name.value;
    this.patient.age = this.patientForm.controls.age.value;
    this.patient.gender = this.patientForm.controls.gender.value;
    this.patient.address = this.patientForm.controls.address.value;
    this.patient.phno = this.patientForm.controls.phno.value;

    this.patientService.addPatients(this.patient).subscribe();
    this.toastr.success("Patient registered successfully");
  }
}
