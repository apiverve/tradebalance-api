# Trade Balance API

Trade Balance provides monthly US international trade data - exports, imports, and the resulting goods-and-services trade balance (deficit or surplus) on a Balance of Payments basis. Each month comes with the previous month's balance, and paid plans add month-on-month and year-on-year changes, rolling 12-month totals and the last 12 months.

[![npm version](https://img.shields.io/npm/v/@apiverve/tradebalance.svg)](https://www.npmjs.com/package/@apiverve/tradebalance)

This is a JavaScript wrapper for the [Trade Balance API](https://apiverve.com/marketplace/tradebalance?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/tradebalance
```

Using yarn:
```shell
yarn add @apiverve/tradebalance
```

---

## Configuration

Before using the Trade Balance API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The Trade Balance API documentation is found here: [https://docs.apiverve.com/ref/tradebalance](https://docs.apiverve.com/ref/tradebalance?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const tradebalanceAPI = require('@apiverve/tradebalance');
const api = new tradebalanceAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  date: "2023-06",
  history: false,
  changes: false
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  date: "2023-06",
  history: false,
  changes: false
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  date: "2023-06",
  history: false,
  changes: false
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
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

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
