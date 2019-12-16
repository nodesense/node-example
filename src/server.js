import 'dotenv/config';

import http from 'http';
console.log('Hello Node.js project.');
console.log(process.env.MY_SECRET);
import './app/config/db';

import app from './app';

const IP_ADDRESS = process.env.IP_ADDRESS || '0.0.0.0';
const PORT = process.env.PORT || 7777;

var server = http.createServer(app)

if (process.env.NODE_ENV !== "test"){

    server.listen(PORT, IP_ADDRESS, function(err){
        if (err)
            console.error("Could not listen ", err);
            return;
        });

    console.log(`Server running on ${IP_ADDRESS}:${PORT}` );
}
