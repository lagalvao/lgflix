/* eslint-disable linebreak-style */
import config from '../config/index';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();
        return resposta;
      }

      throw new Error('Não foi possivel pegar os dados');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();
        return resposta;
      }

      throw new Error('Não foi possivel pegar os dados');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
