import { api, LightningElement } from 'lwc';

export default class Zodiacproj extends LightningElement {
    @api fn;
    @api birthday;
    namenew(event)
    {
        this.fn=event.target.value;
    }
    birthnew(event)
    {
         this.birthday=event.target.value;
    }
    logic(event)
    {
      console.log("name is "+this.fn);
      console.log("DOB is : "+this.birthday);
    }
}