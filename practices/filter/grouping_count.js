'use strict';

function grouping_count(collection) {

  //implement here
  return collection.reduce((prev, item) => {
    if(item in prev)
      prev[item] ++;
    else
      prev[item] = 1;
    return prev;
  }, {});
}

module.exports = grouping_count;
