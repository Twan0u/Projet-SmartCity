module.exports.getPupil = async (id, client) => {
    const {rows: users} = await client.query("SELECT ID, FirstName, LastName, Birthdate, ParentPhone, ParentMail FROM Pupil WHERE ID = $1 LIMIT 1", [id]);
    return users[0];
}

module.exports.loginPupil = async (username, client) => {
    const {rows: users} = await client.query("SELECT * FROM Pupil WHERE login = $1 LIMIT 1", [username]);
    return users[0];
}