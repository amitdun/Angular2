import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    
})
export class EmployeeListComponent  implements OnInit{
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading data. Please wait...';
    constructor(private _employeeService:EmployeeService) {
    }
    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData,
            error => {
                console.error(error);
                this.statusMessage = "Problem with the service. Please try again after sometime";
            });
    }
    //getEmployees() {
    //    this.employees= this._employeeService.getEmployees2();
    //}
   
    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
    getTotalEmployeeCount(): number {
        return this.employees.length;
    }
    getMaleEmployeeCount(): number {
        return this.employees.filter(x => x.gender === 'Male').length;
    }
    getFemaleEmployeeCount(): number {
        return this.employees.filter(x => x.gender === 'Female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
        console.log(selectedRadioButtonValue);
    }
}