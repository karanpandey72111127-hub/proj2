import { api, LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {
    @api idols=[
        {jersey:10,name:'messi',country:'arg'},
        {jersey:9,name:'suarez',country:'uru'},
        {jersey:11,name:'neymar',country:'brz'}
    ];
    @api parentclick()
    {
       this.template.querySelector('c-container-component').handlechildclick(); 
    }
}