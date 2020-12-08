const pupils = [
    {id: 1, login:"antoinlamber",password:'$2b$10$Wkx2BKSmDJ2gj.mQiivWCOy7B5FxWotyvrX1D4uX4Ma2MpSaRn.TK',firstname:"Antoine",lastname:"Lambert",birthdate: "16-09-1997", parentPhone:"0032498191919",parentMail:"parent@gmail.com",classid:1},
    {id: 2, login:"antoine",password:'$2b$10$Wkx2BKSmDJ2gj.mQiivWCOy7B5FxWotyvrX1D4uX4Ma2MpSaRn.TK',firstname:"Antoine",lastname:"Dumont",birthdate: "02-04-1995", parentPhone:"0033498000000",parentMail:"parent@gmail.com",classid:2}
]

module.exports.getPupil = async (id, client) => {
    const {rows: users} = await client.query("SELECT ID, FirstName, LastName, Birthdate, ParentPhone, ParentMail FROM Pupil WHERE ID = $1 LIMIT 1", [id]);
    return users[0];
}

module.exports.loginPupil = async (username, client) => {
    const {rows: users} = await client.query("SELECT * FROM Pupil WHERE login = $1 LIMIT 1", [username]);
    return users[0];
}