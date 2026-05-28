import { api, LightningElement,wire } from 'lwc';
import fetchRecent from '@salesforce/apex/getCases.fetchRecent';

export default class DisplayCases extends LightningElement {
    @api caseList=[];
   @wire(fetchRecent)
   casesl(data,error)
   {
       if(data)
       {
           this.caseList=data;
       }
       else if(error)
       {
           console.error('Error fetching cases:', error);
       }
   }
}
