

import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  @Input() userinfo: any;

    id ="";
    name="";
    phoneNumber ="";
    comment ="";
    canRespond =false;

  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    /*
    if(this.userinfo!=null){
      this.id=this.userinfo.id;
      this.name=this.userinfo.name;
      this.phoneNumber=this.userinfo.phoneNumber;
      this.comment=this.userinfo.comment;
      this.canRespond=this.userinfo.canRespond;
    }
    */
  }

  /*
  add()
  {
    var parameter={
      id:this.id,
      name:this.name,
      comment:this.comment,
      phoneNumber:this.phoneNumber,
      canRespond:this.canRespond
    }

    this.service.addUser(parameter).subscribe(result=>{});
  }
  update()
  {
    var parameter={
      id:this.id,
      name:this.name,
      comment:this.comment,
      phoneNumber:this.phoneNumber,
      canRespond:this.canRespond
    }
    this.service.updateUser(this.id,parameter).subscribe(res => {

      console.log("updateUser")
      if(res===null)
      {
        console.log("updateUser callback1")
        this.newItemEvent.emit("");
        console.log("updateUser callback2")
      }else{
        console.log("updateUser" + res.toString())
      }
    });
  }
  */
}
