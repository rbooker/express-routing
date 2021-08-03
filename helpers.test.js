const {
  findMean,
  findMedian,
  findMode,
} = require("./helpers");

describe("#findMedian", function(){
  it("finds the median of a set with an even number of values", function(){ 
    expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
  })
  it("finds the median of a set with an odd number of values", function () { 
    expect(findMedian([1, -1, 4])).toEqual(1)
  })
})

describe("#findMean", function () {
  it("finds the mean of an empty array", function () { 
    expect(findMean([])).toEqual(0)
  })
  it("finds the mean of an array of integers", function () { 
    expect(findMean([1,-1,4,2])).toEqual(1.5)
  })
})

describe("#findMode", function () {
  it("finds the mode", function () { 
    expect(findMode([1,1,1,2,2,3])).toEqual(1)
  })
})