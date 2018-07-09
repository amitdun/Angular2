import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
    selector: 'simple',
    template: `You entered : {{simpleInput}}`
})
export class SimpleComponent implements OnChanges {
    // Input property. As and when this property changes
    // ngOnChanges life cycle hook method is called
    @Input() simpleInput: string;

    // Step 3 : Implementation for the hook method
    // This code logs the current and previous value
    // to the console.
    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = '
                + current + ', previousValue = ' + previous);
            // The above line can be rewritten using
            // placeholder syntax as shown below
            // console.log(`${propertyName}: currentValue
            // = ${current }, previousValue = ${previous }`);
        }
    }
}