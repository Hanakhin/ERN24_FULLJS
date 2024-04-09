console.log("hello");

//je choppe la div "popup" comme container principal
const container = document.getElementById("popup")
const title = document.createElement("h1")
title.innerText = "Je m'inscris"

container.appendChild(title)

//creation du formulaire
const myform = document.createElement('form')
myform.classList.add('custom-form')
container.appendChild(myform)


//creation des divs
const formDivPrenom = document.createElement('div')
const formDivNom = document.createElement('div')
const formDivEmail = document.createElement('div')
const formDivPassword = document.createElement('div')
const formDivTel = document.createElement('div')

//ajout des classes
formDivPrenom.classList.add('input-box')
formDivNom.classList.add('input-box')
formDivEmail.classList.add('input-box')
formDivPassword.classList.add('input-box')
formDivTel.classList.add('input-box')

//ajout des divs dans le formulaire
myform.appendChild(formDivPrenom)
myform.appendChild(formDivNom)
myform.appendChild(formDivEmail)
myform.appendChild(formDivPassword)
myform.appendChild(formDivTel)

//creation des labels
const formLabelPrenom = document.createElement('label')
const formLabelNom = document.createElement('label')
const formLabelEmail = document.createElement('label')
const formLabelPassword = document.createElement('label')
const formLabelTel = document.createElement('label')

//creation des inputs
const formInputPrenom = document.createElement('input')
const formInputNom = document.createElement('input')
const formInputEmail = document.createElement('input')
const formInputPassword = document.createElement('input')
const formInputTel = document.createElement('input')

//assignation des types aux inputs
formInputPrenom.type = "text"
formInputNom.type = 'text'
formInputEmail.type = 'email'
formInputPassword.type = 'password'
formInputTel.type = 'text'

//assignation des names a ceux ci 
formInputPrenom.name = "Prenom"
formInputNom.name = 'Nom'
formInputEmail.name = 'Email'
formInputPassword.name = 'Mdp'
formInputTel.name = 'Tel'

//ajout des labels aux divs
formDivPrenom.appendChild(formLabelPrenom)
formDivNom.appendChild(formLabelNom)
formDivEmail.appendChild(formLabelEmail)
formDivPassword.appendChild(formLabelPassword)
formDivTel.appendChild(formLabelTel)

//ajout des divs au formulaire
formDivPrenom.appendChild(formInputPrenom)
formDivNom.appendChild(formInputNom)
formDivEmail.appendChild(formInputEmail)
formDivPassword.appendChild(formInputPassword)
formDivTel.appendChild(formInputTel)

//ajout du texte dans les labels
formLabelPrenom.innerText = 'votre Prenom:'
formLabelNom.innerText = 'votre Nom:'
formLabelEmail.innerText = 'votre Email:'
formLabelPassword.innerText = 'votre Mot de passe:'
formLabelTel.innerText = 'votre Telephone:'

//creation et ajout du bouton d'enregistrement
const submitBtn = document.createElement('button');
submitBtn.innerText="s'enregistrer"
submitBtn.type = 'submit'
submitBtn.classList='submitBtn'
myform.appendChild(submitBtn)


