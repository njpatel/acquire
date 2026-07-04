acquire
=======

Local 'require' functionality

## Usage

```js
var acquire = require('acquire');

// require a mapped module
var thing = acquire('thing');

// resolve the absolute mapped file path without requiring it
var thingPath = acquire.resolve('thing');
```