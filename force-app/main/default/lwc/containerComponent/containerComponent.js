import { api, LightningElement } from 'lwc';

export default class ContainerComponent extends LightningElement {
    @api ls;
    @api flag=false
    @api handlechildclick()
    {
         this.flag=true;
    }
}