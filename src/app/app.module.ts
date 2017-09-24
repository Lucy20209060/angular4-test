import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SliceStrPipe } from '../tools/pipe/slice/pipe-slice';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { MineComponent } from './mine/mine.component';
import { IndexComponent } from './index/index.component';

// 自定义管道
const pipe = [
    SliceStrPipe
]

@NgModule({
  declarations: [
    ...pipe,
    AppComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    MineComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
