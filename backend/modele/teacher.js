module.exports.getTeacherByID = async (id, client) => {
    const {rows: users} = await client.query("SELECT login, firstname, lastname FROM Teacher WHERE ID = $1 LIMIT 1", [id]);
    return users[0];
}
module.exports.teacherLogin = async (username, client) => {
    const {rows: users} = await client.query("SELECT * FROM Teacher WHERE login = $1 LIMIT 1", [username]);
    return users[0];
}