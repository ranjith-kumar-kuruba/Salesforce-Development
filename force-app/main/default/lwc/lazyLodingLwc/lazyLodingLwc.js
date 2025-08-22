import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry' }
];
export default class LazyLodingLwc extends LightningElement {

    accounts;
    allAccounts;
    error;
    recordCount;
    columns = COLUMNS;

    @wire(getAccounts)
    wiredData({ error, data }) {
        if (data) {
            this.allAccounts = data;
            this.accounts = this.allAccounts.slice(0, 5);
            this.recordCount = this.accounts.length;
        } else if (error) {
            this.error = error;
        }
    }

    loadData() {
        this.recordCount += 5;
        const accounts = this.allAccounts.slice(0, this.recordCount);
        this.accounts = accounts;
    }
}