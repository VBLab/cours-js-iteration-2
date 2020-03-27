
/**
 * Fonction à appeler au chargement de la page
 * Cette fonction devra exécuter les actions suivantes :
 *    - charger la liste des objets depuis l'API
 *    - charger les données des objets dans la table
 */
function load_components() {

    console.log("Chargement des données de la page");
    $.get("/objects", function (data) {
        for (let p of data.objects) {
            add_line_to_table(p);
        }
        //console.log(p);
        // Ajouter ici le code permettant de charger dynamiquement les éléments de la page
    });
}

// function add_line_to_table() {                           //ajout d'un seul objet (001)
// let line = '<tr>\
// <th> OBJ_001 </th>\
// <td><image</td>\
// <td>description</td>\
// <td><input type="radio"></td>\
// <th style="width: 100px"><button class="btn-primary">Achetez moi !</button></th>\
// </tr>';

// document.getElementById('table_body').innerHTML += line ;


//}
// $('#table_body').append(line);                   // jquerry



function add_line_to_table(data) {
    let checked = "";
    if (data.status) {
        checked = "checked";
    } else {
        checked = "";
    }                                  /// Modif add_line /ajout les données d'un objet à la ligne
    let line = '<tr>\
    <th> '+ data.serial + ' </th>\
    <th><img style="max-width: 70%; height: 10%;"src="/static/images/'+ data.image + '"></th>\
    <th>'+ data.description + '</th>\
    <th><input type="checkbox" '+checked+'></th>\
    <th style="width: 100px"><button class="btn-primary">Achetez moi !</button></th>\
    </tr>';

    document.getElementById('table_body').innerHTML += line;

}
