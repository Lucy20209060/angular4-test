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
			5.语言工具包（比如解构）

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

			// 枚举  是对javascript标准数据类型的一个补充
			enum Role {a = 0, b = 4, c = 8}
			let num2:Role = Role.b;

			// Any  指定一个不确定类型的变量
			let notSure:any = [3,4,5];

			// Void  void类型与any类型相反 表示没有任何类型 当一个函数没有返回值时 定义其返回值为void
			function func():void{
				// ....
			}
			// 申明一个void类型的变量 只能是 undefined null
			let unable:void = undefined;

			// Undefined Null  用处不大 和void相似
			let unde:undefined = undefined;
			let nul:null = null;

			// Never  表示那些永不存在值的类型 总是抛出异常 或者 根本就不会有返回值的函数表达式 或者 箭头函数表达式的返回值类型
			// never类型是任何类型的子类型 也可以赋值给任何类型 但是没有任何类型可以赋值给never（除了never自身，any也不行）
			// 返回never的函数必须存在无法达到的终点
			function error(message: string): never {
			    throw new Error(message);
			}

			// 推断的返回值类型为never
			function fail() {
			    return error("Something failed");
			}

			// 返回never的函数必须存在无法达到的终点
			function infiniteLoop(): never {
			    while (true) {
			    }
			}

		/*
			接口  
			TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 
			在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
		*/ 
			// 必选属性 规定函数传入的参数中 size属性的属性值类型为number
			function printLabel(value:{size:number}) {
			  console.log(value.size);
			}
			let myObj = {size: 10, label: "Size 10 Object"};
			printLabel(myObj);
			// 可选属性 ?
			interface SquareConfig{
				color?:string;
				width?:number;
			}
			function createSquare(config:SquareConfig){
				let newSquare = {color: "white", area: 100};
				if (config.color) {
				newSquare.color = config.color;
				}
				if (config.width) {
				newSquare.area = config.width * config.width;
				}
				return newSquare;
			}
			let mySquare = createSquare({color: "black",width:4});
			console.log(mySquare)
			// 只读属性  readonly 
			// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性
			interface Point {
			    readonly x: number;
			    readonly y: number;
			}
			let p1: Point = { x: 10, y: 20 };
			// p1.x = 5; // error!
			console.log(p1)

			let a: number[] = [1, 2, 3, 4];
			let ro: ReadonlyArray<number> = a;
			// ro只读 不可修改
			// ro[0] = 12; // error!
			// ro.push(5); // error!
			// ro.length = 100; // error!
			// a = ro; // error!

			interface StringArray {
			  [index: number]: string;
			}

			let myArray: StringArray;
			myArray = ["Bob", "Fred"];

			let myStr: string = myArray[0];

			// console.log(myArray)

			/*
				类
			*/
			class Greeter {
			    greeting: string;
			    constructor(message: string) {
			        this.greeting = message;
			    }
			    greet() {
			        return "Hello, " + this.greeting;
			    }
			}

			let greeter = new Greeter("world");

			// console.log(greeter.greet())  // Hello, world

			/*
				继承
			*/
			// class Animal {
			//     name:string;
			//     constructor(theName: string) { 
			//     	this.name = theName; 
			//     }
			//     move(distanceInMeters: number = 0) {
			//         console.log(`${this.name} moved ${distanceInMeters}m.`);
			//     }
			// }

			// class Snake extends Animal {
			//     constructor(name: string) { 
			//     	super(name); 
			//     }
			//     move(distanceInMeters = 5) {
			//         // console.log("Slithering...");
			//         super.move(distanceInMeters);
			//     }
			// }

			// class Horse extends Animal {
			//     constructor(name: string) { super(name); }
			//     move(distanceInMeters = 45) {
			//         // console.log("Galloping...");
			//         super.move(distanceInMeters);
			//     }
			// }

			// let sam = new Snake("Sammy the Python");
			// let tom: Animal = new Horse("Tommy the Palomino");

			// sam.move();
			// tom.move(34);

			// class Animal {
			//     private name: string;
			//     constructor(theName: string) { this.name = theName; }
			// }

			// let cat = new Animal("Cat"); // Error: 'name' is private;
			// console.log(cat.name)

			// class Person {
			//     protected name: string;
			//     constructor(name: string) { this.name = name; }
			// }

			// class Employee extends Person {
			//     private department: string;

			//     constructor(name: string, department: string) {
			//         super(name)
			//         this.department = department;
			//     }

			//     public getElevatorPitch() {
			//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
			//     }
			// }

			// let howard = new Employee("Howard", "Sales");
			// console.log(howard.getElevatorPitch());
			// console.log(howard.name); // error

			let passcode = "secret passcode";

			class Employee {
			    private _fullName: string;

			    get fullName(): string {
			    	console.log(111)
			        return this._fullName;
			    }

			    set fullName(newName: string) {
			    	console.log(222)
			        if (passcode && passcode == "secret passcode") {
			            this._fullName = newName;
			        }
			        else {
			            console.log("Error: Unauthorized update of employee!");
			        }
			    }
			}

			let employee = new Employee();
			// employee.fullName = "Bob Smith";	// 赋值 调用set
			if (employee.fullName) {
			    // console.log(employee.fullName);
			}

	}

}
