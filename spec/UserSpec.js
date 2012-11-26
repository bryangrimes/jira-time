
describe("User Stuff" , function() {
	it("can get all users", function(){
		getAll();
		expect(userData).not.toBeUndefined();
	});

	it("get single user", function(){
		getAll();
		loadUser('bgrimes');
		expect(singleUser).not.toBeUndefined();
		expect(singleUser.userName).toEqual('bgrimes');
	});

	it("get manager user's rate", function(){
		getAll();
		loadUser('bgrimes');
		expect(singleUser).not.toBeUndefined();
		expect(singleUser.rate).toEqual(105);
	});

	it("get dev user's rate", function(){
		getAll();
		loadUser('jdennis');
		expect(singleUser).not.toBeUndefined();
		expect(singleUser.rate).toEqual(75);
	});

	it("get qa user's rate", function(){
		getAll();
		loadUser('plahm');
		expect(singleUser).not.toBeUndefined();
		expect(singleUser.rate).toEqual(55);
	});

	it("get db user's rate", function(){
		getAll();
		loadUser('dgelling');
		expect(singleUser).not.toBeUndefined();
		expect(singleUser.rate).toEqual(75);
	});

});	