using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleCurrencyConversions.Domain
{
    public class OpenExchangeRatesResponse
    {
        public string Disclaimer { get; set; }
        public string License { get; set; }
        public int Timestamp { get; set; }
        public string @base  { get; set; }
        public Dictionary<string, decimal> Rates { get; set; }
}
}
