import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './components/client-layout/client-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'client' },
  { path: 'client', component: ClientLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
