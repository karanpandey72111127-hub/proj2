import { api, LightningElement } from 'lwc';

export default class ParentLifecycleHook extends LightningElement {
    @api val;   
    @api val2; 
    constructor()
    {
        super();
        console.log('Parent - constructor is called');   
    }
    connectedCallback()
    {
        console.log('Parent - connected callback is called');
    }
    renderedCallback()
    {
        console.log('Parent - rendered callback is called');
    }
    disconnectedCallback()
    {
        console.log('Parent - disconnected callback is called');
    }
    func2(event)
    {
        const{val,val2}=event.detail;
        this.val=val;
        this.val2=val2;
    }
}