import { LightningElement } from 'lwc';

export default class UseCaseOne extends LightningElement {

    searchText='';
    category='All';
    sortBy='name_asc';
    columns=[
        {label:'Name', fieldName:'name'},
        {label:'Category', fieldName:'category'},
        {label:'Score', fieldName:'score',type:'currency'}
    ];
    items=[
        {id:1, name:'LWC', category:'Learning', score:85},
        {id:2, name:'Agentforce', category:'Learning', score:92},
        {id:3, name:'Workout', category:'Lifestyle', score:80},
        {id:4, name:'Yoga', category:'Lifestyle', score:72},
        {id:5, name:'Promotion', category:'Career', score:88}
    ];
    handleSearch(event){
         this.searchText=event.target.value;
    }
    get categoryOptions(){
     return [
        {label:'All', value:'All'},
        {label:'Learning', value:'Learning'},
        {label:'Lifestyle', value:'Lifestyle'},
        {label:'Career', value:'Career'}
     ] ;     
    }
    get sortOptions(){
        return [
            {label:'Name [A-Z]', value:'name_asc'},
            {label:'Name [Z-A]', value:'name_desc'}
        ];
    }
    handleCategory(event){
        this.category=event.target.value;
    }
    
    handleSort(event){
        this.sortBy=event.target.value;
    }
    get filteredData(){
          const textToSearch=(this.searchText||'').toLowerCase();
          let result=this.items.filter(item=>{ 
            const matchesText=item.name.toLowerCase().includes(textToSearch);
            const matchesCategory=this.category==='All' || item.category===this.category;
            return matchesText && matchesCategory;
          } ); 
          result=[...result].sort((a,b)=>{
            switch(this.sortBy){
                case 'name_asc':
                    return a.name.localeCompare(b.name);
                case 'name_desc':
                    return b.name.localeCompare(a.name);
                default:
                    return 0;
            }
          });
        return result;  
    }
}