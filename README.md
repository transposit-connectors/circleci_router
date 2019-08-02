# CircleCI Router

This app will replace the GitHub username in the build status message sent by CircleCI with the user's Slack id, which will @mention them in the channel.

To use it, fork this app and make the following modifications to your copy: 

1) In **Code**, there will be an operation named `webhook`. This operation has a parameter named `channel`. Set the default value of this parameter to the channel id of your Slack build notifications channel (click on the parameter name to set the default value). This will instruct the operation to route all messages to this channel. To get your channel id, go to your Slack team's URL in a web browser (yourteamname.slack.com), click on the desired channel, and the id will be the last part of that URL. Commit your change. 

2) Navigate to **Deploy > Endpoints** and copy the webhook url (the URL following the "Point the caller to" text). 

3) Go to your Chatroom Integrations page in CircleCI. Replace the Slack-given Webhook URL with the one you just copied and Save.

4) Navigate to **Deploy > Production Keys** and add your Slack credential. We'll use this credential to send the Slack message from the Transposit Slack app.

5) Have your teammates login to your application and provide their Github credentials. You can find the settings link under **Users > User Configuration**. Also, provide your own credentials via this link!

6) If you'd like, you can restrict sign-in to only members of your Slack workspace in **User Configuration**. Your workspace id is the second to last part of the URL found in Slack's web browser.

That's it! Make modifications to the app as you'd like. Happy routing!






