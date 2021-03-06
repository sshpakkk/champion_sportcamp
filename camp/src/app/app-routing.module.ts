import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { AboutComponent } from './about/about.component';
import { SqadsComponent } from './sqads/sqads.component';
import { FirstComponent } from './first/first.component';


const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: "buy", component: BuyComponent },
  { path: "about", component: AboutComponent },
  { path: "sqads", component: SqadsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
