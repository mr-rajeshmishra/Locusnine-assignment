import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as bootstrap from 'bootstrap'; 
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list.component';
import { SortableHeaderDirective } from './common/sort-helper-directive.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionManagerComponent } from './session-manager/session-manager.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from './common/user-service.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SortableHeaderDirective,
    DashboardComponent,
    SessionManagerComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
