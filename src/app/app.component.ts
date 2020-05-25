import { Component } from '@angular/core';
import { LocationService } from './shared/services/location.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseAPIService } from './shared/services/base-api.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'not-busy-frontend';

  is_initialized$: Observable<boolean>;
  constructor(public snackBar: MatSnackBar, public locationServ: LocationService, private api: BaseAPIService){
    //angular boot screen mechanism hides the boot screen once the app has bootloaded
    //so I have chosen to render the boot loader at app launch so we can wait for the user location to return before hiding
    this.is_initialized$ = combineLatest(
      this.locationServ.waitForLocation(),
      this.api.waitForFirstResponse() //also wait for some data before hiding initial startup splash
      ).pipe(map(data => {
        this.snackBar.open('This is an early beta of this app... Some basic components are still being developed', 'OK', {

       });
        return true
    }));
  }
}
