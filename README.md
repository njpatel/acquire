acquire
=======

Local 'require' functionality.

## Usage

```javascript
var acquire = require('acquire');

// Load a mapped module
var db = acquire('database');

// Resolve the absolute mapped file path without loading it
var dbPath = acquire.resolve('database');
```
