import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: [
		'./index.component.scss',
		'../../tools/font/iconfont.css'
	]
})
export class IndexComponent implements OnInit {

	private num = 33;

	constructor() { }

	ngOnInit() {
		// console.log(222)
	}

}
