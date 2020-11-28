//permets de simuler une base de données
/*const teachers = [
    {id: 1, firstname:"Twan0u", lastname:"LBT",login:"ant.lamb.al@gmail.com",password:"test1234"},
    {id: 2, firstname:"Twan", lastname:"LBT",login:"ant@gmail.com",password:"test1234"},

]

module.exports.getTeacher = (id) => {
    const resultats = teachers.filter(p => p.id === id);
    if(resultats.length > 0){
        return resultats[0];
    } else {
        throw new Error("Aucun produit trouvé");
    }
}*/

module.exports.getTeacher = async (id, client) => {
    return await client.query("SELECT * FROM Teacher WHERE id = $1", [id]);
}