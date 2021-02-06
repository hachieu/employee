import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  {path: 'add', component: AddEmployeeComponent},
  {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {path: 'list-employee', component: ListEmployeeComponent},
  {path: 'edit/:id', component: EditEmployeeComponent},
  {path: 'files', component: UploadFileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
