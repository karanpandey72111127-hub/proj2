import { api, LightningElement } from 'lwc';

export default class EditInCustomLayout extends LightningElement {
    @api recordId;
    @api objectApi="Account";
    

    fn(event)
    {
        const forme=this.tempelate.querySelector('lightning-record-edit-form');
        forme.reset();
    } 
}