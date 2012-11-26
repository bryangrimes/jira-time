



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

	it("get single user's position", function(){
		var all = null;

		/*var users = new Users();
		spyOn($, 'ajax').andCallFake(function (ajaxOptions) {
			ajaxOptions.success({"bgrimes": "mgr"});
		});
		//users.getUsers(data);
		

		users.getUsers(function (data) {
			all = data;
		}); */

		//var someone = new users.SingleUser('bgrimes');
		//var position = someone.getPosition();

		var users = new Users(), singleUser;

		var loadUser = function (username) {
			//going to load up the user 'bgrimes'
			singleUser = new users.SingleUser(username);
			//singleUser.getPosition(userPosition);
			singleUser.getRate(userRate);

			console.log(singleUser);

		};
		
		/*var userPosition = function () {
			//singleUser.getPosition(function (data){
			//	console.log(data);
			//});
			//console.log('hi');
			//console.log(all['bgrimes']);

			//singleUser.position = all['bgrimes'];

		};*/

		var userRate = function () {
			singleUser.getRate(function (data){
				console.log(all);
				singleUser.rate = (data[all[singleUser.userName]]);
				console.log(singleUser.rate);
			});
		};

		var getAll = function () {
			users.getUsers(function (data) {
				all = data;
			});

		};

		getAll();
		loadUser('bgrimes');

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