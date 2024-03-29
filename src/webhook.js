(params) => {
  var http_event = params.http_event;
  var parsedBody = JSON.parse(http_event.body);

  var body = parsedBody;
  body.channel = params.channel;

  setImmediate(() => {
    try {
      var textArr = body.attachments[0].text.split(" ");
      var name = textArr[1];
      var githubUsername = name.substring(0, name.length - 2);
      var userSettings = api.run("this.FindUser", {
        github_username: githubUsername,
      })[0];

      var isSuccess = textArr[0] === "Success:";

      if (!isSuccess || userSettings.also_success) {
        textArr[1] = `<@${userSettings.slack_username}>'s`;
      }

      body.attachments[0].text = textArr.join(" ");
      api.run("slack.post_chat_message", { $body: body });
    } catch (err) {
      // Send the original message if something happened
      api.run("slack.post_chat_message", { $body: body });
    }
  });

  return {
    status_code: 200,
    headers: { "Content-Type": "application/json" },
    body: { greeting: "Hello World" },
  };
};

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/building/webhooks
 */
