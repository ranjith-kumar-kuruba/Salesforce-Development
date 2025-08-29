import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    message = '';

    handleClick() {
        this.message = this.template.querySelector('lightning-input').value;
        console.log(this.message);
        // Create and dispatch custom event to parent
        const messageEvent = new CustomEvent('sendmessage', {
            detail: this.message,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(messageEvent);

        // Clear the input
        this.message = '';
    }
}