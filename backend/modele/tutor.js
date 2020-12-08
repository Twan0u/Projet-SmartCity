module.exports.loginTutor = async (username, client) => {
    const {rows: users} = await client.query("SELECT * FROM Tutor WHERE login = $1 LIMIT 1", [username]);
    return users[0];
}