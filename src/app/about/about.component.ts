import { Component, OnInit,Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { category } from '../../tools/api'

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
	host:{									// 只有当组件被其他组件引用时 会被加上 class="row"					
		class:'row'
	}
})

@Injectable()
export class AboutComponent implements OnInit {

	public title = 'about tilte!'
	public mobiles

	constructor(private http: Http) {

	}
	
	ngOnInit() {
		this.makeRequest();
	}

	// http请求
	makeRequest():void{
		this.http.request(category.getlevel1).subscribe((res:Response) => {
			const data = res.json();
			console.log(data)
		});
	}

	goCart(){
		// this.router.navigate(['/cart',7]);
	}

}
