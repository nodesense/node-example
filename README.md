
Order Service
    // TODO 1: fetch all the orders from a city on given day
        input: Restarant ids, date / POST method
        {
            restarants: ['12321312', '31231232', '42342343'],
            date: '2019-12-13'
        }

        output: order collections

     // TODO 2: total amount of orders received from a city  on given day
        input: Restarant ids, date
        output: {amount: 1000000, date: '2019-12-13'}

Restarant/Search Service
    // TODO: get Restarant by Location /city -- ALREADY EXIST

        input: city
        output: list of Restarants [{ _id: , name: ... }, {}, {}]


Aggregator Gateway Service : express
 
    1. GET /get-all-orders-  [city, date]
            call serach service
            get all ids from response
            post to Order service with ids, date

    2. get amount by today [city, date]

https://thomashunter.name/presentations/node-consul/#/16

npm install @babel/cli

and refer package.json with build command


Docker


# Redis


docker pull bitnami/redis

 
docker run --name redis -d -p 6379:6379 -e ALLOW_EMPTY_PASSWORD=yes bitnami/redis:latest


---

To Stop Docker and remove

docker stop 78974b041439
docker rm 78974b041439

---

# Mongo

docker pull mongo

docker run --name mongo_d -d mongo

docker run -d -p 27017:27017 --name mongo_d mongo


---
https://learn.hashicorp.com/consul/day-0/containers-guide


# Consul

docker pull consul

docker images -f 'reference=consul'

docker run -d -p 8500:8500 -p 8600:8600/udp --name=badger consul agent -server -ui -node=server-1 -bootstrap-expect=1 -client=0.0.0.0

dig @localhost -p 8600 consul.service.consul
curl http://localhost:8500/v1/health/service/consul?pretty

docker exec badger consul members

---

# RabbitMQ

docker pull rabbitmq

docker run -d --name amqp.test -p 5672:5672 -p 15672:15672 rabbitmq

---

# Node

docker build -t krish/restaurant-service .
docker images

docker run -p 7777:7777 --net="host" -d krish/restaurant-service 

docker run --name=restaurant   --network="host" -d krish/restaurant-service 


docker logs -f 783559dbe24096a11a8ce76bcc1ce84d533011efb0c0f045d67ac2751b440f87
----

