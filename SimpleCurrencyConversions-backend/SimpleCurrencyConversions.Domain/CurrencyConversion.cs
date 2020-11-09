using System;

namespace SimpleCurrencyConversions.Domain
{
    public class CurrencyConversion
    {
        public Guid Id { get; set; }
        public decimal InputValue { get; set; }
        public string InputCurrency { get; set; }
        public string OutputCurrency { get; set; }
        public string OutputValue { get; set; }
        public DateTime ConvertedAt { get; set; }
    }
}
