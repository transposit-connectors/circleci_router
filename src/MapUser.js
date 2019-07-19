(params) => {
  
  var github = user_setting.get("github_username");
  if (!github) {
    if (api.isAuthed("github")) {
      github = api.run("github.get_user_authenticated")[0].login;
    user_setting.put("github_username", github);
    }
  }
  
  api.log(api.user());
  
  var slack = user_setting.get("slack_username");
  if (!slack) {
    if (api.isAuthed("slack_identify")) {
    var slack = api.run("slack_identify.get_users_identity")[0].user.id;
    user_setting.put("slack_username", slack);  
    }
  }
  
  return {github_username: github,
         slack_username: slack,
         also_success: user_setting.get("also_success")};
}

/*
 * For sample code and reference material, visit
 * https://docs.transposit.com/references/js-operations
 */