# 在席管理システムについて  

## 概要  

ウェブ上に職員の現在の在席状況を表示するものである。  
在席・退席中の表示についてはウェブ上でボタンをクリックすることで行う。  
また現状についてのコメントを記載出来る機能がある。

```mermaid
flowchart LR
ClientAPP -->|Httpリクエスト| WebAPI
WebAPI -->|レスポンス| ClientAPP
データベース --> WebAPI
WebAPI -->|CRUD| データベース


```

```mermaid
sequenceDiagram
    actor ユーザー
    participant ブラウザ
    participant WebAPI
    participant データベース

```

## DBについて  

MicrosoftのSQLServerを使用し、以下のテーブルを作成する。  

```mermaid
erDiagram

users {
    int Id "主キー"
    string Name "氏名"
    string PhoneNumber "内線番号"
    string Comment "コメント"
    bool canRespond "応答可否"
}

```
