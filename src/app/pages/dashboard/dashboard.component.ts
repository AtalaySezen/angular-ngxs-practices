import { Component, inject } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { EmployeesComponent } from "../employees/employees.component";
import { Store } from '@ngxs/store';
import { EmployeeState } from '../../shared/store/EmployeeState';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/Employee';
import { getAllEmployee } from '../../shared/store/EmployeeState';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [EmployeesComponent, CommonModule, MatButtonModule]
})

export class DashboardComponent {
  DataService = inject(DataService);
  store = inject(Store);

  Employees$: Observable<IEmployee[]> = inject(Store).select(EmployeeState.selectEmployee);
  totalEmployees: number = 0;
  dashboardOpen: boolean = true;

  ngOnInit(): void {
    this.Employees$.subscribe({
      next: (employees) => {
        if (!employees.length) {
          this.store.dispatch(new getAllEmployee());
        }
        this.totalEmployees = employees.length;
      }
    })
  }

}
