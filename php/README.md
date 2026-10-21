# Trade Balance API - PHP Package

Trade Balance provides monthly US international trade data - exports, imports, and the resulting goods-and-services trade balance (deficit or surplus) on a Balance of Payments basis.

## Installation

Install via Composer:

```bash
composer require apiverve/tradebalance
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Tradebalance\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['date' => '2023-06']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Tradebalance\Client;
use APIVerve\Tradebalance\Exceptions\APIException;
use APIVerve\Tradebalance\Exceptions\ValidationException;

try {
    $response = $client->execute(['date' => '2023-06']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/tradebalance?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/tradebalance?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/tradebalance?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
