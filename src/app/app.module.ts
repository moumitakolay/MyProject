import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyServeComponent } from './my-serve/my-serve.component';
import { MyServeTwoComponent } from './my-serve-two/my-serve-two.component';
import { MyServeThreeComponent } from './my-serve-three/my-serve-three.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MyServeComponent,
    MyServeTwoComponent,
    MyServeThreeComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
