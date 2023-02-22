import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  // ユーザーリスト
  UserList: any = [];
  // モーダルタイトル
  ModalTitle = "";
  // 追加・編集システムのアクティブ状態
  ActivateAddEditSystemComp: boolean = false;
  // ユーザー情報
  userinfo: any;
  // closebutton要素を参照するためのViewChild
  @ViewChild('closebutton') closebutton?: ElementRef;
  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    // 初期化時にユーザーリストを更新
    this.refreshList();
  }
  // ユーザーリストを更新する関数
  refreshList() {
    this.service.getUserInfoList().subscribe(data => {
      this.UserList = data;
    });
  }
  // 追加ボタンがクリックされた時に実行される関数
  addClick() {
    this.userinfo = null;
    this.ModalTitle = "追加";
    this.ActivateAddEditSystemComp = true;
  }
  // 編集ボタンがクリックされた時に実行される関数
  editClick(item: any) {
    this.userinfo = item;
    this.ModalTitle = "編集";
    this.ActivateAddEditSystemComp = true;
  }
  // add-editコンポーネントからのコールバック関数
  callback(value: string) {
    if (this.closebutton !== undefined) {
      // closebutton要素を参照して、モーダルを閉じてユーザーリストを更新
      this.closebutton.nativeElement.click();
      this.refreshList();
    } else {
      console.log("closebutton undefined");
    }
  }
  // 削除ボタンがクリックされた時に実行される関数
  deleteClick(item: any) {
    if (confirm('削除しますか?')) {
      // ユーザーを削除して、ユーザーリストを更新
      this.service.deleteUser(item.Id).subscribe(data => {
        this.refreshList();
      })
    }
  }
  // モーダルの閉じるボタンがクリックされた時に実行される関数
  closeClick() {
    // 追加・編集システムを非アクティブにして、ユーザーリストを更新
    this.ActivateAddEditSystemComp = false;
    this.refreshList();
  }
  // ユーザー情報を更新する関数
  updateItem(item: any) {
    this.service.updateUser(item.id, item).subscribe(data => {

    });
  }
}

/*
このコードは、Angularフレームワークを使用してユーザー情報を管理するためのコンポーネントです。

UserinfoComponentは、APIサービスを呼び出してユーザー情報のリストを取得し、それをテーブルに表示します。AddEditComponentコンポーネントを呼び出し、ユーザーの追加、編集、削除を処理します。

UserListは、refreshList()関数で取得したユーザー情報を保持する配列です。ModalTitleは、モーダルウィンドウのタイトルを設定するために使用されます。ActivateAddEditSystemCompは、AddEditComponentコンポーネントがアクティブになるかどうかを制御します。

addClick()関数は、ユーザーの追加ボタンがクリックされたときに呼び出され、ActivateAddEditSystemCompをtrueに設定し、AddEditComponentをアクティブにします。editClick()関数は、ユーザーの編集ボタンがクリックされたときに呼び出され、選択されたユーザーの情報をuserinfo変数に設定し、AddEditComponentをアクティブにします。

deleteClick()関数は、ユーザーの削除ボタンがクリックされたときに呼び出され、確認ダイアログを表示し、ユーザーを削除します。

callback()関数は、AddEditComponentが完了したときに呼び出されます。closebutton変数にElementRefを使用してアクセスし、モーダルを閉じ、refreshList()関数を呼び出してユーザー情報のリストを更新します。

updateItem()関数は、ユーザー情報を更新します。

このコンポーネントは、ApiServiceServiceという別のサービスを使用して、バックエンドのAPIと通信しています。
*/
