const pool = require("../modele/database");

const EventModel = require("../modele/event");

module.exports.getEvents = async (req, res) => {
    const client = await pool.connect();

    try{
        const events = await EventModel.getEvents(req.user.idclass,client);
        if(events !== undefined){
            res.status(200).json(events);
        } else {
            res.sendStatus(404);
        }
    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}

module.exports.getTodayEvents = async (req, res) => {
    const client = await pool.connect();
    try{
        const events = await EventModel.getTodayEventsByClassId(req.user.idclass,client);
        if(events !== undefined){
            res.status(200).json(events);
        } else {
            res.sendStatus(404);
        }
    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}

module.exports.getWeekEvents = async (req, res) => {
    const client = await pool.connect();
    try{
        const events = await EventModel.getWeekEventsByClassId(req.user.idclass,client);
        if(events !== undefined){
            res.status(200).json(events);
        } else {
            res.sendStatus(404);
        }
    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}

module.exports.postEvent= (req, res) => {
    const body = req.body;
    const {id, name, date, description} = body;
    const reponse = EventModele.postEvent(id, name, date, description);
    if(reponse){
        res.sendStatus(201);
    } else {
        res.sendStatus(500);
    }
}

module.exports.updateEvent = (req, res) => {
    const {id, name, date, description} = req.body;
    const reponse = EventModele.updateEvent(id, name, date, description);
    if(reponse){
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}

module.exports.deleteEvent = (req, res) => {
    const {id} = req.body;
    const reponse = EventModele.deleteEvent(id);
    if(reponse){
        res.sendStatus(204);
    } else {
        res.sendStatus(500);
    }
}
/*
* module.exports.getEvents = (req, res) => {
    const idTexte = req.params.id; //attention ! Il s'agit de texte !
    const id = parseInt(idTexte);

    if(isNaN(id)){
        res.sendStatus(400);
    } else {
        try{
            const event = EventModel.getEvents();//todo
            res.json(event);
        } catch (error){
            res.sendStatus(404);
        }
    }
}
* */