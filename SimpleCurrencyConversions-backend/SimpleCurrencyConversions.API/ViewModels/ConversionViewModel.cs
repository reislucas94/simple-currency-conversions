using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleCurrencyConversions.API.ViewModels
{
    public class ConversionViewModel
    {
        public decimal InputValue { get; set; }
        public string InputCurrency { get; set; }
        public string OutputCurrency { get; set; }
        public decimal OutputValue { get; set; }
    }
}
