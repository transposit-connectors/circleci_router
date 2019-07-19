(params) => {
  var maybeUser = stash.get(params.github_username);
  if (maybeUser) {
    return maybeUser;
  }
  
  // sigh this stupidly returns an array of arrays
  var users = api.runForAllUsers("this.MapUser");
  var found;
  
  users.map((u) => u[0]).forEach((user) => {
    stash.put(user.github_username, user);
  
    if (user.github_username === params.github_username) {
      found = user;
    }
  });

  return found;
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */