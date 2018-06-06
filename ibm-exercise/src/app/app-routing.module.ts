import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExeOneComponent } from './exe/exe-one/exe-one.component';
import { ExeTwoComponent } from './exe/exe-two/exe-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/exeOne', pathMatch: 'full' },
  { path: 'exeOne', component: ExeOneComponent },
  { path: 'exeTwo', component: ExeTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
