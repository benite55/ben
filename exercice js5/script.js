var first = document.getElementById("first");
first.style.display = "block";
function showForm(){
  var second = document.getElementById("second");
  var first = document.getElementById("first");
  first.style.display = "none";
  second.style.display = "block";
}

function afficherFormulaire() {
  var art = document.querySelector('input[name="art"]:checked').value;
  var danseFormulaire = document.getElementById("danse-formulaire");
  var second = document.getElementById ("second"); 
  var third = document.getElementById("third");  
  third.style.display = "block";
  if (art) {
    second.style.display = "none";			
    danseFormulaire.style.display = "block";  	
  }else{
    alert("choisissez un art!")
  }
}

function showFormilaire(event){
  event.preventDefault ();
  var inputAge = document.getElementById ("input-age");
  var age =parseInt(inputAge.value);
  var fouth = document.getElementById("fouth");
  var junior = document.getElementById("junior");
  var seignior = document.getElementById("seignior");
  var chant = document.getElementById("chant");
  var slam = document.getElementById("slam");
  var decision =document.getElementById("decision");
  var ancienDecision = document.getElementById("ancien-decision");
  var art = document.querySelector('input[name="art"]:checked').value;
  var membre = document.querySelector('input[name="membre"]:checked').value;
  var danseFormulaire = document.getElementById("danse-formulaire");
  var third = document.getElementById("third");
  var dans  = document.getElementById("dans") 
  third.style.display = "none";
  danseFormulaire.style.display = "none";  
  decision.style.display = "block";
  switch(art){
    case "danse":
      switch(membre){
        case "nouveau":
          if (12 <= age && age <= 15){
            fouth.style.display = "block";
            junior.style.display ="block";
            seignior.style.display ="none";
            chant.style.display ="none";
            slam.style.display ="none";
          }else if(16 <= age && age <= 20){
            fouth.style.display = "block";
            seignior.style.display="block";
            junior.style.display ="none";
            chant.style.display ="none";
            slam.style.display ="none";
          }else {
            fouth.innerHTML = 'Erreur !!';
          }
        break;
        case "ancien":
          fouth.style.display = "block";
          decision.style.display = "none";
          ancienDecision.style.display = "block";
          seignior.style.display ="none";
          junior.style.display ="none";
          chant.style.display ="none";
          slam.style.display ="none";
        break;
        default:
          alert("Etez-vous ancien ou nouveu !");       
      }
    break;
    case "chant":
      switch(membre){
        case "nouveau":
          fouth.style.display = "block";
          seignior.style.display ="none";
          junior.style.display ="none";
          slam.style.display ="none";
          chant.innerHTML = `<strong>Le departement de CHANT vous souhaite le bienvenue...</strong>
          vous allez rester dans la phase d'observation justa nouvel ordre. 
            Rassurez-vous mettre ce reglement en parique sinon on recours a la punition,Rassurez-vous aussi aussi que 
            les parents sont au courant de votre integration dans le groupe EJO,par ce que des fois on aura recours aux 
            parents dans certaines situations.`
        break;
        case "ancien":
          fouth.style.display = "block";
          seignior.style.display ="none";
          junior.style.display ="none";
          slam.style.display ="none";
          chant.innerHTML = `
            Rassurez-vous mettre ce reglement en parique sinon on recours a la punition,Rassurez-vous aussi aussi que 
            les parents sont au courant de votre integration dans le groupe EJO,par ce que des fois on aura recours aux 
            parents dans certaines situations.` 
          decision.style.display = "none";
          ancienDecision.style.display = "block";
          dans.style.display ="none";

        break;
        default:
          alert("Etez-vous ancien ou nouveu !")  
      }
    break;
    case "slam":
      switch(membre){
        case "nouveau":
          fouth.style.display = "block";
          seignior.style.display ="none";
          junior.style.display ="none";
          chant.style.display ="none";
          slam.innerHTML = `<strong>le departement de SLAM vous souhaite le bienvenue...</strong>
          vous allez rester dans la phase d'observation justa nouvel ordre.  
          Rassurez-vous mettre ce reglement en parique sinon on recours a la punition,Rassurez-vous aussi aussi que 
          les parents sont au courant de votre integration dans le groupe EJO,par ce que des fois on aura recours aux 
          parents dans certaines situations.` 
        break;
        case "ancien":
          fouth.style.display = "block";
          seignior.style.display ="none";
          junior.style.display ="none";
          chant.style.display ="none";
          dans.style.display ="none";
          slam.innerHTML = `
          Rassurez-vous mettre ce reglement en parique sinon on recours a la punition,Rassurez-vous aussi aussi que 
          les parents sont au courant de votre integration dans le groupe EJO,par ce que des fois on aura recours aux 
          parents dans certaines situations.` 
          decision.style.display = "none";
          ancienDecision.style.display = "block";
        break;
        default:
          alert("Etez-vous ancien ou nouveu !"); 
      }
    break;
    default:
      alert("choisissez un departement!"); 
  }
}

function afficherAncienNom(){
  var fifth = document.getElementById("fifth");
  var contentAncien = document.getElementById("content-ancien");
  var submit = document.getElementById("submit");
  var nom = document.getElementById("nom").value;
  var telephone = document.getElementById("telephone").value;
  var email = document.getElementById("email").value;
  contentAncien.innerHTML=`Merci <strong>${" Bliss "+nom}</strong>😊,de vous avoir enregister.
   Nous serons entrain de vous contacter sur ce numero👉🏻<strong>${telephone}</strong>,ou a votre adress 👉🏻<strong >${email}</strong>`;
  fifth.style.display = "block";
  fouth.style.display ="none";
  submit.style.display ="block";
}

function afficherNouveauNom(){
  var fifth = document.getElementById("fifth");
  var contentNouveau = document.getElementById("content-nouveau");
  var submit = document.getElementById("submit");
  var nom = document.getElementById("nom").value;
  var telephone = document.getElementById("telephone").value;
  var email = document.getElementById("email").value;
  contentNouveau.innerHTML=`Merci  <strong>${" Bliss "+nom}</strong>😊,d'acoir integer le groupe EFFECTIVE JOY.
   Nous serons entrain de vous contacter sur ce numero👉🏻<strong>${telephone}</strong>,ou a votre adress 👉🏻<strong >${email}</strong>`;
  fifth.style.display = "block";
  fouth.style.display ="none";
  submit.style.display ="block";

}