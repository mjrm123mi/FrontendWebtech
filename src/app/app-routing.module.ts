// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransaktionComponent } from './transaktionen/add-transaktion/add-transaktion.component';
import { ListTransaktionenComponent } from './transaktionen/list-transaktionen/list-transaktionen.component';
import { UpdateTransaktionComponent } from './transaktionen/update-transaktion/update-transaktion.component';

const routes: Routes = [
  { path: 'add-transaktion', component: AddTransaktionComponent },
  { path: 'list-transaktionen', component: ListTransaktionenComponent },
  { path: 'update-transaktion/:id', component: UpdateTransaktionComponent },
  { path: '', redirectTo: '/list-transaktionen', pathMatch: 'full' } // Standardroute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
