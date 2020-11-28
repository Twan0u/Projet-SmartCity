//id, maxValue,subjectName,idclass
//permets de simuler une base de données
//todo
const tests = [
    {id: 1, maxValue:20,subjectName:"test",idclass:1},
    {id: 2, maxValue:20,subjectName:"test",idclass:1},
    {id: 3, maxValue:20,subjectName:"test",idclass:1}
]

module.exports.getTest = (id) => {
    const resultats = tests.filter(p => p.id === id);
    if(resultats.length > 0){
        return resultats[0];
    } else {
        throw new Error("Aucun produit trouvé");
    }
}

module.exports.postTest = (id, maxValue,subjectName,idclass) => {
    tests.push({
        id,
        maxValue,
        subjectName,
        idclass
    });
    return true;
}

module.exports.updateTest = (id, maxValue,subjectName) => {
    for(let i = 0; i < produits.length; i++){
        if(tests[i].id === id){
            tests[i].maxValue = maxValue;
            tests[i].subjectName = subjectName;
            tests[i].idclass = idclass;
            return true;
        }
    }
    return false;
}

module.exports.deleteTest = (id) => {
    for (let i = 0; i < tests.length; i++){
        if(tests[i].id === id){
            tests.splice(i, 1);
            return true;
        }
    }
    return true;
}