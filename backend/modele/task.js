//permets de simuler une base de données
const tasks = [
    {id: 1, title:"prendre affaires de piscine", type:"test", description: "piscine", date:"22-11-2020", idSchoolSubject:1, idClass:1},
    {id: 2,  title:"task2", type:"test", description: "piscine2", date:"23-11-2020", idSchoolSubject:1, idClass:1},
    {id: 3,  title:"t3", type:"test", description: "piscin3", date:"24-11-2020", idSchoolSubject:1, idClass:1}
]

module.exports.getTask = (id) => {
    const resultats = tasks.filter(p => p.id === id);
    if(resultats.length > 0){
        return resultats[0];
    } else {
        throw new Error("Aucun produit trouvé");
    }
}

module.exports.postTask = (id, title, type, description, date, idSchoolSubject, idClass) => {
    produits.push({
        id,
        title,
        type,
        description,
        date,
        idSchoolSubject,
        idClass
    });
    return true;
}

module.exports.updatePrix = (id, title, type, description, date, idSchoolSubject, idClass) => {
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks[i].title = title;
            tasks[i].type = type;
            tasks[i].description = description;
            tasks[i].date = date;
            tasks[i].idSchoolSubject = idSchoolSubject;
            tasks[i].idClass = idClass;
            return true;
        }
    }
    return false;
}

module.exports.deleteTask = (id) => {
    for (let i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks.splice(i, 1);
            return true;
        }
    }
    return true;
}