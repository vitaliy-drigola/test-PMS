import { Component, OnInit, Input } from '@angular/core';
import { Human } from '../weight-calculation/human';

@Component({
  selector: 'app-list-all-result',
  templateUrl: './list-all-result.component.html',
  styleUrls: ['./list-all-result.component.css']
})
export class ListAllResultComponent implements OnInit {

  @Input() humans: Human[];
  @Input() showAllResults: boolean;

  constructor() { }

  ngOnInit() {
  }

}
