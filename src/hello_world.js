(params) => {
  var found = stash.get(params.github_username);
  if (!found) {

  // sigh this stupidly returns an array of arrays
  var users = api.runForAllUsers("this.MapUser");
  
  users.map((u) => u[0]).forEach((user) => {
    stash.put(user.github_username, user);
  
    if (user.github_username === params.github_username) {
      found = user;
    }
  });

  }
  
  if (found) {
    api.run(user_setting.get("also_success"), {}, {asUser: "blah"})
          also_success: user_setting.get("also_success")
  }
  return found;
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */