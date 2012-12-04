describe("Jira Controller" , function() {

	var mockedALP = {"expand":"schema,names","startAt":0,"maxResults":1000,"total":3,"issues":[{"expand":"editmeta,renderedFields,transitions,changelog,operations","id":"17700","self":"https://energyplus.atlassian.net/rest/api/2/issue/17700","key":"PROFIT-492","fields":{"worklog":{"startAt":0,"maxResults":1,"total":1,"worklogs":[{"self":"https://energyplus.atlassian.net/rest/api/2/issue/17700/worklog/13557","author":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=zsong","name":"zsong","emailAddress":"zsong@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=zsong&avatarId=10522","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=zsong&avatarId=10522"},"displayName":"Ziang Song","active":true},"updateAuthor":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=zsong","name":"zsong","emailAddress":"zsong@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=zsong&avatarId=10522","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=zsong&avatarId=10522"},"displayName":"Ziang Song","active":true},"comment":"","created":"2012-10-01T17:34:35.080-0400","updated":"2012-10-01T17:34:35.080-0400","started":"2012-10-01T17:34:00.000-0400","timeSpent":"1h 30m","timeSpentSeconds":5400,"id":"13557"}]}}},{"expand":"editmeta,renderedFields,transitions,changelog,operations","id":"17685","self":"https://energyplus.atlassian.net/rest/api/2/issue/17685","key":"PROFIT-491","fields":{"worklog":{"startAt":0,"maxResults":1,"total":1,"worklogs":[{"self":"https://energyplus.atlassian.net/rest/api/2/issue/17685/worklog/13574","author":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=zsong","name":"zsong","emailAddress":"zsong@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=zsong&avatarId=10522","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=zsong&avatarId=10522"},"displayName":"Ziang Song","active":true},"updateAuthor":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=zsong","name":"zsong","emailAddress":"zsong@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=zsong&avatarId=10522","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=zsong&avatarId=10522"},"displayName":"Ziang Song","active":true},"comment":"","created":"2012-10-02T17:30:23.492-0400","updated":"2012-10-02T17:30:23.492-0400","started":"2012-10-02T17:30:00.000-0400","timeSpent":"3h","timeSpentSeconds":10800,"id":"13574"}]}}},{"expand":"editmeta,renderedFields,transitions,changelog,operations","id":"14463","self":"https://energyplus.atlassian.net/rest/api/2/issue/14463","key":"PROFIT-80","fields":{"worklog":{"startAt":0,"maxResults":1,"total":1,"worklogs":[{"self":"https://energyplus.atlassian.net/rest/api/2/issue/14463/worklog/12618","author":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=ibeiu","name":"ibeiu","emailAddress":"ibeiu@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=ibeiu&avatarId=12120","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=ibeiu&avatarId=12120"},"displayName":"Igor Beiu","active":true},"updateAuthor":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=ibeiu","name":"ibeiu","emailAddress":"ibeiu@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=ibeiu&avatarId=12120","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=ibeiu&avatarId=12120"},"displayName":"Igor Beiu","active":true},"comment":"","created":"2012-07-23T16:13:04.241-0400","updated":"2012-07-23T16:13:04.241-0400","started":"2012-07-23T16:12:00.000-0400","timeSpent":"1d 7h","timeSpentSeconds":54000,"id":"12618"}]}}}]};
	
	it("ALP project (PROFIT-489) hours sums to 19.50h", function() {
		loadTaffyWithMockData(mockedALP);
		var logs = getLoggedWork();
		expect(logs.length).toBe(1);
		expect(logs[0].hours).toBe("19.50");
	});

	it("ALP project (PROFIT-489) has three worklogs", function() {
		//loadTaffyWithMockData(mockedALP);
		var logs = getLoggedWork();
		var workLogs = 0;
		logs.forEach(function(log){
			workLogs = log.worklogs.length;
		});
		expect(workLogs).toBe(3);
	});

	it("ALP project (PROFIT-489) has two distinct users", function() {
		//loadTaffyWithMockData(mockedALP);
		var logs = getLoggedWork();
		// with the log of the of item, get the worklogs and asset there are TWO distinct users
		var workLogs = [];
		logs.forEach(function(log){
			log.worklogs.forEach(function(wl){
				workLogs.push(wl);
			});
		});

		var distinctUsers = [];
		workLogs.forEach(function(log) {
			distinctUsers.push(log.employee);
		});
		expect(distinctUsers.getUnique().length).toBe(2);
	});

	it("ALP project (PROFIT-489) sums rates for cost", function() {
		//loadTaffyWithMockData(mockedALP);
		var logs = getProjectlogs();
		expect(logs[0].cost).toBe(1462.5);
	});

	it("ALP project (PROFIT-489) can pull logged time and sum time to 19.50 - alternate using getLoggedTime() ", function(){
		//loadTaffyWithMockData(mockJiraResponse);
		var time = 0;
		getLoggedTime().forEach(function(t){
			time += parseFloat(t.hours, 10);
		});
		expect(time).toBe(19.50);
	});

});
