# Trade Balance API - Ruby Gem

Trade Balance provides monthly US international trade data - exports, imports, and the resulting goods-and-services trade balance (deficit or surplus) on a Balance of Payments basis. Each month comes with the previous month's balance, and paid plans add month-on-month and year-on-year changes, rolling 12-month totals and the last 12 months.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_tradebalance'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_tradebalance
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_tradebalance'

# Initialize the client
client = APIVerve::Tradebalance::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  date: "2023-06",
  history: true,
  changes: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ date: "2023-06", history: true, changes: true })
  puts response["data"]
rescue APIVerve::Tradebalance::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Tradebalance::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Tradebalance::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/tradebalance?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/tradebalance?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/tradebalance?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
