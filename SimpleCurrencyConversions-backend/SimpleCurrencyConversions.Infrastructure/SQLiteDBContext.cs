using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using SimpleCurrencyConversions.Domain;

namespace SimpleCurrencyConversions.Infrastructure
{
    public class SQLiteDBContext : DbContext
    {
        public DbSet<CurrencyConversion> Conversions { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=conversions.db");
    }
}
