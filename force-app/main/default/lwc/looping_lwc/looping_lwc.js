import { LightningElement, track } from 'lwc';

export default class Looping_lwc extends LightningElement {
    @track players =[
        {jersey_Number:10 ,name :'lionel messi',club:'FCB'},
        {jersey_Number:7 ,name :'cristiano ronaldo',club:'RMA'},
        {jersey_Number:11,name:'neymar jr',club:'FCB'}
                ];
}