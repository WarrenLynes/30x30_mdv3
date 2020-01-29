import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { KicksComponent } from './kicks/kicks.component';
import { KicksModule } from './kicks/kicks.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: KicksComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    AuthModule,
    KicksModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
