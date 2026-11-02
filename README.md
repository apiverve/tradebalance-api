# [Trade Balance API](https://apiverve.com/marketplace/tradebalance?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

Trade Balance provides monthly US international trade data - exports, imports, and the resulting goods-and-services trade balance (deficit or surplus) on a Balance of Payments basis. Each month comes with the previous month&#x27;s balance, and paid plans add month-on-month and year-on-year changes, rolling 12-month totals and the last 12 months.

The Trade Balance API provides a simple, reliable way to integrate trade balance functionality into your applications. Built for developers who need production-ready trade balance capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/tradebalance?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/tradebalance?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/tradebalance)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.TradeBalance)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-tradebalance/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_tradebalance)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/tradebalance)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_tradebalance)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callTradeBalanceAPI() {
    try {
        const params = new URLSearchParams({
            date: '2023-06',
            changes: true
        });

        const response = await fetch(`https://api.apiverve.com/v1/tradebalance?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callTradeBalanceAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/tradebalance?date=2023-06&changes=true" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/tradebalance
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/tradebalance) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.TradeBalance
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.TradeBalance) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-tradebalance
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-tradebalance/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_tradebalance
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_tradebalance) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/tradebalance
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/tradebalance) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_tradebalance
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_tradebalance) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:tradebalance-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/tradebalance-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [Trade Balance API](https://apiverve.com/marketplace/tradebalance?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/tradebalance](https://docs.apiverve.com/ref/tradebalance)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The Trade Balance API is commonly used for:

- **Web Applications** - Add trade balance features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with trade balance capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the Trade Balance API:

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

## Support & Community

- 🏠 **API Home**: [Trade Balance API](https://apiverve.com/marketplace/tradebalance?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
