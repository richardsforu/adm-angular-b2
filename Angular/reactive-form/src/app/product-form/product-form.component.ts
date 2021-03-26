import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  productForm: FormGroup;

  isSubmited = false;

  constructor(private fb: FormBuilder,private ps:ProductService) { }


  handleSubmit() {
    this.isSubmited = true;
    console.log(this.productForm);

    if(this.productForm.status==="VALID"){
      console.log(this.productForm.value);
      console.log('--- form submited...');
    }



  }

  get fc() {
    
    return this.productForm.controls;
  }



  testMe() {
    console.log("---- testMe function ....");

  }
  emp=new Employee();

  ngOnInit(): void {

    
     this.emp.sayHello();
     this.ps.sayHelloService();


    this.productForm = this.fb.group(
      {
        productId: ['', [Validators.required,Validators.minLength(3)]],
        productName: ['', [Validators.required]],
        price: [, [Validators.required,Validators.pattern('^[0-9]+(\\.[0-9]{2}?$)')]],
        inventoryDate: [, [Validators.required,this.ps.patternDateValidator()]],
        description: [, Validators.required]
      }
    );

  }

}
