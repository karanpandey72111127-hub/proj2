import { LightningElement, track } from 'lwc';

export default class InputPractise extends LightningElement {
      getOptions() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' }
        ];
    };
    handleClick(event)
        {
             event.preventDefault();
        }
        
    handleChange(event) {
             event.preventDefault();
             let element=event.target;
             let val=element.value;
             let firstname= element.first_name;
             let lastname= element.last_name;
             let email = element.email;
             console.log(val);
             console.log(element.label);
             console.log(element.required);
             console.log(element.title);  
    }    

}