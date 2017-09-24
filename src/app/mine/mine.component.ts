import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-mine',
	templateUrl: './mine.component.html',
	styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {

	votes:number;
	title:string;
	link:string;

	constructor() { 
		this.votes = 10;
		this.link = 'www.baidu.com';
		this.title = 'Angular2';
	}

	voteUp(){
		this.votes ++;

		console.log(this.votes)
	}

	voteDown(){
		this.votes --;
		console.log(this.votes)
	}

	ngOnInit() {

	}

}
