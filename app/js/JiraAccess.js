
this.jiraURI = 'https://energyplus.atlassian.net/rest/api/2/search';
//?jql=updated%20%3E=%20'+Date.today().add(-7).days().toString("yyyy-M-d")+'%20AND%20updated%20%3C=%20'+Date.today().add(7).days().toString("yyyy-M-d")+'AND%20timespent%3E0&maxResults=1000&fields=worklog&jsonp-callback=loadJiraLogs';

var startedStart;
var startedEnd;

function queryJira (dataReturn) {

	var jql =  '?jql=updated%20%3E=%20'+Date.today().add(-7).days().toString("yyyy-M-d")+'%20';
		jql += 'AND%20updated%20%3C=%20'+Date.today().add(7).days().toString("yyyy-M-d")+'%20';
		jql += 'AND%20timespent%3E0&maxResults=1000&fields=worklog&jsonp-callback=loadJiraLogs';

		console.log(jiraURI+jql);

	$.ajax({
		url: jiraURI,
		async: false,
		dataType: 'jsonp',
		crossDomain: true,
		success: function(data) {
			dataReturn(data);
		}
	});
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


				//worklogs.insert(log);
		});
	});
	return logs;
}

