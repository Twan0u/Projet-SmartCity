module.exports.getTeacherClass = async (idTeacher, client) => {
    const {rows: classes} = await client.query(`
        SELECT year,letter 
        FROM Class 
        WHERE idTeacher = $1`, [idTeacher]);
    return classes[0];
}
module.exports.getPupilClass = async (idPupil, client) => {
    const {rows: classes} = await client.query(`
        SELECT year,letter 
        FROM Class 
        WHERE id IN (
            SELECT IdClass 
            FROM Pupil 
            WHERE id=$1)`, [idPupil]);
    return classes[0];
}
module.exports.getTeacher = async (idPupil, client) => {
    const {rows: classes} = await client.query(`
        SELECT FirstName,Lastname,Login 
        FROM Class 
        WHERE id IN (
            SELECT IdClass 
            FROM Pupil 
            WHERE id=$1)`, [idPupil]);
    return classes[0];
}
module.exports.getPupils = async (idTeacher, client) => {
    const {rows: pupils} = await client.query(`
        SELECT id,firstname,lastname 
        FROM Pupil
        WHERE IdClass IN (
            SELECT ID 
            FROM Class 
            WHERE IdTeacher = $1)`, [idTeacher]);
    return pupils;
}