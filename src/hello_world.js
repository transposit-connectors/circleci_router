(params) => {
  // Stash is a map between github username and user object
  var found = stash.get(params.github_username);
  if (!found) {

  // This returns an array of arrays
  var users = api.runForAllUsers("this.MapUser");
  
  users.map((u) => u[0]).forEach((user) => {
    if (user.github_username) {
      stash.put(user.github_username, user.user);
    }
  
    if (user.github_username === params.github_username) {
      found = user.user;
    }
  });
  }
  
  if (found) {
    var also_success = api.run("this.get_also_success", {}, {asUser: found.id})[0];
    return {also_success: also_success,
           slack_username: found.slack.userId}
  }
  
  return null;
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */