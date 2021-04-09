/* Version synchrone */
/*
const fs = require('fs')

try {
  let txt1 = fs.readFileSync('hello.txt', 'utf-8')
  txt1 = txt1.toUpperCase()
  fs.writeFileSync('hello.txt', txt1)
} catch (e) {
  console.log(e.message)
}
*/

/* Version Asynchrone */
// encapsulation du code dans une fonction
// Utilisation des commande Asynchrone
// Ajout de la déclaration async, et des await dans la fonction pour ordonné le lancement des commande FS Asynchrone

const fsPromises = require('fs/promises')

const myReadFile = async () => {
  try {
    let txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
    txt1 = txt1.toUpperCase()
    console.log(txt1)
    await fsPromises.writeFile('hello.txt', txt1)
  } catch (e) {
    console.log(e.message)
  }
}
myReadFile()