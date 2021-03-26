import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {AbstractControl,ValidatorFn} from '@angular/forms';

@Injectable({ // Injectable decarator
  providedIn: 'root'
})
export class ProductService {

  sayHelloService(){
    console.log('--- ProductService:: sayHelloService method');
  }

  



  patternDateValidator():ValidatorFn{
    console.log('>>> checking...');
    

    return(control:AbstractControl):{[key:string]:boolean}=>{
      if(!control.value){
        return null;
      }

      if(control && control.value && !moment(control.value,'DD-MM-YYYY',true).isValid()){
        return {'invalidDate':true};
      }
      return null;
    };
  }
}
