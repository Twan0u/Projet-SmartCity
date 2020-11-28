//permets de simuler une base de données
// todo

const Events = [
    {id: 1, name: "event1", date:"27-11-2020",description: "j'en ai marre de ça",idClass:1},
    {id: 2, name: "event2", date:"28-11-2020",description: "je suis plein en écrivant ça",idClass:1},
    {id: 3, name: "event3", date:"29-11-2020",description: "lol créer une app pour enfants plein mort",idClass:1}
]

module.exports.getEvent = (id) => {
    const resultats = Events.filter(p => p.id === id);
    if(resultats.length > 0){
        return resultats[0];
    } else {
        throw new Error("Aucun produit trouvé");
    }
}

module.exports.postEvent = (id, name, date, description) => {
    Events.push({
        id,
        name,
        date,
        description
    });
    return true;
}

module.exports.updateEvent = (id, name, date, description) => {
    for(let i = 0; i < Events.length; i++){
        if(Events[i].id === id){
            Events[i].name = name;
            Events[i].date = date;
            Events[i].description = description;
            return true;
        }
    }
    return false;
}

module.exports.deleteEvent = (id) => {
    for (let i = 0; i < Events.length; i++){
        if(Events[i].id === id){
            Events.splice(i, 1);
            return true;
        }
    }
    return true;
}