import { LightningElement,api } from 'lwc';

export default class LoadRecordWithCustomView extends LightningElement {
        @api recordId;
        @api obApi='Account';
        @api fl=['AccountNumber','AnnualRevenue','Rating'];
}