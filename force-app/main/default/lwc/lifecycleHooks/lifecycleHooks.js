import { api, LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    @api tx='hello world';

    constructor()
    {
        super();
        console.log('constructor is called');   
    }
    connectedCallback()
    {
        console.log('connected callback is called');
    }
    renderedCallback()
    {
        console.log('rendered callback is called');
    }
    disconnectedCallback()
    {
        console.log('disconnected callback is called');
    }
}