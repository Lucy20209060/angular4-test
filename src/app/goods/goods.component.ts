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

// 数组 可添加多个scss 或 css 文件
// styleUrls: ['./goods.component.scss'],

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

// 	id:number;

// 	constructor() { }

// 	ngOnInit() { }

// }
