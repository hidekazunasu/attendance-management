import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  // 親コンポーネントからの入力データを受け取るためのプロパティ
  @Input() userinfo: any;

  // フォームに入力されたデータを格納するためのプロパティ
  id = "";
  name = "";
  phoneNumber = "";
  comment = "";
  canRespond = false;

  // 親コンポーネントへデータを送信するためのイベント
  @Output() newItemEvent = new EventEmitter<string>();

  // ApiServiceServiceクラスをDIするためのコンストラクタ
  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    // 親コンポーネントから受け取ったデータがあれば、フォームの値を設定する
    if (this.userinfo != null) {
      this.id = this.userinfo.id;
      this.name = this.userinfo.name;
      this.phoneNumber = this.userinfo.phoneNumber;
      this.comment = this.userinfo.comment;
      this.canRespond = this.userinfo.canRespond;
    }
  }

  // フォームに入力されたデータをWebAPIに送信して、新規ユーザーを追加する
  add() {
    var parameter = {
      id: this.id,
      name: this.name,
      comment: this.comment,
      phoneNumber: this.phoneNumber,
      canRespond: this.canRespond
    }

    this.service.addUser(parameter).subscribe(result => { });
  }

  // フォームに入力されたデータをWebAPIに送信して、既存のユーザーを更新する
  update() {
    var parameter = {
      id: this.id,
      name: this.name,
      comment: this.comment,
      phoneNumber: this.phoneNumber,
      canRespond: this.canRespond
    }

    this.service.updateUser(this.id, parameter).subscribe(res => {

      console.log("updateUser")
      if (res === null) {
        console.log("updateUser callback1")
        this.newItemEvent.emit("");
        console.log("updateUser callback2")
      } else {
        console.log("updateUser" + res.toString())
      }
    });
  }
}

/*
 このコードは、親コンポーネントから受け取ったユーザー情報をフォームに表示し、
ユーザーが入力した情報を保持しています。
また、newItemEvent というイベントを通じて親コンポーネントに通知することができます
*/
