import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../place.interface';

@Component({
  selector: 'app-place-summary',
  templateUrl: './place-summary.component.html',
  styleUrls: ['./place-summary.component.scss']
})
export class PlaceSummaryComponent implements OnInit {

  @Input() place: Place;
  constructor() { }

  ngOnInit(): void {
  }

}
