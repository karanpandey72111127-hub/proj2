import { api, LightningElement } from 'lwc';

export default class ReactivityParent extends LightningElement {
    @api v='119, dehradun';
    @api ck()
    {

        this.v='335,ghaziabad';
    }
}