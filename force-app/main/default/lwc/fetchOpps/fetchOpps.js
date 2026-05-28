import { api, LightningElement } from 'lwc';
import getOpp from '@salesforce/apex/fetchAccount.getOpp';

export default class FetchOpps extends LightningElement {
    @api stageName;
    @api oppr;
    handleChange(event){
                this.stageName=event.target.value;       
                       }
    getOpps(event){
            getOpp({stage:this.stageName})
            .then(result=>{
                console.log(result);
                this.oppr=result;
            })
            .catch(error=>{
                console.error(error);
            });     
                   }
}