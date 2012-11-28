
describe("Worklog Angular Tests" , function() {
	var scope, ctrl;
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller(workLogCtrl, {$scope: scope});
	}));

	it("can get logs from db into scope", function(){
		//console.log(scope.logs);
		expect(scope.logs).toHaveLength(3);
	});

	it("can get time logged from db into scope", function(){
		expect(scope.timeLogged).toHaveLength(3);
	});
});


    /*var scope, ctrl, $httpBackend;
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
 
      scope = $rootScope.$new();
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
    }));*/
