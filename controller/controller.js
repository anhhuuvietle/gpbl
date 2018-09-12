const mongoose = require("mongoose");
const Accident = require('../models/Accident');
const geolib = require('geolib');

module.exports = {
    handleInfo: async (req, res) => {
        // Add object to schema when user send info, check if it is too near
        const accidents = await Accident.find({status: true});
        const accident = req.body;
        let check = false;
        accidents.map(acc => {
            // const dis = Math.sqrt(Math.pow(acc.long - accident.long,2), Math.pow(acc.lat - accident.lat, 2));
            const dis = geolib.getDistance(
                {
                    latitude: acc.lat,
                    longitude: acc.long
                },
                {
                    latitude: accident.lat,
                    longitude: accident.long
                }
            );
            if (dis <= 10) check = true;
            return acc;
        });
        if (!check) {
            const a = new Accident(accident);
            try {
                await a.save();
                console.log("success");
            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            console.log("Already had");
        }
        res.sendStatus(200);
    },
    handleLocation: async (req, res) => {
        // When user only send location, get data from db, consider what is out of date
        // Check the distance and send back an array
        const accidents = await Accident.find({status: true});
        const accident = req.body;

    }
}