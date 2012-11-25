beforeEach(function() {
  this	.addMatchers({
    toReturnSum: function(expected){
     return Add(this.actual) === expected;
    }
  });
});