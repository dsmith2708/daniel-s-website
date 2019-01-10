import { Component, OnInit } from '@angular/core';
import { HomePageContent } from '../../../assets/page-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstParagraph = HomePageContent.paragraphOne;

  constructor() { }

  ngOnInit() {
  }

}
