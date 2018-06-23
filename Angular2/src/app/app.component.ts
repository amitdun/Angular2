import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent  {
    //name = 'Angular 2!';
    pageHeader: string = 'Employee Details';
    firstName: string = "Amit";
    lastName: string = "Arya";
    imagePath: string = "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    getFullName(): string {

        return this.firstName + " " + this.lastName;
    }

}
