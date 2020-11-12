module.exports.getLogin = async (username, client) => {
        return await client.query("SELECT password FROM Teacher WHERE login=$1", [username]);
}