
describe("User Access" , function() {
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
});

describe("User Controller" , function() {
	it("get app user's rate", function(){
		getAll();
		loadUser('ibeiu');
		expect(singleUser).not.toBeUndefined();
		expect(singleUser.rate).toEqual(75);
	});

	it("get pm user's rate", function(){
		getAll();
		loadUser('ctanker');
		expect(singleUser).not.toBeUndefined();
		expect(singleUser.rate).toEqual(60);
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