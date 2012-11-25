

describe("getUser" , function() {
	it("create user object with name", function(){
		var someone = new User('bgrimes');
		expect(someone.name).toEqual('bgrimes');
	});

	it("get single user's position", function(){
		var someone = new User('bgrimes');
		var position = someone.getPosition();
		expect(position).not.toBeUndefined();
		expect(position).toEqual('mgr');
	});

	it("get single user's rate", function(){
		var someone = new User('bgrimes');
		var rate = someone.getRate();
		expect(rate).not.toBeUndefined();
		expect(rate).toEqual(75);
	});
});
/*
describe("getDeptRate" , function() {
	it("should get single category rate", function(){
		//var users = mockUsers();
		//var user = "testmgr";

		var pos = getUser('bgrimes');
		var rate = getDeptRate(pos);

		expect(rate).not.toBeUndefined();
		//expect(rate).toEqual(1);
		//console.log(rate);

	});
});
*/

function mockUsers(){
	return {"testapp": "app",
			"testmgr": "mgr",
			"testqa": "qa",
			"testweb": "web",
			"testdir": "dir"};
}