import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employee: Employee[] = [];

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  idEmp:any;
  submitted = false;

  findAll(): void {
    this.employeeService.getAll().subscribe(
      response => {
        this.employee = response;
      }
    );
  }

  deleteEmployee(id: any): void {
    this.idEmp = id;
  }

  delete(): void{
    this.employeeService.deleteById(this.idEmp).subscribe(
      response => {
        this.findAll();
      }
    );
  }

}
