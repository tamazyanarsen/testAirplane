import { PlaneService } from './../plane.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-airplanes',
  templateUrl: './airplanes.component.html',
  styleUrls: ['./airplanes.component.scss']
})
export class AirplanesComponent implements OnInit {
  planes = [];
  showForm = false;
  checkOutForm;
  currentPlane = {
    code: '',
    type: '',
    number: '',
    model: '',
    date: new Date().getDate()
  };
  adding = false;

  constructor(
    private planeService: PlaneService,
    private formBuilder: FormBuilder
  ) {
    this.planes = this.planeService.getItems();
    this.updateFormModel();
  }

  setCurrentPlane(plane) {
    this.currentPlane = plane;
    this.updateFormModel();
    this.showForm = true;
  }

  updateFormModel() {
    this.checkOutForm = this.formBuilder.group({
      code: new FormControl({
        value: this.currentPlane.code,
        disabled: !this.adding
      }),
      type: this.currentPlane.type,
      number: this.currentPlane.number,
      model: this.currentPlane.model,
      date: this.currentPlane.date
    });
  }

  cancelEdit() {
    this.showForm = false;
  }

  changePlane(item) {
    this.planeService.changeItem(Object.assign(this.currentPlane, item));
    this.showForm = false;
    this.checkOutForm.reset();
  }

  delete(item) {
    this.planeService.deleteItem(Object.assign(this.currentPlane, item));
    this.showForm = false;
    this.checkOutForm.reset();
  }

  showAddForm() {
    this.adding = true;
    this.currentPlane = {
      code: '',
      type: '',
      number: '',
      model: '',
      date: new Date().getDate()
    };
    this.updateFormModel();
    this.showForm = true;
  }

  createPlane(item) {
    this.planeService.addItem(item);
    this.showForm = false;
    this.checkOutForm.reset();
    this.adding = false;
  }

  ngOnInit() {}
}
