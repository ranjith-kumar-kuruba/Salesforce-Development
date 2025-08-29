import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    childMessage = '';

    // Handler for the custom event from child
    handleChildMessage(event) {
        console.log(event.detail);
        this.childMessage = event.detail;
    }
}