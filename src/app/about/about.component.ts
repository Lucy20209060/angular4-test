import { Component, OnInit,Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // 只有当组件被其他组件引用时 会被加上 class="row"
  host:{						
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
		this.getBooks().then(res => { 

	      console.log(res.data)

	      this.mobiles = res.data;

	    });
	}


	getBooks() {

		const url = '/dev.api.php?s=api/index/category_products'; 

		return this.http.get(url)   
						.toPromise()   
						.then(res => res.json())   
						.catch(this.handleError);  
	}

	handleError(error: any): Promise<any> {   

	    console.error('An error occurred', error); // for demo purposes only   

	    return Promise.reject(error.message || error);   

	}

}
