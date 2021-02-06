import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../service/upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  currentFile?: File;

  constructor(private uploadFile: UploadFileService) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.currentFile = event.target.files.item(0);
  }

  onSubmit(): void {
    if(this.currentFile){
      this.uploadFile.save(this.currentFile).subscribe(
        response => {
          console.log("save", this.currentFile?.name);
        }
      );
    }
  }

}
