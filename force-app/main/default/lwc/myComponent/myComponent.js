import { api, LightningElement,api, track } from 'lwc';

export default class MyComponent extends LightningElement {

    message='welcome to my first page of LWC';//private variable
    @api __message='this is a message from public variable';//public variable
    @track users=[
           {name:'karan',age:'28'},
           {name:'MESSI',age:'39'},
           {name:'neymar',age:'34'}
                 ];
    
}