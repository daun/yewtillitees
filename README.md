# Yewtillitees

[![NPM version](https://img.shields.io/npm/v/yewtillitees)](https://www.npmjs.com/package/yewtillitees)
[![GitHub license](https://img.shields.io/github/license/daun/yewtillitees)](./LICENSE)

Helper functions I need often.

## Installation

```js
npm install yewtillitees
```

## Usage

```js
import { normalize } from 'yewtillitees'

const normalizer = normalize(10, 20)
normalizer(15) // 0.5
```

## Helpers

### Array

- `findIndexes`
- `random`
- `shuffle`

### Async

- `sleep`

### DOM

- `onIdle`
- `onIdleAfterLoad`
- `onWindowLoad`
- `measureScrollbarSize`

### Number

- `clamp`
- `normalize`
- `normalizeBetweenRanges`
- `random`

### Object

- `map`

### String

- `camelCase`
- `kebabCase`

## License

[MIT](https://opensource.org/licenses/MIT)
