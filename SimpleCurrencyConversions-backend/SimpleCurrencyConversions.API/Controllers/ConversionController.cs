using System;
using Newtonsoft.Json;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimpleCurrencyConversions.Domain;
using SimpleCurrencyConversions.Infrastructure;

namespace SimpleCurrencyConversions.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConversionController : ControllerBase
    {
        public ConversionController() { }

        [HttpPost("convert")]
        public async Task<IActionResult> Convert([FromBody] CurrencyConversion conversion)
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    string baseURL = "https://openexchangerates.org/api/latest.json";
                    string appId = "803b49d404bb4dc9baf6091b9b97de8a";

                    HttpResponseMessage response = client.GetAsync(
                        baseURL + $"?app_id={appId}&symbols={conversion.InputCurrency},{conversion.OutputCurrency}").Result;

                    response.EnsureSuccessStatusCode();
                    string content = response.Content.ReadAsStringAsync().Result;

                    var resultado = JsonConvert.DeserializeObject<OpenExchangeRatesResponse>(content);

                    decimal inCurrencyValue = 0;
                    decimal outCurrencyValue = 0;

                    resultado.Rates.TryGetValue(conversion.InputCurrency, out inCurrencyValue);
                    resultado.Rates.TryGetValue(conversion.OutputCurrency, out outCurrencyValue);

                    var outputValue = decimal.Round((conversion.InputValue / inCurrencyValue * outCurrencyValue),2);

                    await CreateRecord(new CurrencyConversion
                    {
                        Id = Guid.NewGuid(),
                        InputValue = decimal.Round(conversion.InputValue,2),
                        InputCurrency = conversion.InputCurrency,
                        OutputCurrency = conversion.OutputCurrency,
                        OutputValue = outputValue,
                        ConvertedAt = DateTime.Now
                    });

                    return Ok(outputValue);
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Failure converting.");
            }

        }


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

        private async Task<IActionResult> CreateRecord(CurrencyConversion conversion)
        {
            try
            {
                using (var db = new SQLiteDBContext())
                {
                    await db.CurrencyConversions.AddAsync(conversion);

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