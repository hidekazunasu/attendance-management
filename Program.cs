using Microsoft.EntityFrameworkCore;

namespace AngularSample
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);

            // �R���g���[���[�N���X�̒ǉ�  
            builder.Services.AddControllers();
            // �ڑ�������̒ǉ�
            builder.Services.AddDbContext<AppDbContext>(options => {
                var path = builder.Configuration.GetConnectionString("MyWorldDbConnection");
                path = path.Replace("%CONTENTROOTPATH%", builder.Environment.ContentRootPath);


                options.UseSqlServer(path);
            });

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
           
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
         
            app.UseStaticFiles();
            app.UseRouting();

            // CORS�̐ݒ�  
            app.UseCors(x=>x.AllowAnyMethod()
            .AllowAnyHeader()
            .AllowAnyOrigin());
            app.UseEndpoints(x => x.MapControllers());

            app.Run();
        }
    }
}