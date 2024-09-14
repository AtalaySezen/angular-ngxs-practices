import { Component, inject } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { EmployeesComponent } from "../employees/employees.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [EmployeesComponent]
})
export class DashboardComponent {
  DataService = inject(DataService);
  totalEmployees: number = 0;

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.DataService.getAllEmployee().subscribe({
      next: (data) => {
        if (data.data) {
          console.log(data.data);
          this.totalEmployees = data.data?.length;
        }
      }
    })
  }


}
