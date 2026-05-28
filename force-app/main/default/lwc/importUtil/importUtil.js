import { LightningElement, track } from 'lwc';
import pic from "@salesforce/resourceUrl/logofootball";
import us from "@salesforce/user/Id";
import device from "@salesforce/client/formFactor";
import lang from "@salesforce/i18n/Lang";
import locale from "@salesforce/i18n/Locale";

export default class ImportUtil extends LightningElement {
    @track sr=pic;
    @track u=us;
    @track d=device;
    @track la=lang;
    @track lo=locale;
}