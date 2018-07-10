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
    isDisabled: boolean = true;
    imagePath: string = "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    getFullName(): string {

        return this.firstName + " " + this.lastName;
    }
    
    //In the example below we are using interpolation.Notice the malicious usage of<script> tag.

    badHtml: string = 'Hello <script>alert("Hacked");</script> World';

}
