import { api, LightningElement } from 'lwc';

export default class LoadRecord extends LightningElement {
    @api recordId;
    @api obApi='Account';
    @api fl=['AccountNumber','AnnualRevenue','Rating'];
}