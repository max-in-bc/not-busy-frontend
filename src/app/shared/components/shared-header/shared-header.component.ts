import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent implements OnInit {

  @Input() header_title: string = 'Not Busy App';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
