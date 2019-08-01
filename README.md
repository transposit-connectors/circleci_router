# CircleCI Router

This app will replace the GitHub username in the build status message sent by CircleCI with the user's Slack id, which will @mention them in the channel.

To use it: 

1) Fork this app. 

2) Navigate to *Deploy -> Production Keys* (in your copy of the app) and add your Slack credential.

3) In *Code*, there will be an operation named `webhook`. This operation has a parameter named `channel`. Set the default value of this parameter to the Channel id of your build channel (this will instruct the operation to route all build messages into this channel). To get your Channel id, go to your Slack team's URL in a webb browser (yourteamname.slack.com), click on the channel, and the id will be the last part of that URL.

4) Navigate to Deploy and copy the webhook url (the URL following the "Point the caller to" text). 

5) Go to your Chatroom Integrations page in CircleCI. Replace the Slack-given Webhook URL with the one you just copied and Save.

6) Have your teammates login to your application and provide their Github credentials.







