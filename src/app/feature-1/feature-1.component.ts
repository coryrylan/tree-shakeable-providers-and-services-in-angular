import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-feature-1',
  templateUrl: './feature-1.component.html',
  styleUrls: ['./feature-1.component.css']
})
export class Feature1Component implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}