using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleCurrencyConversions.API.ViewModels
{
    public class ConversionView
    {
        public decimal InputValue { get; set; }
        public string InputCurrency { get; set; }
        public string OutputCurrency { get; set; }
        public string OutputValue { get; set; }
    }
}
