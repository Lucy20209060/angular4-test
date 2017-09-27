import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

	public id:number;	// private



	constructor(private router: ActivatedRoute) { 

		router.params.subscribe((params: { id: number }) => {
	       this.id = params.id
	    });

	    console.log(this.id)

	}

	ngOnInit() {

	}

}
