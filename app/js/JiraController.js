

var worklogs = TAFFY();

function doIt(data){
	taffyInsert(loadJiraLogs(data));
	console.log(worklogs().count());
}

function loadJiraLogs(data){
	var logs = [];

	data.issues.forEach(function(issue){
		log = {};
		log.project  = issue.key.split("-")[0];
		log.issuekey = issue.key;
		issue.fields.worklog.worklogs.forEach(function(worklog){
			log.id        = worklog.id;
			log.employee  = worklog.author.name;
			log.timeSpentSeconds = worklog.timeSpentSeconds;
			log.hours = (log.timeSpentSeconds / 3600).toFixed(2);
			log.rate = 0;
			log.cost = log.rate * log.hours;
			log.started = new Date(worklog.started);
			log.updated = worklog.updated;
			//if ((log.started < startedEnd) && (log.started >= startedStart))
				logs.push(log);
		});
	});
	//console.log(logs);
	return logs;
}

function taffyInsert(data){
	worklogs.insert(data);
}

function getLoggedWork() {
	var logs=[];
	worklogs().distinct("project").forEach(function(x){
		var query = worklogs({project:x}).order("employee");
		logs.push({project:x,
					worklogs : query.get(),
					cost: query.sum("cost"),
					hours: (query.sum("timeSpentSeconds")/3600).toFixed(2)
				});
		});
	return logs;
}

function getProjectlogs(){
	getAll();

	var logs = getLoggedWork();
	var cost = 0;
	logs.forEach(function(log){
		cost = 0;
		log.worklogs.forEach(function(wl){
			loadUser(wl.employee);
			cost += (singleUser.rate * wl.hours);
		});
		log.cost = cost;
	});
	return logs;
}

function getUserProjectTime(){
	var timeLogged = [];
	worklogs().distinct("employee").forEach(function(x){
		var hours = (worklogs({employee:x}).sum("timeSpentSeconds")/3600).toFixed(2);
		timeLogged.push({name: x, hours:hours});
		});
	return timeLogged;
}

function getLoggedTime(){
	var timeLogged = [];
	worklogs().distinct("employee").forEach(function(x){
		var hours = (worklogs({employee:x}).sum("timeSpentSeconds")/3600).toFixed(2);
		var tickets = worklogs({employee:x}).distinct("issuekey");
		var link = "https://energyplus.atlassian.net/issues/?jql=key%20in%20(" + tickets.join('%2C') + ")";
		timeLogged.push({name: x, hours:hours, link:link});
		});
	return timeLogged;
}

function workLogCtrl($scope) {
	$scope.logs = getProjectlogs();
	$scope.timeLogged = getLoggedTime();
}
