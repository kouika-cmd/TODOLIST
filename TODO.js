const prompt = require("prompt-sync")({});

let tableau = [];
function add() {
  let titre = prompt("Entrez la description de la tâche   : ");
  let id = tableau.length + 1;
  tableau.push({
    id: id,
    titre: titre,
    isDone: false,
  });
}
function afficher() {
  if (tableau.length === 0) {
    console.log("pas des taches");
    return;
  }

  for (let t of tableau) {
    let statut = t.isDone ? "Terminée " : "En attente ";
    console.table(t);
  }
}
function rechercher() {
  let searchTitre = prompt("Entrer le titre à rechercher :");

  let resultat = tableau.find((tache) => tache.titre === searchTitre);

  if (resultat) {
    console.log("Tâche trouvée :", resultat);
  } else {
    console.log("Aucune tâche avec ce titre !");
  }
}

function modifier() {
  let idCherche = parseInt(prompt("Entrer l'id de la tâche : "));
  let nouvelleDesc = prompt("entrer la nouvelle discription : ");

  let tache = tableau.find((item) => item.id === idCherche);

  if (tache) {
    tache.description = nouvelleDesc;
    console.log("Description modifiée ");
  } else {
    console.log("y'a pas de tâche avec cet id ");
  }
}

function supprimer() {
  let idchoisi = parseInt(prompt("entrer id pour le supprm"));

  let index = tableau.findIndex((t) => t.id === idchoisi);

  if (index !== -1) {
    tableau.splice(index, 1);
  }
}

function changementStatus() {
  tachesohaiter = parseInt(prompt("entrer id de tache "));
  let tache = tableau.find((item) => item.id === tachesohaiter);
  tache.isDone = true;
  console.log(tache);
  console.log(tableau);
}
function afichStatus() {
  let enterStatus = prompt(
    "entrer le status choisi soit terminee / en attente :"
  );

 
  let tab1 = tableau.filter((element) => !element.isDone);

  let tab2 = tableau.filter((element) => element.isDone);

  if (enterStatus == "en attente") {
    console.log(tab1);
  } else if (enterStatus == "terminee") {
    console.log(tab2);
  } else {
    console.log("pas de status a afficher");
  }
}

let choix = 0;
while (choix !== 9) {
  console.log("\n===== To-Do List =====");
  console.log("1. Afficher les tâches ");
  console.log("2. Ajouter une tâche");
  console.log("3. Rechercher une tâche ");
  console.log("4. Modifier une tâche ");
  console.log("5. Supprimer une tâche ");
  console.log("6. Marquer une tâche comme terminée ");
  console.log("7. Afficher tâches terminées / en attente ");
  console.log("9. Quitter");

  choix = parseInt(prompt("Choisissez une option  : "));
  switch (choix) {
    case 1:
      afficher();
      break;

    case 2:
      add();
      console.log("Tâche ajoutée avec succès ! ");
      break;

    case 3:
      rechercher();

      break;

    case 4:
      modifier();
      break;

    case 5:
      supprimer();
      break;

    case 6:
      changementStatus();
      break;

    case 7:
      afichStatus();
      break;

    case 9:
      console.log("Au revoir !");
      break;
    default:
      console.log(" Choix invalide !");
      break;
  }
}
