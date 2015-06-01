# note-duration

[![Code Climate](https://codeclimate.com/github/danigb/note-duration/badges/gpa.svg)](https://codeclimate.com/github/danigb/note-duration)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)


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
duration("h.");  // => dot: 1/2 + 1/4
duration("h.."); // => double dot: 1/2 + 1/4 + 1/8
duration("ht");  // => triplet: (1/2 + 1/ 2) / 3
duration("q");   // => 1/4
duration("q.");  // => dot: 1/4 + 1/8
duration("q.."); // => double dot: 1/4 + 1/8 + 1/16
duration("qt");  // => triplet: (1/4 + 1/4) / 3
```

From number string to value:

```js
duration("2");   // => 1/2
duration("2.");  // => dot: 1/2 + 1/4
duration("2t");  // => triplet: (1/2 + 1/ 2) / 3
duration("2.."); // => double dot: 1/2 + 1/4 + 1/8
duration("4");   // => 1/4
duration("4.");  // => dot: 1/4 + 1/8
duration("4.."); // => double dot: 1/4 + 1/8 + 1/16
duration("4t");  // => triplet: (1/4 + 1/4) / 3
```


The `duration.toString` method does the opposite: convert from value to letter and dots:

```js
duration.toString(1/2 + 1/4);        // => "h."
duration.toString(1/4 + 1/2 + 1/8);  // => "q.."
```

## License

MIT License
