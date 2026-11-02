Trade Balance API
============

Trade Balance provides monthly US international trade data - exports, imports, and the resulting goods-and-services trade balance (deficit or surplus) on a Balance of Payments basis. Each month comes with the previous month's balance, and paid plans add month-on-month and year-on-year changes, rolling 12-month totals and the last 12 months.


[![NuGet version](https://img.shields.io/nuget/v/APIVerve.API.TradeBalance.svg)](https://www.nuget.org/packages/APIVerve.API.TradeBalance)

This is a .NET wrapper for the [Trade Balance API](https://apiverve.com/marketplace/tradebalance?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.TradeBalance
```

Using the Package Manager:
```
nuget install APIVerve.API.TradeBalance
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.TradeBalance
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.TradeBalance"
5. Click on the APIVerve.API.TradeBalance package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the Trade Balance API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve.API.TradeBalance;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new TradeBalanceAPIClient("[YOUR_API_KEY]");

        var queryOptions = new TradeBalanceQueryOptions {
            Date = "2023-06",
            History = true,
            Changes = true
        };

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The Trade Balance API documentation is found here: [https://docs.apiverve.com/ref/tradebalance](https://docs.apiverve.com/ref/tradebalance?utm_source=nuget&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
Trade Balance API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new TradeBalanceAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.TradeBalance;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new TradeBalanceAPIClient("[YOUR_API_KEY]");

        var queryOptions = new TradeBalanceQueryOptions {
            Date = "2023-06",
            History = true,
            Changes = true
        };

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve.API.TradeBalance;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new TradeBalanceAPIClient("[YOUR_API_KEY]");

        var queryOptions = new TradeBalanceQueryOptions {
            Date = "2023-06",
            History = true,
            Changes = true
        };

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.TradeBalance;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new TradeBalanceAPIClient("[YOUR_API_KEY]");

        var queryOptions = new TradeBalanceQueryOptions {
            Date = "2023-06",
            History = true,
            Changes = true
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.TradeBalance;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new TradeBalanceAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new TradeBalanceQueryOptions {
            Date = "2023-06",
            History = true,
            Changes = true
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new TradeBalanceAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new TradeBalanceQueryOptions {
    Date = "2023-06",
    History = true,
    Changes = true
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new TradeBalanceAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new TradeBalanceQueryOptions {
    Date = "2023-06",
    History = true,
    Changes = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new TradeBalanceAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new TradeBalanceQueryOptions {
    Date = "2023-06",
    History = true,
    Changes = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
var queryOptions = new TradeBalanceQueryOptions {
    Date = "2023-06",
    History = true,
    Changes = true
};

using (var apiClient = new TradeBalanceAPIClient("[YOUR_API_KEY]"))
{
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "yearMonth": "2026-08",
    "year": 2026,
    "month": 8,
    "exports": 315182,
    "imports": 420754,
    "balance": -105572,
    "unit": "millions_usd",
    "exportsFormatted": "$315.18 billion",
    "importsFormatted": "$420.75 billion",
    "balanceFormatted": "-$105.57 billion",
    "tradeStatus": "deficit",
    "updatedAt": "2026-10-28T03:39:54.665Z",
    "previousYearMonth": "2026-07",
    "previousBalance": -92826,
    "exportsChange1m": 1.435,
    "importsChange1m": 4.2632,
    "balanceChange1m": -12746,
    "exportsChange12m": 10.6908,
    "importsChange12m": 22.1762,
    "balanceChange12m": -45930,
    "exports12m": 3697470,
    "imports12m": 4491225,
    "balance12m": -793756,
    "history": [
      {
        "yearMonth": "2025-09",
        "exports": 292352,
        "imports": 351743,
        "balance": -59392
      },
      {
        "yearMonth": "2025-10",
        "exports": 301158,
        "imports": 338534,
        "balance": -37376
      },
      {
        "yearMonth": "2025-11",
        "exports": 289504,
        "imports": 353372,
        "balance": -63868
      },
      {
        "yearMonth": "2025-12",
        "exports": 285282,
        "imports": 361360,
        "balance": -76078
      },
      {
        "yearMonth": "2026-01",
        "exports": 301271,
        "imports": 353941,
        "balance": -52670
      },
      {
        "yearMonth": "2026-02",
        "exports": 313628,
        "imports": 366127,
        "balance": -52500
      },
      {
        "yearMonth": "2026-03",
        "exports": 321163,
        "imports": 374820,
        "balance": -53657
      },
      {
        "yearMonth": "2026-04",
        "exports": 329893,
        "imports": 382776,
        "balance": -52883
      },
      {
        "yearMonth": "2026-05",
        "exports": 319979,
        "imports": 395731,
        "balance": -75752
      },
      {
        "yearMonth": "2026-06",
        "exports": 317335,
        "imports": 388517,
        "balance": -71182
      },
      {
        "yearMonth": "2026-07",
        "exports": 310723,
        "imports": 403550,
        "balance": -92826
      },
      {
        "yearMonth": "2026-08",
        "exports": 315182,
        "imports": 420754,
        "balance": -105572
      }
    ]
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=nuget&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=nuget&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
