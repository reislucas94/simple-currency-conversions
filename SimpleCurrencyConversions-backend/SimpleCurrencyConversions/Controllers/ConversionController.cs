using System;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimpleCurrencyConversions.API.ViewModels;
using SimpleCurrencyConversions.Domain;
using SimpleCurrencyConversions.Infrastructure;

namespace SimpleCurrencyConversions.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConversionController : ControllerBase
    {
        public ConversionController(){}

        [HttpGet("last10")]
        public async Task<IActionResult> GetLast10()
        {
            try
            {
                using (var db = new SQLiteDBContext())
                {
                    var results = await db.CurrencyConversions.OrderByDescending(x => x.ConvertedAt).Take(10).ToListAsync();

                    return Ok(results);
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Failure retrieving information.");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ConversionViewModel conversion)
        {
            try
            {
                using (var db = new SQLiteDBContext())
                {
                    await db.CurrencyConversions.AddAsync(new CurrencyConversion
                    {
                        Id = Guid.NewGuid(),
                        InputValue = conversion.InputValue,
                        InputCurrency = conversion.InputCurrency,
                        OutputCurrency = conversion.OutputCurrency,
                        OutputValue = conversion.OutputValue,
                        ConvertedAt = DateTime.Now
                    });

                    if (await db.SaveChangesAsync() > 0)
                    {
                        return Ok();
                    };
                }

                return BadRequest();
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Failure creating record.");
            }
        }
    }
}