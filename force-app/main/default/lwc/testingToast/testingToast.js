import { LightningElement } from 'lwc';
import acr from '@salesforce/apex/createAcc.acr';

export default class TestingToast extends LightningElement {

    accName;
    handleaccname(event){
        this.accName = event.target.value;
    }
    createAccount(){
        acr({accName : this.accName});
    }
}