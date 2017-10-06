import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

	public id:string;	// private



	constructor(private router: ActivatedRoute) { 

		/*
			两种获取路由参数的方式
		*/ 

		// router.params.subscribe((params: { id: number }) => {
		// 	this.id = params.id
		// });

		this.id = router.snapshot.paramMap.get('id');


	}

	ngOnInit() {
		
	}

}
