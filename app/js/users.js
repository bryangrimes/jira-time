// GRIMES:
// using straight ajax call here and not getJSON as
// Jasimine strokes out with async calls.

function Users(){
	this.getUsers = function (dataReturn) {
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
			$.ajax({
				url: '../app/data/rates.json',
				async: false,
				dataType: 'json',
				success: function(data) {
					dataReturn(data);
				}
			});
		};

		this.userName = name;
	};
}