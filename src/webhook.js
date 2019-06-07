({ http_event }) => {
  api.log(http_event);
  
  var parsedBody = JSON.parse(http_event.body);
  api.log(parsedBody);
  
  var body = parsedBody;
  body.channel = "C2EBUS678";
  api.run("slack.post_chat_message", {$body: body});
  
  
   
  return {
    status_code: 200,
    headers: { "Content-Type": "application/json" },
    body: { "greeting": "Hello World" }
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/building/webhooks
 */