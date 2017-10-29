import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

	public id:string;	// private

	constructor(private router: ActivatedRoute) { 

		/*
			两种获取路由参数的方式
		*/ 

		// router.params.subscribe((params: { id: number }) => {
		// 	this.id = params.id
		// });

		this.id = router.snapshot.paramMap.get('id');

	}

	ngOnInit() {
		/*
			TypeScript学习
			TypeScript是Microsoft和Google之间的官网合作项目

			相对于ES5有五大改善
			1.类型
			2.类 					／／ （ES6也有）
			3.注解
			4.模块导入 				／／ （ES6也有）
			5.语言工具包（比如结构）

			ES5 + 类 + 模块 => ES6 + 类型 + 注解 => TypeScript
		*/

		// 1.类型
			// 布尔值
			let isDone:boolean = false;

			 // 数字
			let num:number = 12;

			 // 字符串 
			let str:string = 'abc';
			let	str2:string = `hello${num}`;

			// 数组 
			let arr:number[] = [1,2,3];
			let arr2:Array<number> = [7,8,9];

			// 元组Tuple
			// 元组类型允许表示一个已知元素和类型的数组 各元素类型不必相同
			let X:[string,number,boolean];
			X = ['aaa',123,true];

			// 枚举
			// 是对javascript标准数据类型的一个补充
			enum Role {a = 0, b = 4, c = 8}
			let num2:Role = Role.b;

			// Any
			// 指定一个不确定类型的变量
			let notSure:any = [3,4,5];

			// Void
			// void类型与any类型相反 表示没有任何类型 当一个函数没有返回值时 定义其返回值为void
			function func():void{
				// ....
			}
			// 申明一个void类型的变量 只能是 undefined null
			let unable:void = undefined;
			console.log(unable)
		
	}

}
