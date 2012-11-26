// GRIMES:
// using straight ajax call here and not getJSON as
// Jasimine strokes out with async calls.

function Users(){

	var allUsers;

	this.getUsers = function (dataReturn) {
		console.log('>>getUsers');
		$.ajax({
			url: '../app/data/jira_users.json',
			async: false,
			dataType: 'json',
			success: function(data) {
				dataReturn(data);
			}
		});
	};

	this.SingleUser = function (name, dataReturn) {
		//var rate = 0.0;
		//var position;

		this.getRate = function () {
			if(position === undefined){
				console.log('>>info: getting user position to then find rate');
				this.getPosition();
			}

			$.ajax({
				url: '../app/data/rates.json',
				async: false,
				dataType: 'json',
				success: function(data) {
					//rate = data[position];
					dataReturn(data[position]);
				}
			});
			//return rate;
		};

		this.getPosition = function () {
			var user_data = null;
			this.getUsers(function(data){
				user_data = data;
			});
			position = user_data[name];
			return position;
		};

		//set name prop for use later I guess.
		this.name = name;
	};
}

