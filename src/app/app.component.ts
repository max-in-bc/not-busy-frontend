import { Component } from '@angular/core';
import { LocationService } from './shared/services/location.service';
import { Observable, from, forkJoin, combineLatest } from 'rxjs';
import { LatLng } from './shared/interfaces/lat-lng.interface';
import { map } from 'rxjs/operators';
import { AuthService } from './users/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'not-busy-frontend';

  is_initialized$: Observable<boolean>;
  constructor(public locationServ: LocationService, private authServ: AuthService){
    //angular boot screen mechanism hides the boot screen once the app has bootloaded
    //so I have chosen to render the boot loader at app launch so we can wait for the user location to return before hiding
    this.is_initialized$ = combineLatest(
      this.locationServ.waitForLocation(),
      // this.authServ.checkForAuth()
      ).pipe(map(data => {
        return true
    }));
  }
}
