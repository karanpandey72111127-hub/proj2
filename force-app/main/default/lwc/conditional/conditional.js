import { LightningElement, track,api } from 'lwc';

export default class Conditional extends LightningElement {
    @api showTom=false;
    @api showjerry=false;
    @api tESTINGPURPOSE='This is a sample text for TESTING PURPOSE VARIABLE from child component';
    @track users=[
                     {name:'karan',email:'karan123@Gmail.com'},
                     {name:'abc',email:'abc@gmail.com'},
                     {name:'xyz',email:'xyz@gmail.com'}
                ];
    content1='button is clicked';
    content2='button2 is clicked';
    contentDef='click on any button to see the changes';  
    b1=false;
    b2=false;
    @api ins=Date();
    click1()
    {
        this.b1=true;
    }
    click2()
    {
        this.b2=true;
    }

}