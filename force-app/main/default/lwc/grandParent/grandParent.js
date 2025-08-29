import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    childMessage = '';

    handleChildMessage(event) {
        console.log(event.detail);
        this.childMessage = event.detail;
    }
}