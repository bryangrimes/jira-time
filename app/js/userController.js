

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
	console.log(singleUser);
}

function userRate () {
	singleUser.getRate(function (data){
		singleUser.rate = (data[userData[singleUser.userName]]);
	});
}


/*

var AllUsers = new Users(), singleUser;

var loadUser = function (username) {
	singleUser = new AllUsers.SingleUser(username);
	singleUser.getRate(userRate);
	//console.log(singleUser);
};

var userRate = function () {
	singleUser.getRate(function (data){
		singleUser.rate = (data[allUsers[singleUser.userName]]);
	});
};

var getAll = function () {
	AllUsers.getUsers(function (data) {
		allUsers = data;
	});

};

getAll();
loadUser('jdennis');
*/