# CircleCI Router

This app will replace the GitHub username in the build status message sent by CircleCI with the user's Slack id, which will @mention them in the channel.

To use it: 
1) Fork this app. 
2) Navigate to *Deploy -> Production Keys* (in your copy of the app) and add your Slack credential.
3) In *Code*, there will be an operation named `webhook`. This operation has a parameter named `channel`. Set the default value of this parameter to the Channel id of your build channel (this will instruct the operation to route all build messages into this channel). To get your Channel id, go to your Slack team's URL in a webb browser (yourteamname.slack.com), click on the channel, and the id will be the last part of that URL.
4) Navigate to Deploy and copy the webhook url provided. 


## How it's built:

A scheduled task runs every day in the morning to check each signed-in user's calendar for the day. This is done in the `OnVacationToday` operation, which uses a combination of JavaScript to get the formatted times and SQL to execute the Google Calendar call. If there's an event that has the words "PTO", "DTO", or "Vacation" in it, we'll assume the user's on vacation and change their slack status. If there's no such event, we'll clear the user's slack status.






