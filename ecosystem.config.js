module.exports = {
    apps : [
      {
      name        : "app1",
      script      : "./dist/server.js",
      watch       : true,
      env: {
        PORT: 8881
      }
    }, 
    {
      name        : "app2",
      script      : "./dist/server.js",
      watch       : true,
      env: {
        PORT: 8882
      }
    },
    ]
  }