import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactDetailsComponent },
  {path: 'project', component: ProjectsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactDetailsComponent,
    EducationComponent,
    HomeComponent,
    ExperienceComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export class AppRoutingModule {}
