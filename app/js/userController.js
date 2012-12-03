

var userData;
var AllUsers = new Users(), singleUser;

function getAll () {
	AllUsers.getUsers(function (data) {
		userData = data;
	});
}

function loadUser (username) {
	singleUser = new AllUsers.SingleUser(username);
	singleUser.getRate(userRate);
}

function userRate () {
	singleUser.getRate(function (data){
		singleUser.rate = (data[userData[singleUser.userName]]);
	});
}