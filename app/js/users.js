
function User (name) {
	var rate = 0.0;
	var position;

	this.getRate = function () {
		if(position === undefined){
			console.log('getting user position to then find rate');
			this.getPosition();
		}

		$.ajax({
			url: '../app/data/rates.json',
			async: false,
			dataType: 'json',
			success: function(data) {
				//console.log(data);
				console.log(name);
				console.log(position);
				console.log(data[position]);
				rate = data[position];
			}
		});
		return rate;
	};

	this.getPosition = function () {
		$.ajax({
			url: '../app/data/jira_users.json',
			async: false,
			dataType: 'json',
			success: function(data) {
				position = data[name];
			}
		});
		return position;
	};

	//set name prop for use later I guess.
	this.name = name;
}

// Public
User.prototype.getName = function () {
	return this.name;
};