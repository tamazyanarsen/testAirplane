import { Component, OnInit, Input } from '@angular/core';
import { AirplanesComponent } from '../airplanes/airplanes.component';

@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.scss']
})
export class AirplaneComponent implements OnInit {
  @Input() plane;

  constructor(private planes: AirplanesComponent) {}

  setCurrentPlane() {
    this.planes.setCurrentPlane(this.plane);
  }

  ngOnInit() {}
}
