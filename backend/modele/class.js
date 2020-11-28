//permets de simuler une base de données
// todo

const classes = [
    {id: 1, year: 1, letter:"A",idTeacher:1},
    {id: 2, year: 2, letter:"B",idTeacher:2}
]

module.exports.getClasse = (id) => {
    const resultats = classes.filter(p => p.id === id);
    if(resultats.length > 0){
        return resultats[0];
    } else {
        throw new Error("Aucun produit trouvé");
    }
}