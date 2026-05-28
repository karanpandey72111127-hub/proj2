import { LightningElement, api } from 'lwc';

export default class Parentlwc extends LightningElement {
       
    @api val;  
    @api dur=10*23;
    
    transform(event)
      {
        this.val=event.target.value;
        console.log(this.val);
      }
 
    
    get duration()
    {
         return (this.dur*2);
    }  
}