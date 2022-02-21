import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'', component:  HomePageComponent },
  {path:'home', component: HomePageComponent},
  {path:'contactus', component: ContactusPageComponent },
  {path:'aboutus', component:  AboutusPageComponent},
  {path:'ourwork', component: OurworkPageComponent},
  {path:'services', component: ServicesPageComponent},
  {path:'joinus', component: JoinusPageComponent},
  {path:'blog', component: BlogPageComponent },
  {path:'clients', component: ClientsPageComponent},
  {path:'people', component: PeoplePageComponent},
  {path:'casestudies', component:  CasestudiesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
