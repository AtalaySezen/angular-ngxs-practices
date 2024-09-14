import { Component, inject } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { IEmployee } from '../../models/Employee';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EmployeeState, getAllEmployee } from '../../shared/store/EmployeeState';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  DataService = inject(DataService);
  store = inject(Store);
  Employees$: Observable<IEmployee[]> = inject(Store).select(EmployeeState.selectEmployee);
  employees: IEmployee[] = [];
  displayedColumns: string[] = ['name', 'email', 'mobile', 'dob', 'doj'];
  dataSource = new MatTableDataSource<IEmployee>

  ngOnInit(): void {
    this.Employees$.subscribe({
      next: (employees) => {
        if (!employees.length) {
          this.store.dispatch(new getAllEmployee());
        }
        this.dataSource = new MatTableDataSource(employees);
      }
    })
  }

}
