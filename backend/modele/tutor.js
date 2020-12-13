module.exports.loginTutor = async (username, client) => {
    const {rows: users} = await client.query("SELECT * ,'tutor' as role FROM Tutor WHERE login = $1 LIMIT 1", [username]);
    return users[0];
}
module.exports.getPupils = async (id, client) => {
    const {rows: pupils} = await client.query(`

        select pupil.id,pupil.login,pupil.firstname,pupil.lastname,pupil.birthdate,pupil.idclass, 'pupil' as role
        from pupil
        INNER JOIN responsible ON pupil.id = responsible.idpupil
        INNER JOIN tutor ON responsible.idresponsible = tutor.id
        where tutor.id = $1
        
        `, [id]);
    return pupils;
}

module.exports.add = async (username,password,firstname,lastname,phonenumber,client) => {
    const {rows: user} = await client.query(`
        INSERT INTO Tutor(username,password,firstname,lastname,phonenumber)
        VALUES($1,$2);`, [username,password,firstname,lastname,phonenumber]);
    return user;
}
