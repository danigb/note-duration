vows = require('vows');
assert = require('assert');

duration = require('..');

vows.describe('time').addBatch({
  "value from name": function() {
    assert.equal(duration('long'), 4);
    assert.equal(duration('double'), 2);
    assert.equal(duration('whole'), 1);
    assert.equal(duration('half'), 1/2);
    assert.equal(duration('quarter'), 1/4);
    assert.equal(duration('eighth'), 1/8);
    assert.equal(duration('sixteenth'), 1/16);
    assert.equal(duration('thirty-second'), 1/32);
  },
  "value from symbol": function() {
    assert.equal(duration('l'), 4);
    assert.equal(duration('l.'), 4 + 2);
    assert.equal(duration('l..'), 4 + 2 + 1);
    assert.equal(duration('d'), 2);
    assert.equal(duration('d.'), 2 + 1);
    assert.equal(duration('d..'), 2 + 1 + 1/2);
    assert.equal(duration('w'), 1);
    assert.equal(duration('w.'), 1 + 1/2);
    assert.equal(duration('w..'), 1 + 1/2 + 1/4);
    assert.equal(duration('h'), 1/2);
    assert.equal(duration('h.'), 1/2 + 1/4);
    assert.equal(duration('h..'), 1/2 + 1/4 + 1/8);
    assert.equal(duration('q'), 1/4);
    assert.equal(duration('q.'), 1/4 + 1/8);
    assert.equal(duration('q..'), 1/4 + 1/8 + 1/16);
    assert.equal(duration('e'), 1/8);
    assert.equal(duration('e.'), 1/8 + 1/16);
    assert.equal(duration('e..'), 1/8 + 1/16 + 1/32);
    assert.equal(duration('s'), 1/16);
    assert.equal(duration('s.'), 1/16 + 1/32);
    assert.equal(duration('s..'), 1/16 + 1/32 + 1/64);
  },
  "toString": function() {
    assert.equal(duration.toString(4), 'l');
    assert.equal(duration.toString(4 + 2), 'l.');
    assert.equal(duration.toString(4 + 2 + 1), 'l..');
    assert.equal(duration.toString(2), 'd');
    assert.equal(duration.toString(2 + 1), 'd.');
    assert.equal(duration.toString(2 + 1 + 1/2), 'd..');
    assert.equal(duration.toString(1), 'w');
    assert.equal(duration.toString(1 + 1/2), 'w.');
    assert.equal(duration.toString(1 + 1/2 + 1/4), 'w..');
    assert.equal(duration.toString(1/2), 'h');
    assert.equal(duration.toString(1/2 + 1/4), 'h.');
    assert.equal(duration.toString(1/2 + 1/4 + 1/8), 'h..');
    assert.equal(duration.toString(1/4), 'q');
    assert.equal(duration.toString(1/4 + 1/8), 'q.');
    assert.equal(duration.toString(1/4 + 1/8 + 1/16), 'q..');
    assert.equal(duration.toString(1/8), 'e');
    assert.equal(duration.toString(1/8 + 1/16), 'e.');
    assert.equal(duration.toString(1/8 + 1/16 + 1/32), 'e..');
    assert.equal(duration.toString(1/16), 's');
    assert.equal(duration.toString(1/16 + 1/32), 's.');
    assert.equal(duration.toString(1/16 + 1/32 + 1/64), 's..');
  }
}).export(module);
