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
    {
      name        : "app3",
      script      : "./dist/server.js",
      watch       : true,
      env: {
        PORT: 8883
      }
    },
    {
      name        : "app4",
      script      : "./dist/server.js",
      watch       : true,
      env: {
        PORT: 8884
      }
    },
    {
      name        : "app5",
      script      : "./dist/server.js",
      watch       : true,
      env: {
        PORT: 8885
      }
    },
    ]
  }