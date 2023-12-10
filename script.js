document.addEventListener('DOMContentLoaded', function () {

    // déclarer une fonction  quizFrom qui recupère tout les données du DIV quiz-from grace a son ID 
    const quizForm = document.getElementById('quiz-form'); 

    // déclarer les deux fonction qui recupèrent les deux phrse de répence 
    const alertTrue = document.getElementById('alert-title-correct');
    const alertFalse = document.getElementById('alert-title-false');

    //donner des fonctionalités au bouton check 
    quizForm.addEventListener('submit', function (event) {

      // empécher la réactualisation automatique de la page 
        event.preventDefault(); 

      // Forcer un refresh de la page avec la fonction timeOut aprés avoir cliqué sur le bouton check  
       setTimeout(() => { window.location.reload(true);},2000);
       
      // Définir la repense correct avec la fonction correctAnswers
      const correctAnswers = ['true', 'true','true'];
  
      // sélectionner tout les répenses avec querySelectorAll et récupérer leur valeurs
      const selectedAnswers = Array.from(document.querySelectorAll('.answer:checked'), input => input.value);
  
      // comparer les valeur récupéré avec répénse correct on utilisant reduce 
      const isCorrect = selectedAnswers.reduce((acc, answer, index) => acc && answer === correctAnswers[index], true);
  

        // afficher si la répense est bonne ou non 
      alertTrue.style.display = isCorrect ? 'block' : 'none';
      alertFalse.style.display = isCorrect ? 'none' : 'block';
    
    });
  });
  