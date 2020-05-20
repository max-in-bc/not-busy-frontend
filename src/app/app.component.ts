import { Component } from '@angular/core';
import { LocationService } from './shared/services/location.service';
import { Observable, from } from 'rxjs';
import { LatLng } from './shared/interfaces/lat-lng.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'not-busy-frontend';

  is_initialized$: Observable<LatLng>;
  constructor(public locationServ: LocationService){
    //angular boot screen mechanism hides the boot screen once the app has bootloaded
    //so I have chosen to render the boot loader at app launch so we can wait for the user location to return before hiding
    this.is_initialized$ = from(this.locationServ.waitForLocation()); 
  }
}
