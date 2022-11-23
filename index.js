
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {getFirestore, collection , Timestamp , addDoc , getDocs} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"

const firebaseApp = initializeApp({
     apiKey: "AIzaSyCvTxrF9KapxjinmFpFr9T07wsglr7l-9U",
     authDomain: "projet-javascript-46aba.firebaseapp.com",
     projectId: "projet-javascript-46aba",
     storageBucket: "projet-javascript-46aba.appspot.com",
     messagingSenderId: "45084340261",
     appId: "1:45084340261:web:419c721021c89204774fcc",
     measurementId: "G-QHG959LNVL"
})

const db = getFirestore(firebaseApp)

// ================================================= Recupere element ========================================================
const form = document.getElementById("formulaire")
const annuler  = document.getElementById("annuler")



form.addEventListener("submit", (e) => {
    e.preventDefault()
     const nom = document.getElementById("nom").value
     const prenom = document.getElementById("prenom").value
     const date = document.getElementById("date").value
     const adress = document.getElementById("Adresse").value
     const email = document.getElementById("email").value
     const tel = document.getElementById("tel").value
     const composition = document.getElementById("composition").value
     const devoir = document.getElementById("devoir").value
     const moyenne = document.getElementById("moyenne").value
     // let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'); 

     // if(emailRegExp.test(email) === false) {
     //      e.preventDefault()
     //      console.log(Error);
     // }
     let noteRegex = new RegExp("[0-7]{1}")
     console.log(noteRegex.test(composition));
     // if(noteRegex.test(composition) === false) {
     //      e.preventDefault() 
     //      alert('error')
     // }
          
     const naissance = Timestamp.fromDate(new Date(date));
     const etudiant = {
         nom,
         prenom,
         naissance,
          adress,
          email,
          tel, 
          composition,
          devoir,
          moyenne
     }
     // addDoc(collection(db , "Etudiants"), etudiant);
})


let etudiant = []
const data = await getDocs(collection(db,"Etudiants"))
data.forEach(doc => {
     etudiant.push(doc.data())
});

annuler.addEventListener('click', (e) => {
     const inputs = document.querySelectorAll("input")
     inputs.forEach(input => {
          input.value = ""
     })
})

// +++++++++++++++++++++++++++ afficher le tableau ==================

function afficherEtudiant () {
     const tbody = document.getElementById("tbody")
     
     etudiant.forEach((el,index) => {
     
          tbody.innerHTML += `
               <tr>
                    <td>${index + 1}</td>
                    <td>${el.nom} </td>
                    <td>${el.prenom} </td>
                     <td>${el.naissance.toDate()}</td>
                    <td>${el.adress}</td>
                    <td>${el.email}</td>
                    <td>${el.tel}</td>
                    <td>${el.composition} /20</td>
                    <td>${el.devoir} /20</td>
                    <td>${el.moyenne} /20</td>
               </tr>
          `
     })
     
}
afficherEtudiant()

// ============================================= Validation du formulaire =============================================

// let composition = 45
// let noteRegex = '/[0-9]/'
// console.log(noteRegex.test(composition));
