# Trade Balance API - Ruby Gem

Trade Balance provides monthly US international trade data - exports, imports, and the resulting goods-and-services trade balance (deficit or surplus) on a Balance of Payments basis.

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
response = client.execute({ date: "2023-06" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ date: "2023-06" })
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
    "yearMonth": "2026-07",
    "year": 2026,
    "month": 7,
    "exports": 310723,
    "imports": 399299,
    "balance": -88576,
    "unit": "millions_usd",
    "exportsFormatted": "$310.72 billion",
    "importsFormatted": "$399.30 billion",
    "balanceFormatted": "-$88.58 billion",
    "tradeStatus": "deficit",
    "updatedAt": "2026-09-16T16:03:38.440Z"
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
