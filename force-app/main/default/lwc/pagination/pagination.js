import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const COLUMNS = [
    { label: 'ID', fieldName: 'Id', sortable: true },
    { label: 'Name', fieldName: 'Name', sortable: true },
    { label: 'Industry', fieldName: 'Industry', sortable: true },
    { label: 'Phone', fieldName: 'Phone', sortable: true }
];

export default class Pagination extends LightningElement {

    columns = COLUMNS;
    accounts = [];
    allAccounts = [];
    error;
    count = 0;
    @wire(getAccounts)
    _wiredAccounts({ data, error }) {
        if (data) {
            this.allAccounts = data;
            this.accounts = data.slice(this.count, this.count + 10);
        } else if (error) {
            this.error = error;
        }
    };

    get hasAccounts() {
        return this.accounts.length > 0;
    }

    get hasError() {
        return this.error !== undefined;
    }

    handleNext() {
        // Logic for handling next page
        this.count += 10;
        this.accounts = this.allAccounts.slice(this.count, this.count + 10);
    }

    handlePrevious() {
        // Logic for handling previous page
        this.count -= 10;
        if (this.count < 0) {
            this.count = 0;
        }
        this.accounts = this.allAccounts.slice(this.count, this.count + 20);
    }

    handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        if (searchTerm.length >= 3) {
            this.accounts = this.allAccounts.filter(account => {
                return account.Name.toLowerCase().includes(searchTerm) || (account.Industry && account.Industry.toLowerCase().includes(searchTerm))
            });
        }

        if (searchTerm.length === 0) {
            this.count = 0;
            this.accounts = this.allAccounts.slice(this.count, this.count + 10);
        }
    }
}