/* eslint-disable linebreak-style */
import config from '../config/index';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();
        return resposta;
      }

      throw new Error('Não foi possivel cadastrar os dados');
    });
}

export default {
  create,
};
