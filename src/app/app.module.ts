import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SliceStrPipe } from '../tools/pipe/slice/pipe-slice';
import { ToUpperCase } from '../tools/pipe/pipe-touppercase';

import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { MineComponent } from './mine/mine.component';
import { IndexComponent } from './index/index.component';
import { GoodsComponent } from './goods/goods.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './pubilc/counter';

/*
 * Services
 */
import {AUTH_PROVIDERS} from './pubilc/guards/AuthService';
import {LoggedInGuard} from './pubilc/guards/loggedIn.guard';
import { ZhouComponent } from './zhou/zhou.component';
import { MenuComponent } from './components/menu/menu.component';


// 自定义管道
const pipe = [
    SliceStrPipe,
    ToUpperCase
]

@NgModule({
    declarations: [
        ...pipe,
        AppComponent,
        HomeComponent,
        AboutComponent,
        CartComponent,
        MineComponent,
        IndexComponent,
        GoodsComponent,
        NotFoundComponent,
        DetailComponent,
        ZhouComponent,
        MenuComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        StoreModule.provideStore({ counter: counterReducer })
    ],
    providers: [
        AUTH_PROVIDERS,
        LoggedInGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
