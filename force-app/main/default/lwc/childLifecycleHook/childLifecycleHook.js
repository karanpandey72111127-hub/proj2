import { LightningElement,api } from 'lwc';

export default class ChildLifecycleHook extends LightningElement {
    @api v;
    @api v2={};
    constructor()
    {
        super();
        console.log('child - constructor is called');   
    }
    connectedCallback()
    {
        console.log('child - connected callback is called');
    }
    renderedCallback()
    {
        console.log('child - rendered callback is called');
    }
    disconnectedCallback()
    {
        console.log('child - disconnected callback is called');
    }
    @api func()
    {
        this.v='child component is clicked and passed value to parent';
        this.v2={id:10,name:'messi',club:'fcb'};
        const ev=new CustomEvent('sendToParent',{detail:{v:this.v,v2:this.v2}});
        this.dispatchEvent(ev);
    }
}