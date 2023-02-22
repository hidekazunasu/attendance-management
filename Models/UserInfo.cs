using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// ユーザー情報を保持するテーブルを作成。  
namespace AngularSample.Models
{
    [Table("ユーザー情報")]
    public class UserInfo
    {
        [Key]
        public int Id { get; set; }
        [Column("氏名")]
        public string Name { get; set; }
        [Column("電話番号")]
        public string PhoneNumber { get; set; }

        [Column("コメント")]
        public string Comment { get; set; }
        [Column("応答可否")]
        public bool canRespond { get; set; }
    }
}
