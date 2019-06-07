({ http_event }) => {
  api.log(http_event);
  // parse github id
  // map github id to slack id
  
  // 
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