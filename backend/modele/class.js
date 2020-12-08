module.exports.getClass = async (idClass, client) => {
    const {rows: classes} = await client.query(`
        SELECT ID, Year, Letter
        FROM Class 
        WHERE ID = $1`, [idClass]);
    return classes[0];
}
module.exports.getPupilsInClass = async (idClass, client) => {
    const {rows: pupils} = await client.query(`
        SELECT id, FirstName, LastName
        FROM Pupil
        WHERE idClass = $1`, [idClass]);
    return pupils;
}
module.exports.getClassTeacher = async (idClass, client) => {
    const {rows: classes} = await client.query(`
        SELECT Login, FirstName, Lastname
        FROM Teacher 
        WHERE IdClass = $1`, [idClass]);
    return classes[0];
}