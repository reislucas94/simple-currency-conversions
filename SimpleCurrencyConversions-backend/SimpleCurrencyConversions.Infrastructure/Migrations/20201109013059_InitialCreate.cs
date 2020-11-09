using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SimpleCurrencyConversions.Infrastructure.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CurrencyConversions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    InputValue = table.Column<decimal>(nullable: false),
                    InputCurrency = table.Column<string>(nullable: true),
                    OutputCurrency = table.Column<string>(nullable: true),
                    OutputValue = table.Column<decimal>(nullable: false),
                    ConvertedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurrencyConversions", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CurrencyConversions");
        }
    }
}
