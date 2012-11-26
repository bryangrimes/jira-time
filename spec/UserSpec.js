



describe("User Stuff" , function() {
	it("can get all users", function(){
		var users = new Users();
		expect(users.getUsers).not.toBeUndefined();
	});

	it("create user object with name", function(){
		var users = new Users();
		var someone = new users.SingleUser('bgrimes');
		expect(someone.name).toEqual('bgrimes');
	});

	it("get single user's position", function(){
		var users = new Users();
		spyOn($, 'ajax').andCallFake(function (ajaxOptions) {
			ajaxOptions.success({"bgrimes": "mgr"});
		});
		//users.getUsers(data);
		var all = null;

		users.getUsers(function (data) {
			all = data;
		});

		//var someone = new users.SingleUser('bgrimes');
		//var position = someone.getPosition();
		//expect(position).not.toBeUndefined();
		//expect(position).toEqual('mgr');
	});

	/*it("get single user's rate", function(){
		var users = new Users();
		var someone = new users.SingleUser('bgrimes');
		var rate = someone.getRate();
		expect(rate).not.toBeUndefined();
		expect(rate).toEqual(105);
	});*/
});