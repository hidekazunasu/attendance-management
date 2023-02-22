import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  UserList: any = [];
  ModalTitle = "";
  // ActivateAddEditSystemComp: boolean = false;
  userinfo: any;
  // @ViewChild('closebutton') closebutton?: ElementRef;
  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.refreshList();
  }
  refreshList()
  {
    this.service.getUserInfoList().subscribe(data => {
      this.UserList = data;
    });
  }
  /*
  addClick() {
    console.log("addclick");
    this.userinfo = null;
    this.ModalTitle = "追加";
    console.log(this.ActivateAddEditSystemComp);
    this.ActivateAddEditSystemComp = true;
    console.log("addclick over");
  }
  editClick(item: any) {
    this.userinfo = item;
    this.ModalTitle = "編集";
    this.ActivateAddEditSystemComp = true;
  }
  callback(value:string){
    console.log("callback called");
    if(this.closebutton!==undefined)
    {
      this.closebutton.nativeElement.click();
      this.refreshList();
    }else{
      console.log("closebutton undefined");
    }
  }

  deleteClick(item: any) {
    if (confirm('削除しますか?')) {
      this.service.deleteUser(item.Id).subscribe(data => {
        this.refreshList();
      })
    }
  }
  
  closeClick() {
    this.ActivateAddEditSystemComp = false;
    this.refreshList();
  }
  */
  updateItem(item:any){
    this.service.updateUser(item.id,item).subscribe(data=>{

    });
  }
  

}

