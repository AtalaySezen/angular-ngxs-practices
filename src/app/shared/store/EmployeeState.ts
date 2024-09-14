import { Action, Selector, State, StateContext } from "@ngxs/store";
import { IEmployee } from "../../models/Employee";
import { Injectable, inject } from "@angular/core";
import { DataService } from "../services/data.service";
import { tap } from "rxjs";

export class getAllEmployee {
    static readonly type = '[Employee] Get All';
}

export interface EmployeeStateModel {
    employees: IEmployee[] | undefined;
}

@State<EmployeeStateModel>({
    name: 'Employee',
    defaults: {
        employees: []
    }
})

@Injectable()
export class EmployeeState {
    dataService = inject(DataService);

    @Action(getAllEmployee)
    getAllEmployee(ctx: StateContext<EmployeeStateModel>) {
        return this.dataService.getAllEmployee().pipe(tap((response) => {
            const state = ctx.getState();
            ctx.setState({
                ...state,
                employees: response.data
            })
        }))
    }

    @Selector([EmployeeState])
    static selectEmployee(state: EmployeeStateModel) {
        return state.employees;
    }
    
}

