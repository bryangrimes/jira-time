beforeEach(function() {
  this.addMatchers({

    //toReturnSum: function(expected){
    // return Add(this.actual) === expected;
    //}

    toHaveLength: function(expected) {
		return this.actual.length === expected;
    }

  });
});