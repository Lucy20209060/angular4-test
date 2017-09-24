import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	allInfo:object;
	constructor() {
		this.allInfo = {
			name:'lucy',
			id:18,
			infos:{
				img:'../../assets/img/lu.jpg',
				sku:34236746723
			}
		}
	}

	ngOnInit() {
	}

}
