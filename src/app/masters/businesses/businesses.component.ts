import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit{

  formdata:any;
  datas:any = "";

  constructor(public api:ApiService){}

  ngOnInit(): void {
    this.load();
  }

  load(){

    this.api.get("businesses").subscribe((result:any)=>{
      console.log(result);
      this.datas = result.data;
    })

    this.formdata = new FormGroup({
      name : new FormControl("",Validators.compose([Validators.required])),
      ownername:new FormControl("",Validators.compose([Validators.required])),
      address:new FormControl("",Validators.compose([Validators.required])),
      townid:new FormControl("",Validators.compose([Validators.required])),
      email:new FormControl("",Validators.compose([Validators.required, Validators.email])),
      tagline :new FormControl("",Validators.compose([Validators.required])),
      mobileno:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required])),
      logopath:new FormControl(""),
      website:new FormControl("",Validators.compose([Validators.required])),
      accountopeningdate:new FormControl("",Validators.compose([Validators.required])),
      accountexpdate:new FormControl(""),
      status:new FormControl(false,Validators.compose([Validators.required]))
    })
  }

  // convert image into base64 format
  imageChanged(event:any){
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = ()=>{
      if(reader.result != null){
        // console.log(reader.result.toString()) 
        this.formdata.patchValue({
          logopath : reader.result.toString().split(",").pop() 
          })
      }
    }

  }

  submit(data:any){
    // console.log(data);
    this.api.post("businesses", data).subscribe((result:any)=>{
      // console.log(result);
      if(result.status == "success"){
        this.load();
      }
      if(result.status == "failed"){
        alert("something went wrong")
      }
      
    })
    
  }

  delete(id:any){
    console.log(id);
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
  }

  reset(){
    this.load();
  }

}
