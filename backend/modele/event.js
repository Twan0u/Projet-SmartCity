module.exports.getEvents = async (idClass, client) => {
    const {rows: events} = await client.query("SELECT id, Name, date, description FROM Event WHERE ID = $1", [idClass]);
    return events[0];
}

module.exports.postEvent = async (name, date, description, idClass) => {
    return await client.query("INSERT INTO Event(Name, Date, Description, IdClass)VALUES($1,$2,$3,$4)", [name, date, description, idClass]);
}

module.exports.updateEvent = async (id, name, date, description) => {
    const query =  `UPDATE Event
        SET Name = $2
            Date = $3
            Description = $4
        WHERE id = $1`;
    return await client.query(query, [id, name, date, description]);
}

module.exports.deleteEvent = async (id) => {
    return await client.query("DELETE FROM Event WHERE id=$1", [id, name, date, description]);
}