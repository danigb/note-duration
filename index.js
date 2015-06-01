'use strict'

var names = ['long', 'double', 'whole', 'half', 'quarter', 'eighth', 'sixteenth', 'thirty-second']
var values = [4, 2, 1, 1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32]

var namesToValues = {}
for (var i = 0; i < values.length; i++) {
  var name = names[i]
  var value = values[i]
  var short = name[0]
  var num = '' + (1 / value)
  namesToValues[name] = value
  namesToValues[short] = namesToValues[num] = value
  namesToValues[short + '.'] = namesToValues[num + '.'] = value + value / 2
  namesToValues[short + '..'] = namesToValues[num + '..'] = value + value / 2 + value / 4
  namesToValues[short + 't'] = namesToValues[num + 't'] = (value + value) / 3
}

var valuesToNames = {}
names.forEach(function (name, index) {
  var value = values[index]
  valuesToNames['' + value] = name[0]
  valuesToNames['' + (value + value / 2)] = name[0] + '.'
  valuesToNames['' + (value + value / 2 + value / 4)] = name[0] + '..'
})

var duration = function (name) {
  return namesToValues['' + name]
}

duration.toString = function (value) {
  return valuesToNames['' + value]
}

module.exports = duration
