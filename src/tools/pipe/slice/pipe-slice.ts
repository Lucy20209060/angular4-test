import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name:'sliceStr'
})

export class SliceStrPipe implements PipeTransform {

	transform(value: string, start?: number, end?: number, extraStr?: string): string {
		console.log( value );
		if (value) {
			if (typeof (start) === 'number' && typeof (end) === 'number') {
				if (value.length > end && extraStr && typeof (extraStr) === 'string') {
					// console.log( start, end, extraStr );
					return value.slice(start, end) + extraStr.toString();
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