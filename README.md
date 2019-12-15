
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

