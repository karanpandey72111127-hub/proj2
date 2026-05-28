import { api, LightningElement, wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import REASON_FIELD from '@salesforce/schema/Case.Reason';
import STATUS_FIELD from '@salesforce/schema/Case.Status';


export default class LoadRecordWithoutOutputField extends LightningElement {
    //we dont want to use ay output field or lightning record form , we just want to lead fields from a specific record on our page
    @api recordId;
    @api fields=[CASE_NUMBER,REASON_FIELD,STATUS_FIELD,ORIGIN_FIELD];
    @wire(getRecord,{recordId:'$recordId',fields:'$fields'}) caseVar;
    getcasenumber()
    {
        return getFieldValue(this.caseVar.data,CASE_NUMBER);
    }
    getcasereason()
    {
        return getFieldValue(this.caseVar.data,REASON_FIELD);
    }
    getcasestatus()
    {
        return getFieldValue(this.caseVar.data,STATUS_FIELD);
    }
    getcaseorigin()
    {
        return getFieldValue(this.caseVar.data,ORIGIN_FIELD);
    }

}