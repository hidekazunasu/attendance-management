using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularSample;
using AngularSample.Models;

namespace AngularSample.Controllers
{
    [Route("api/[controller]")] // ルーティング処理
    [ApiController]
    public class UserInfoesController : ControllerBase
    {
        private readonly AppDbContext _context; // DbContextをインスタンス化

        public UserInfoesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/UserInfoes
        [HttpGet]
        // DBからHttpGetでデータを受け渡す処理
        public async Task<ActionResult<IEnumerable<UserInfo>>> GetUserInfo() 
        {
            // DBContextのUserInfoクラスからデータを取得しListで返す。
            var data = await _context.UserInfo.ToListAsync();
            return data;
        }

        // GET: api/UserInfoes/5
        // 上記のURLで特定のIDのデータを取得できる。
        [HttpGet("{id}")]
        public async Task<ActionResult<UserInfo>> GetUserInfo(int id)
        {
            // idが主キーであるデータを取得する。
            var userInfo = await _context.UserInfo.FindAsync(id);
            // 該当データが存在しない場合はNotFoudを返す。
            if (userInfo == null)
            {
                return NotFound();
            }

            return userInfo;
        }

        // PUT: api/UserInfoes/{id}
        // HttpPut(データの更新処理を)行う関数。
            
        [HttpPut("{id}")] // 
        public async Task<IActionResult> PutUserInfo(int id, UserInfo userInfo)
        {
            if (id != userInfo.Id)
            {
                return BadRequest();
            }

            _context.Entry(userInfo).State = EntityState.Modified;

            // DBのデータを更新(SaveChangeAsync)処理
            try
            {
                await _context.SaveChangesAsync();
            }
            // 例外処理
            catch (DbUpdateConcurrencyException)
            {
                if (!UserInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserInfoes
        // HttpPost(新しいデータの追加)処理を行う。
        [HttpPost]
        public async Task<ActionResult<UserInfo>> PostUserInfo(UserInfo userInfo)
        {
            // 関数の引数として受け取ったuserInfoをDBに追加する。  
            _context.UserInfo.Add(userInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserInfo", new { id = userInfo.Id }, userInfo);
        }

        // DELETE: api/UserInfoes/5
        // 指定のIDの情報を削除する。  
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserInfo(int id)
        {
            // 主キーが関数の引数として受け取ったIDであるデータを取得する。  
            var userInfo = await _context.UserInfo.FindAsync(id);
            // 存在しない場合はNotFoudを返す。  
            if (userInfo == null)
            {
                return NotFound();
            }
            // それ以外の場合はDBからデータを削除しDBの更新を保存する。  

            _context.UserInfo.Remove(userInfo);
            await _context.SaveChangesAsync();

            // 処理が成功したレスポンスコードを返す。  
            return NoContent();
        }

        private bool UserInfoExists(int id)
        {
            return _context.UserInfo.Any(e => e.Id == id);
        }
    }
}
