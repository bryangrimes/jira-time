
function getRate(emp){
	$.getJSON("../app/data/users.json", function(json) {
		console.log(emp);
		return json[emp];
	});
}

var worklogs = TAFFY();
var data;
function loadData(items){
	data = items;
	load(items);
}

var startedStart = new Date("2012-10-29".split("-"));
var startedEnd = new Date("2012-11-09".split("-"));
//bump startedEnd by a day for comparison later
startedEnd = new Date(startedEnd.getTime() + (3600 * 24 * 1000));

function load(data){
	data.issues.forEach(function(issue){
		log = {};
		log.project  = issue.key.split("-")[0];
		log.issuekey = issue.key;
//		console.log(issue.fields.worklog.total);
//		count +=  issue.fields.worklog.total;
		issue.fields.worklog.worklogs.forEach(function(worklog){
			//console.log(worklog);
			log.id        = worklog.id;
			log.employee  = worklog.author.name;
			log.timeSpentSeconds = worklog.timeSpentSeconds;
			log.hours = (log.timeSpentSeconds / 3600).toFixed(2);
			log.rate = getRate(log.employee);
			log.cost = log.rate * log.hours;
			log.started = new Date(worklog.started);
			log.updated = worklog.updated;
			if ((log.started < startedEnd) && (log.started >= startedStart))  worklogs.insert(log);
		});
	});
	//console.log("Count: " + count)
}

function workLogCtrl($scope) {
	var projects = worklogs().distinct("project");
	var logs=[];
	projects.forEach(function(x){
		var query = worklogs({project:x}).order("employee");
		logs.push({project:x,
					worklogs : query.get(),
					cost: query.sum("cost"),
					hours: (query.sum("timeSpentSeconds")/3600).toFixed(2)
				});
		});
	$scope.logs = logs;

	var employees = worklogs().distinct("employee");
	var timeLogged = [];
	employees.forEach(function(x){
		var hours = (worklogs({employee:x}).sum("timeSpentSeconds")/3600).toFixed(2);
		var tickets = worklogs({employee:x}).distinct("issuekey");
		var link = "https://energyplus.atlassian.net/issues/?jql=key%20in%20(" + tickets.join('%2C') + ")";
		timeLogged.push({name: x, hours:hours, link:link});
		});
	$scope.timeLogged = timeLogged;
}