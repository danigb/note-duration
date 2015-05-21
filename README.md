# note-duration

Parse note durations. It can convert from name to
[value](http://en.wikipedia.org/wiki/Note_value) and viceversa.

## Usage

Install the node module: `npm install --save node-duration`
and require it from you file:

```js
var duration = require('note-duration');
```

You can convert from names to values:

```js
duration('long');          // => 4
duration('double');         // => 2
duration('whole');          // => 1
duration('half');           // => 1/2
duration('quarter');        // => 1/4
duration('eighth');         // => 1/8
duration('sixteenth');      // => 1/16
duration('thirty-second');  // => 1/32
```

From letter and dots to values:

```js
duration("h");   // => 1/2
duration("h.");  // => 1/2 + 1/4
duration("h.."); // => 1/2 + 1/4 + 1/8
duration("q");   // => 1/4
duration("q.");  // => 1/4 + 1/8
duration("q.."); // => 1/4 + 1/8 + 1/16
```

The `duration.toString` method does the opposite: convert from value to names:

```js
duration.toString(1/2 + 1/4);        // => "h."
duration.toString(1/4 + 1/2 + 1/8);  // => "q.."
```

## License

MIT License
