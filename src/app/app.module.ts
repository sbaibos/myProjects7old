import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './services/project.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';

import {FilterPipe} from './pipes/filter.pipe';

import { CustomPipesModule } from 'ngx-custom-pipes';
import {ReactiveFormsModule} from "@angular/forms";
import { ProjectDetailsComponent } from './components/project-details/project-details.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddProjectComponent,
    EditProjectComponent,
    ListProjectComponent,
    FilterPipe,
    ProjectDetailsComponent
    
    
    
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  CustomPipesModule,
  ReactiveFormsModule 
  
    
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
