
this.jiraURI = 'https://energyplus.atlassian.net/rest/api/2/search';

var startedStart;
var startedEnd;

function queryJira (dataReturn) {

	var jql =  '?jql=updated%20%3E=%20'+Date.today().add(-7).days().toString("yyyy-M-d")+'%20';
		jql += 'AND%20updated%20%3C=%20'+Date.today().add(7).days().toString("yyyy-M-d")+'%20';
		jql += 'AND%20timespent%3E0&maxResults=1000&fields=worklog&jsonp-callback=loadJiraLogs';

	//console.log("{0}{1}".format(jiraURI, jql));

	$.ajax({
		url: "{0}{1}".format(jiraURI, jql),
		async: false,
		dataType: 'jsonp',
		crossDomain: true,
		success: function(data) {
			dataReturn(data);
		}
	});
}