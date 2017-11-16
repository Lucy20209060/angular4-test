import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zhou',
  templateUrl: './zhou.component.html',
  styleUrls: ['./zhou.component.scss']
})
export class ZhouComponent implements OnInit {

	public title: boolean = true;

  constructor() {
  	this.title = false;
  }

  ngOnInit() {
  	console.log('ngOnInit')
  }

  ngOnChanges() {
  	console.log('ngChanges')
  }

  tap() {
  	this.title = !this.title;
  }

}
