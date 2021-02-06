import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeServiceService} from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {
    name: '',
    address: '',
    image: ''
  };

  userFile: any;
  imagePath: any;
  imgURL: any;

  currentFile?: File;

  submitted = false;


  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.currentFile = event.target.files.item(0);

    this.userFile = this.currentFile;
     // this.f['profile'].setValue(file);
 
    // var mimeType = event.target.files[0].type;
    // if (mimeType.match(/image\/*/) == null) {
    //   this.message = "Only images are supported.";
    //   return;
    // }
 
    var reader = new FileReader();
    
    this.imagePath = this.currentFile;
    if(this.currentFile){
      reader.readAsDataURL(this.currentFile); 
      reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    }
    
  }

  onSubmit(): void {
    const data = {
      name: this.employee.name,
      address: this.employee.address,
      image: this.currentFile?.name
    };

    if(this.currentFile){
      const formData: FormData = new FormData();

      formData.append('file', this.currentFile);
      formData.append('employee', JSON.stringify(data));

      this.employeeService.create(formData).subscribe(
        response => {
          console.log("this is: ",this.currentFile?.name);
          this.submitted = true;
        }
      );
    }
  }
}
