import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "login",
    loadChildren: () => import('./public/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "signin",
    loadChildren: () => import('./public/pages/sign-in/sign-in.module').then(m=>m.SignInModule)
  },
  {

    path: "logon",
    loadChildren: () => import('./public/pages/contacts/contacts.module').then(m=>m.ContactsModule)
  },
  {

    path: "contacts-details",
    loadChildren: () => import('./public/pages/contact-details/contact-details.module').then(m=>m.ContactDetailsModule)
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
