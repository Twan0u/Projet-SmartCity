//permets de simuler une base de données
const schoolSubjects = [
    {id: 1, name: "Français"},
    {id: 2, name: "Mathématiques"},
    {id: 3, name: "Sciences"}
]

module.exports.getSchoolSubject = (id) => {
    const resultats = schoolSubjects.filter(p => p.id === id);
    if(resultats.length > 0){
        return resultats[0];
    } else {
        throw new Error("Aucun produit trouvé");
    }
}