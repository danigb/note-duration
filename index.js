'use strict';

var names = ['long', 'double', 'whole', 'half', 'quarter', 'eighth', 'sixteenth', 'thirty-second'];
var values = [4,       2,       1,       1/2,    1/4,       1/8,      1/16,       1/32];

var namesToValues = {};
names.forEach(function(name, index) {
  var value = values[index];
  namesToValues[name] = value;
  namesToValues[name[0]] = value;
  namesToValues[name[0] + "."] = value + value / 2;
  namesToValues[name[0] + ".."] = value + value / 2 + value / 4;
});

var valuesToNames = {};
names.forEach(function(name, index) {
  var value = values[index];
  valuesToNames["" + value] = name[0];
  valuesToNames["" + (value + value / 2)] = name[0] + ".";
  valuesToNames["" + (value + value / 2 + value / 4)] = name[0] + "..";
});

var duration = function(name) {
  if(typeof(name) === 'string') {
    return namesToValues[name];
  } else {
    return valuesToNames["" + name];
  }
}

module.exports = duration;
