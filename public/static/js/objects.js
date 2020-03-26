
/**
 * Fonction à appeler au chargement de la page
 * Cette fonction devra exécuter les actions suivantes :
 *    - charger la liste des objets depuis l'API
 *    - charger les données des objets dans la table
 */
function load_components(){
    
    console.log("Chargement des données de la page");
    $.get("/objects", function(data, status) {
        console.log(data);
    // Ajouter ici le code permettant de charger dynamiquement les éléments de la page
});
}
function add_line_to_table() {
let line = '<tr>\
<th> OBJ_001 </th>\
<td><image</td>\
<td>description</td>\
<td><input type="radio"></td>\
<th style="width: 100px"><button class="btn-primary">Achetez moi !</button></th>\
</tr>';

document.getElementById('table_body').innerHTML +- line ;

}
// $('#table_body').append(line); // jquerry