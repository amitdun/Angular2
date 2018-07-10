import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
// import toPromise operator
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get('http://localhost:55194/api/employees')
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }

    // Notice we changed the return type of the method to Promise<IEmployee>
    // from Observable<IEmployee>. We are using toPromise() operator to
    // return a Promise. When an exception is thrown handlePromiseError()
    // logs the error to the console and throws the exception again
    getEmployeeByCode(empCode: string): Promise<IEmployee> {
        return this._http.get("http://localhost:55194/api/employees?code=" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .toPromise()
            .catch()
    }

    // This method is introduced to handle exceptions
    handlePromiseError(error: Response) {
        console.error(error);
        throw (error);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}
