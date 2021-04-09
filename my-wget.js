// ajout d'Aaxios => yarn add axios

const axios = require('axios')
const fsPromises = require('fs/promises')

const main = async () => {
  try {
    const response = await axios.get('https://fr.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html')
    // response.data => retour des données au format string de la page html indiqué en target d'Axios
    await fsPromises.writeFile('index.html', response.data)
    // affichage des datas du fichier index.html
    console.log(response.headers)

    // récupération des stats du fichier index.html
    const stats = await fsPromises.stat('./index.html', 'utf-8')
    // Affichage de la taille du fichier index.html
    console.log('\nTaille des données downloadé: ', stats.size, '\n')

  } catch (e) {
    console.log(e.message)
  }
}

main()