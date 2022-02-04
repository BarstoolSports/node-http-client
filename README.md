# node-http-client

Http Client based on Undici

## Install

```json
{
  "dependencies": {
    "@barstoolsports/http-client": "BarstoolSports/node-http-client"
  }
}
```

## Usage

### Basic Request

```typescript
import { httpClient } from '@barstoolsports/http-client'

const res = await httpClient.get('https://union.barstoolsports.com/status')
const json = await res.body.json()
```

### Default Options

```typescript
import { HttpClient } from '@barstoolsports/http-client'

const httpClient = new HttpClient({
  basePath: 'https://union.barstoolsports.com',
  headers: {
    authorization: 'bearer abcdef'
  }
})

const res = await httpClient.get('user/me')
const json = await res.body.json()
```
