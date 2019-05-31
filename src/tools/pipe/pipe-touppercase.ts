import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name:'touppercase' })

export class ToUpperCase implements PipeTransform {
	transform(value: string, start?:number, end?:number): string {
		// 没有参数
		if(typeof(start) === "undefined" && typeof(end) === "undefined"){
			return value.toUpperCase()
		}
		// 两个参数
		if(typeof(start) === "number" && typeof(end) === "number"){
			if(start > end)return value;
			return value.slice(0,start) + value.slice(start,end).toUpperCase() + value.slice(end)
		}
		// 一个参数
		if(typeof(start) === "number" && typeof(end) === "undefined"){
			return value.slice(0,start) + value.slice(start).toUpperCase()
		}
	}
}