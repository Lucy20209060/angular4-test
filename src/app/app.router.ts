import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent }       from './index/index.component';
import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';
import { CartComponent }        from './cart/cart.component';
import { MineComponent }        from './mine/mine.component';
import { NotFoundComponent }    from './not-found/not-found.component';
import { DetailComponent }      from './detail/detail.component';
import { ZhouComponent }      from './zhou/zhou.component';

import { LoggedInGuard } from './pubilc/guards/loggedIn.guard';

const routes: Routes = [
    // 重定向
    { path:'', redirectTo: 'home', pathMatch: 'full' },

	{ path: '', component:IndexComponent, children: [
            { path:'home',      component:HomeComponent },
            { path:'about',     component:AboutComponent },
            { path:'cart/:id',  component:CartComponent },
            { path:'mine',      component:MineComponent }
        ]
	},

    { 
        path:'detail', 
        component:DetailComponent, 
        canActivate: [LoggedInGuard],  //进入
        // canDeactivate : [BlockOut] //出去
    },

    { path:'zhou',component:ZhouComponent },

    // 404 页面
    { path:'404', component:NotFoundComponent },

    // 重定向
    { path: '**', redirectTo: '404',pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        // 如果我们想要看到在导航的生命周期中发生过哪些事件，可以使用路由器默认配置中的enableTracing选项。
        // 它会把每个导航生命周期中的事件输出到浏览器的控制台。 这应该只用于调试。我们只需要把enableTracing: true选项
        // 作为第二个参数传给RouterModule.forRoot()方法就可以了。
        // { enableTracing: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
