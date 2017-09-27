import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name:'sliceStr'
})

// {{item.name | sliceStr:0:3:'$'}}
// 开始位置 结束位置 增加的自定义符号
export class SliceStrPipe implements PipeTransform {

	transform(value: string, start?: number, end?: number, extraStr?: string): string {
		
		if (value) {
			if (typeof (start) === 'number' && typeof (end) === 'number') {
				if (value.length > end && extraStr && typeof (extraStr) === 'string') {
					return extraStr.toString() + value.slice(start, end);
				} else {
					return value.slice(start, end);
				}

			} else {
				return value;
			}
		} else {
			return value;
		}
	}
	
}