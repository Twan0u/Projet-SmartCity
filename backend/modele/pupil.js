const pupils = [
    {id: 1, login:"Antoine",password:"test",firstname:"Antoine",lastname:"Lambert",birthdate: "16-09-1997", parentPhone:"0032498191919",parentMail:"parent@gmail.com",classid:1},
    {id: 2, login:"Antoine",password:"test2",firstname:"Antoine",lastname:"Dumont",birthdate: "02-04-1995", parentPhone:"0033498000000",parentMail:"parent@gmail.com",classid:2}
]

module.exports.getPupil = (id) => {
    const resultats = pupils.filter(p => p.id === id);
    if(resultats.length > 0){
        return resultats[0];
    } else {
        throw new Error("Aucun produit trouvé");
    }
}