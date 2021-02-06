import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { UploadFile } from 'src/app/models/upload-file';

const LINK = 'http://localhost:8080/files';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  public save(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    
    return this.http.post(LINK, formData);
  } 
}
