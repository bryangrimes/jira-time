



describe("User Stuff" , function() {
	it("can get all users", function(){
		var users = new Users();
		expect(users.getUsers).not.toBeUndefined();
	});

	it("create user object with name", function(){
		var users = new Users();
		var someone = new users.SingleUser('bgrimes');
		expect(someone.userName).toEqual('bgrimes');
	});

	it("get single user", function(){
		var users = new Users();
	
		var target = new users.SingleUser('bgrimes');
		expect(target).not.toBeUndefined();
		expect(target.userName).toEqual('bgrimes');
	});

	it("get single user's rate", function(){
		getAll();
		loadUser('bgrimes');
		expect(singleUser).not.toBeUndefined();
		expect(singleUser.rate).toEqual(105);
	});


});

/*spyOn($, 'ajax').andCallFake(function (ajaxOptions) {
			ajaxOptions.success({"test": "mgr"});
		}); */


		