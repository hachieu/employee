import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee = {
    name: '',
    address: ''
  }

  constructor(private employeeService: EmployeeServiceService, private router: Router,
    private route: ActivatedRoute) { }

    submitted = false;

  ngOnInit(): void {
    this.findById(this.route.snapshot.params.id);
  }

  findById(id: number): void {
    this.employeeService.findById(id).subscribe(
      response => {
        if(response != null){
          this.employee = response;
        }
      }
    );
  }

  onSubmit(): void {
    const data = {
      name: this.employee.name,
      address: this.employee.address
    }

    this.employeeService.update(this.employee.id, data).subscribe(
      reponse => {
        if(reponse != null){
          this.submitted = true;
        }
      }
    );
  }

}
