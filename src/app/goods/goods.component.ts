import { Component, OnInit,Input } from '@angular/core';

@Component({
	selector: 'app-goods',
	templateUrl: './goods.component.html',
	styleUrls: ['./goods.component.scss'],
	inputs:['info']
})
export class GoodsComponent implements OnInit {

	info:object;

	constructor() { }

	ngOnInit() {
		console.log(this.info)
	}

}

// 组件传值	父 => 子

// 父
// <app-goods [id]="10"></app-goods>
// ----------------------------------------
// 子
// @Component({
// 	...
// 	inputs:['id']
// })
// export class GoodsComponent implements OnInit {

// 	info:number;

// 	constructor() { }

// 	ngOnInit() { }

// }
