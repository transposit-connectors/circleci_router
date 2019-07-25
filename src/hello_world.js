(params) => {
  // Stash is a map between github username user object
  console.log("find user??");
  var found = stash.get(params.github_username);
  if (!found) {

  // sigh this stupidly returns an array of arrays
  var users = api.runForAllUsers("this.MapUser");
  api.log("users");
  api.log(users);
  
  users.map((u) => u[0]).forEach((user) => {
    stash.put(user.github_username, user);
    
    api.log(stash.get(user.github_username));
  
    if (user.github_username === params.github_username) {
      found = user;
    }
  });
  }
  
  if (found) {
    var also_success = api.run("this.get_also_success", {}, {asUser: found.id})[0];
    return {also_success: also_success,
           slack_userame: found.slack.userId}
  }
  
  return null;
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */