beforeEach(function() {
  this.addMatchers({

    toHaveLength: function(expected) {
		return this.actual.length === expected;
    }

  });
});

function callMock(mock, data) {
	spyOn($, 'ajax').andCallFake(function (ajaxOptions) {
		ajaxOptions.success(mock);
	});
}

function loadTaffyWithMockData(mock){
	//blow away data first, then reload with mock
	worklogs().remove();
	callMock(mock);
	queryJira(function (data) { taffyInsert(loadJiraLogs(data)); });
}
