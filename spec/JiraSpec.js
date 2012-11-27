
describe("Jira Access" , function() {
	it("test mockdata", function(){

		spyOn($, 'ajax').andCallFake(function (ajaxOptions) {
			ajaxOptions.success(mockJiraResponse);
		});

		issues = null;
		queryJira(function (data) {
			issues = data;
			expect(data).not.toBeUndefined();
		});

		expect(issues).not.toBeNull();
	});

	it("can select from Jira with date span", function(){
		queryJira(function (data) {
			expect(data).not.toBeUndefined();
			expect(data).not.toBeNull();
		});
	});

	it("can return log object", function() {
		// mock up the data from jira
		spyOn($, 'ajax').andCallFake(function (ajaxOptions) {
			ajaxOptions.success(mockJiraResponse);
		});

		var logs = null;
		queryJira(function (data) {
			logs = loadJiraLogs(data);
		});

		console.log(logs);
		expect(logs).not.toBeUndefined();
		expect(logs).toHaveLength(7);
	});
});

var mockJiraResponse = {"expand":"schema,names","startAt":0,"maxResults":5,"total":67,"issues":[{"expand":"editmeta,renderedFields,transitions,changelog,operations","id":"18810","self":"https://energyplus.atlassian.net/rest/api/2/issue/18810","key":"WNBCK-550","fields":{"worklog":{"startAt":0,"maxResults":1,"total":1,"worklogs":[{"self":"https://energyplus.atlassian.net/rest/api/2/issue/18810/worklog/14436","author":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=qly","name":"qly","emailAddress":"qly@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=qly&avatarId=11024","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=qly&avatarId=11024"},"displayName":"Quang Ly","active":true},"updateAuthor":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=qly","name":"qly","emailAddress":"qly@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=qly&avatarId=11024","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=qly&avatarId=11024"},"displayName":"Quang Ly","active":true},"comment":"checked into Enrollment0075. ","created":"2012-11-23T12:52:58.667-0500","updated":"2012-11-23T12:52:58.667-0500","started":"2012-11-23T12:51:00.000-0500","timeSpent":"1h","timeSpentSeconds":3600,"id":"14436"}]}}},{"expand":"editmeta,renderedFields,transitions,changelog,operations","id":"18562","self":"https://energyplus.atlassian.net/rest/api/2/issue/18562","key":"WNBCK-527","fields":{"worklog":{"startAt":0,"maxResults":1,"total":1,"worklogs":[{"self":"https://energyplus.atlassian.net/rest/api/2/issue/18562/worklog/14350","author":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=qly","name":"qly","emailAddress":"qly@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=qly&avatarId=11024","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=qly&avatarId=11024"},"displayName":"Quang Ly","active":true},"updateAuthor":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=qly","name":"qly","emailAddress":"qly@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=qly&avatarId=11024","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=qly&avatarId=11024"},"displayName":"Quang Ly","active":true},"comment":"","created":"2012-11-15T17:24:27.785-0500","updated":"2012-11-15T17:24:27.785-0500","started":"2012-11-15T17:24:00.000-0500","timeSpent":"4h","timeSpentSeconds":14400,"id":"14350"}]}}},{"expand":"editmeta,renderedFields,transitions,changelog,operations","id":"18168","self":"https://energyplus.atlassian.net/rest/api/2/issue/18168","key":"WNBCK-502","fields":{"worklog":{"startAt":0,"maxResults":2,"total":2,"worklogs":[{"self":"https://energyplus.atlassian.net/rest/api/2/issue/18168/worklog/14119","author":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=qly","name":"qly","emailAddress":"qly@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=qly&avatarId=11024","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=qly&avatarId=11024"},"displayName":"Quang Ly","active":true},"updateAuthor":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=qly","name":"qly","emailAddress":"qly@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=qly&avatarId=11024","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=qly&avatarId=11024"},"displayName":"Quang Ly","active":true},"comment":"","created":"2012-11-06T10:15:33.218-0500","updated":"2012-11-06T10:15:33.218-0500","started":"2012-11-06T10:15:00.000-0500","timeSpent":"2h","timeSpentSeconds":7200,"id":"14119"},{"self":"https://energyplus.atlassian.net/rest/api/2/issue/18168/worklog/14423","author":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=qly","name":"qly","emailAddress":"qly@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=qly&avatarId=11024","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=qly&avatarId=11024"},"displayName":"Quang Ly","active":true},"updateAuthor":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=qly","name":"qly","emailAddress":"qly@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=qly&avatarId=11024","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=qly&avatarId=11024"},"displayName":"Quang Ly","active":true},"comment":"","created":"2012-11-20T12:30:48.498-0500","updated":"2012-11-20T12:30:48.498-0500","started":"2012-11-20T12:30:00.000-0500","timeSpent":"6h","timeSpentSeconds":21600,"id":"14423"}]}}},{"expand":"editmeta,renderedFields,transitions,changelog,operations","id":"18045","self":"https://energyplus.atlassian.net/rest/api/2/issue/18045","key":"VIRGIN-12","fields":{"worklog":{"startAt":0,"maxResults":1,"total":1,"worklogs":[{"self":"https://energyplus.atlassian.net/rest/api/2/issue/18045/worklog/14505","author":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=dgelling","name":"dgelling","emailAddress":"dgelling@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&avatarId=10142","48x48":"https://energyplus.atlassian.net/secure/useravatar?avatarId=10142"},"displayName":"Doug Gelling","active":true},"updateAuthor":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=dgelling","name":"dgelling","emailAddress":"dgelling@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&avatarId=10142","48x48":"https://energyplus.atlassian.net/secure/useravatar?avatarId=10142"},"displayName":"Doug Gelling","active":true},"comment":"","created":"2012-11-26T12:40:46.493-0500","updated":"2012-11-26T12:40:46.493-0500","started":"2012-11-26T12:40:00.000-0500","timeSpent":"1h","timeSpentSeconds":3600,"id":"14505"}]}}},{"expand":"editmeta,renderedFields,transitions,changelog,operations","id":"18355","self":"https://energyplus.atlassian.net/rest/api/2/issue/18355","key":"PRICE-235","fields":{"worklog":{"startAt":0,"maxResults":2,"total":2,"worklogs":[{"self":"https://energyplus.atlassian.net/rest/api/2/issue/18355/worklog/13988","author":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=pmolnar","name":"pmolnar","emailAddress":"pmolnar@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=pmolnar&avatarId=12020","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=pmolnar&avatarId=12020"},"displayName":"Pete Molnar","active":true},"updateAuthor":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=pmolnar","name":"pmolnar","emailAddress":"pmolnar@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=pmolnar&avatarId=12020","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=pmolnar&avatarId=12020"},"displayName":"Pete Molnar","active":true},"comment":"Set up config files, Job, Restore from production scripts to kick this off when given the go","created":"2012-10-31T14:03:32.412-0400","updated":"2012-10-31T14:03:32.412-0400","started":"2012-10-31T14:02:00.000-0400","timeSpent":"1h","timeSpentSeconds":3600,"id":"13988"},{"self":"https://energyplus.atlassian.net/rest/api/2/issue/18355/worklog/14108","author":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=pmolnar","name":"pmolnar","emailAddress":"pmolnar@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=pmolnar&avatarId=12020","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=pmolnar&avatarId=12020"},"displayName":"Pete Molnar","active":true},"updateAuthor":{"self":"https://energyplus.atlassian.net/rest/api/2/user?username=pmolnar","name":"pmolnar","emailAddress":"pmolnar@energypluscompany.com","avatarUrls":{"16x16":"https://energyplus.atlassian.net/secure/useravatar?size=small&ownerId=pmolnar&avatarId=12020","48x48":"https://energyplus.atlassian.net/secure/useravatar?ownerId=pmolnar&avatarId=12020"},"displayName":"Pete Molnar","active":true},"comment":"The ST0069 databases have been created on EPDBDEV03 from a production snapshot as of  11/05/2012","created":"2012-11-05T14:14:00.593-0500","updated":"2012-11-05T14:14:00.593-0500","started":"2012-11-05T14:12:00.000-0500","timeSpent":"1h","timeSpentSeconds":3600,"id":"14108"}]}}}]};
