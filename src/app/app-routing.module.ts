import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { MineComponent } from './mine/mine.component';

const routes: Routes = [
	{
		path: '',
		component:IndexComponent,
        children: [
            { path: 'home', component:HomeComponent },
            { path:'about', component:AboutComponent },
            { path:'cart/:id', component:CartComponent },
            { path:'mine', component:MineComponent }
        ]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
