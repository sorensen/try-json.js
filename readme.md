try-json
========

Added string checks to a try/catch wrapper around `JSON.parse` for better performance.

See: [jsperf case](http://jsperf.com/safe-json-parse)


Install
-------

With [npm](https://npmjs.org)

```
npm install try-json
```

Usage
-----

Node.js

```js
var tryJSON = require('try-json')

tryJSON('{"ab": 2}') // {ab: 2}
tryJSON('[1,2,3,4]') // [1, 2, 3, 4]
tryJSON('woaaaaaa!') // null
```
