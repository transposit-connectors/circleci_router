(params) => {
  
  var github = user_setting.get("github_username");
  if (!github) {
    if (api.isAuthed("github")) {
      github = api.run("github.get_user_authenticated")[0].login;
    user_setting.put("github_username", github);
    }
  }
  
  return {github_username: github,
         slack_username: api.user().slack.userId,
         also_success: user_setting.get("also_success")};
}

/*
 * For sample code and reference material, visit
 * https://docs.transposit.com/references/js-operations
 */