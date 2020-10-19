import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from 'src/app/authentication/authentication.component';

const routes: Routes = [
  {'path':'login',component:AuthenticationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent=[
  AuthenticationComponent,

  
]

