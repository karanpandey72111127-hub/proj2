import { LightningElement } from 'lwc';

export default class Players extends LightningElement {
    searchText='';
    categoryCountry='All';
    categoryPosition='All';
    sortBy='name_asc';
    handleSearch(event){
         this.searchText=event.target.value;
    }
    get categoryCountryOptions(){
     return [
        {label:'All', value:'All'},
        {label:'Argentina', value:'Argentina'},
        {label:'Spain', value:'Spain'},
        {label:'Portugal', value:'Portugal'},
        {label:'France', value:'France'},
        {label:'Germany', value:'Germany'},
        {label:'Brazil', value:'Brazil'},
        {label:'Netherlands', value:'Netherlands'},
        {label:'Belgium', value:'Belgium'},
        {label:'Poland', value:'Poland'}
     ] ;     
    }
    get categoryPositionOptions(){
        return [
            {label:'All', value:'All'},
            {label:'Winger', value:'Winger'},
            {label:'Defender', value:'Defender'},
            {label:'Goalkeeper', value:'Goalkeeper'}
        ];
    }
    get sortOptions(){
        return [
            {label:'Name [A-Z]', value:'name_asc'},
            {label:'Name [Z-A]', value:'name_desc'},
            {label:'Market Value [Low-High]', value:'marketValue_asc'},
            {label:'Market Value [High-Low]', value:'marketValue_desc'}
        ];
    }
    handleCategoryCountry(event){
        this.categoryCountry=event.target.value;
    }
    
    handleCategoryPosition(event){
        this.categoryPosition=event.target.value;
    }
    handleSort(event){
        this.sortBy=event.target.value;
    }
    get filteredData(){
          const textToSearch=(this.searchText||'').toLowerCase();
          let result=this.items.filter(item=>{ 
            const matchesText=item.name.toLowerCase().includes(textToSearch);
            const matchesCategoryCountry=this.categoryCountry==='All' || item.country===this.categoryCountry;
            const matchesCategoryPosition=this.categoryPosition==='All' || item.position===this.categoryPosition;
            return matchesText && matchesCategoryCountry && matchesCategoryPosition;
          } ); 
          result=[...result].sort((a,b)=>{
            switch(this.sortBy){
                case 'name_asc':
                    return a.name.localeCompare(b.name);
                case 'name_desc':
                    return b.name.localeCompare(a.name);
                case 'marketValue_asc':
                    return a.marketValue - b.marketValue;
                case 'marketValue_desc':
                    return b.marketValue - a.marketValue;
                default:
                    return 0;
            }
          });
          return result;
    }
    columns=[
        {label:'Name', fieldName:'name'},
        {label:'Country', fieldName:'country'},
        {label:'Position', fieldName:'position'},
        {label:'Market Value', fieldName:'marketValue',type:'currency'}
    ];
    items=[
        {id:1, name:'Lionel Messi', country:'Argentina', position:'Winger', marketValue:80},
        {id:2, name:'Cristiano Ronaldo', country:'Portugal', position:'Winger', marketValue:70},
        {id:3, name:'Neymar Jr.', country:'Brazil', position:'Winger', marketValue:90},
        {id:4, name:'Sergio Ramos', country:'Spain', position:'Defender', marketValue:50},
        {id:5, name:'Manuel Neuer', country:'Germany', position:'Goalkeeper', marketValue:60},
        {id:6, name:'Kylian Mbappé', country:'France', position:'Winger', marketValue:100},
        {id:7, name:'Virgil van Dijk', country:'Netherlands', position:'Defender', marketValue:75},
        {id:8, name:'Alisson Becker', country:'Brazil', position:'Goalkeeper', marketValue:65},
        {id:9, name:'Kevin De Bruyne', country:'Belgium', position:'Midfielder', marketValue:85},
        {id:10, name:'Robert Lewandowski', country:'Poland', position:'Striker', marketValue:95}
    ];
    
}