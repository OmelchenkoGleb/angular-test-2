import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataComponent} from "./data/data.component";
import {MenuComponent} from "./menu/menu.component";
import {AppComponent} from "./app.component";

// mapping запросов (перенаправление их)
const routes: Routes = [
  // path : 'data' - это ссылка в бразуере на этот компонент DataComponent
  {path : '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
