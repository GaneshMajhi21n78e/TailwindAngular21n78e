import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FeaturesComponent } from './Components/features/features.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutusPageComponent } from './Pages/aboutus-page/aboutus-page.component';
import { ServicesPageComponent } from './Pages/services-page/services-page.component';
import { ClientsPageComponent } from './Pages/clients-page/clients-page.component';
import { OurworkPageComponent } from './Pages/ourwork-page/ourwork-page.component';
import { CasestudiesPageComponent } from './Pages/casestudies-page/casestudies-page.component';
import { PeoplePageComponent } from './Pages/people-page/people-page.component';
import { BlogPageComponent } from './Pages/blog-page/blog-page.component';
import { JoinusPageComponent } from './Pages/joinus-page/joinus-page.component';
import { ContactusPageComponent } from './Pages/contactus-page/contactus-page.component';
import { AboutFeaturesComponent } from './Components/about-features/about-features.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ServicesCardComponent } from './Components/services-card/services-card.component';
import { OurWorkCardComponent } from './Components/our-work-card/our-work-card.component';
import { PeopleComponent } from './Components/people/people.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { JoinUsComponent } from './Components/join-us/join-us.component';
import { CaseStudiesComponent } from './Components/case-studies/case-studies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    FeaturesComponent,
    HomePageComponent,
    AboutusPageComponent,
    ServicesPageComponent,
    ClientsPageComponent,
    OurworkPageComponent,
    CasestudiesPageComponent,
    PeoplePageComponent,
    BlogPageComponent,
    JoinusPageComponent,
    ContactusPageComponent,
    AboutFeaturesComponent,
    FooterComponent,
    ServicesCardComponent,
    OurWorkCardComponent,
    PeopleComponent,
    BlogComponent,
    ContactComponent,
    JoinUsComponent,
    CaseStudiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
