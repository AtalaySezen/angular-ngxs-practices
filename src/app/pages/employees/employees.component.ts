import { Component, inject } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { IEmployee } from '../../models/Employee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  employees: IEmployee[] = [];
  DataService = inject(DataService);

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.DataService.getAllEmployee().subscribe({
      next: (data) => {
        if (data.data) {
          this.employees = data.data;
        }
      }
    })
  }
}
