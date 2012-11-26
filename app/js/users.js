// GRIMES:
// using straight ajax call here and not getJSON as
// Jasimine strokes out with async calls.

function Users(){
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

	this.SingleUser = function (name) {
		rate = 0.0;

		this.getRate = function (dataReturn) {
			//if(position === undefined){
			//	console.log('>>info: getting user position to then find rate');
			//	this.getPosition();
			//}

			$.ajax({
				url: '../app/data/rates.json',
				async: false,
				dataType: 'json',
				success: function(data) {
					//rate = data[position];
					dataReturn(data);
				}
			});
		};

		/*this.getPosition = function (position, dataReturn) {
			//var user_data = null;
			console.log(name);
			//console.log(allUsers);
			//console.log(allUsers[name]);
			this.position = position;
		};*/

		this.userName = name;
	};
}

