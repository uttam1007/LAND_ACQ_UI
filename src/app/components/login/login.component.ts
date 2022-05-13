import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  deviceInfo: any;
  public lat;
  public lng;

  constructor(private deviceService: DeviceDetectorService) { }

  passwordDisplay = false
  togglePassDisplay() {
    this.passwordDisplay = !this.passwordDisplay
  }

  ngOnInit(): void {
    
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lat);
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  show() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log(this.deviceInfo)
  
    this.getLocation()
  }

}
