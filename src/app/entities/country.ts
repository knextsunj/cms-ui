export class Country {
    
     serialNo:number;
     id:number;
     name:string;
     deleted:string;

    constructor(serialNo:number=0,id:number=0,name:string='',deleted:string='') {
        this.serialNo = serialNo;
        this.id = id;
        this.name = name;
        this.deleted = deleted;
    }
    
 
}