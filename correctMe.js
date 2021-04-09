/* Code à corriger 
const fsPromises = require('fs/promises')

try {
  let txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
  console.log(txt1)
} catch (e) {
  console.log(e.message)
}
*/

/* Code Corrigé */
// Dans le cas d'un mode Asynchrone on doit encapsuler notre commande Fs Asynchrone dans une fonction
// Création du fichier hello.txt que le code ne détectait pas

const fsPromises = require('fs/promises')

const myReadFile = async () => {
  try {
    let txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
    console.log(txt1)
  } catch (e) {
    console.log(e.message)
  }
}
myReadFile()