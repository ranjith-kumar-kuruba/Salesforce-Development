import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CustomerList extends NavigationMixin(LightningElement) {
    allCustomers = [];
    customers = []
    recordLength = 0;

    @api
    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
    }
    connectedCallback() {
        if (this.value) {
            //customerDetails from agent prompt response
            this.allCustomers = this.value.customerDetails.map(customer => {
                return customer;
            });
            this.recordLength = this.allCustomers.length;
            this.customers = this.allCustomers.slice(0, 5);
        }
    }

    handleLoad() {
        this.recordLength += 5;
        this.customers = this.allCustomers.slice(0, this.recordLength);
    }
}