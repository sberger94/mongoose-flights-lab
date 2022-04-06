const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    index,
    new: newTicket,
    create
}

function index(req, res){

}

function create(req, res) {
    console.log(req.body, '<--req.body on ticketController.create')
    Flight.findById(req.params.id, function(err, flightDoc){
       req.body.flight = flightDoc._id;
       Ticket.create(req.body, function(err) {
           console.log(flightDoc, '<--flightDoc')
          res.redirect(`/flights/${flightDoc._id}`)
       });

//        Ticket.find({flight: flightDoc._id}, function(err, tickets){
           
//             // flight.tickets.push(req.body)
//             flightDoc.save(function(err){
//                 console.log(flightDoc, '<--flight log')
//             })
//             console.log(tickets, '<-- tickets')
//             res.redirect(`/flights/${flight._id}`)
//        })
//    })
    })
}

function newTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
        console.log(flight, '<---flight object')
        res.render('tickets/new', {title: 'Tickets', flight})
    })
}