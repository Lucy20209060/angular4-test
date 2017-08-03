import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

	public id:number;	// private



	constructor(protected activatedRoute: ActivatedRoute) { 

		this.activatedRoute.params.subscribe((params: { id: number }) => {
	       this.id = params.id
	    });

	    console.log(this.id)

	}

	ngOnInit() {

	}

}
