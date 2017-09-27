import { Component, OnInit,Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
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
		this.makePost();
	}

	// http请求
	makeRequest():void{

		this.http
			.request(category.getlevel1)
			.subscribe((res:Response) => {
				const data = res.json();
				this.mobiles = data.data
				console.log(this.mobiles)
			});
	}

	// http post
	makePost(id = 926):void{ // JSON.stringify(par)
		const par = { id }
		this.http
			.post(category.getlevel1children,par)
			.subscribe((res:Response) => {
				const data = res.json();
				console.log(data.data)
			})
	}

	goCart():void{
		// this.router.navigate(['/mine']);
	}

}
