module.exports = {
    apps : [
      {
      name        : "app1",
      script      : "./dist/server.js",
      watch       : true,
      instances  : 4,
      exec_mode  : "cluster",
      env: {
        PORT: 8881
      }
    },
    {
      name        : "app2",
      script      : "./dist/server.js",
      watch       : true,
      instances  : 1,
      exec_mode  : "cluster",
      env: {
        PORT: 8882
      }
    },
    {
      name        : "app3",
      script      : "./test-app.js",
      watch       : true,
      instances  : 1,
      exec_mode  : "cluster",
      env: {
        PORT: 8883
      }
    }
    ]
  }