import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IEmployee } from '../../models/Employee';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  http = inject(HttpClient)

  getAllEmployee(): Observable<ApiResponse<IEmployee[]>> {
    return this.http.get<ApiResponse<IEmployee[]>>(`${environment.apiUrl}`)
  }

  
}
