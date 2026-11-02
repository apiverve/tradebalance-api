using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TradeBalance
{
    /// <summary>
    /// Query options for the Trade Balance API
    /// </summary>
    public class TradeBalanceQueryOptions
    {
        /// <summary>
        /// Optional date in YYYY-MM format for historical lookup. Omit for current data.
        /// </summary>
        [JsonProperty("date")]
        public string Date { get; set; }

        /// <summary>
        /// Include the 12 monthly readings ending at the returned month
        /// </summary>
        [JsonProperty("history")]
        public bool? History { get; set; }

        /// <summary>
        /// Include the previous month's balance, month-on-month and year-on-year changes and rolling 12-month totals
        /// </summary>
        [JsonProperty("changes")]
        public bool? Changes { get; set; }
    }
}
