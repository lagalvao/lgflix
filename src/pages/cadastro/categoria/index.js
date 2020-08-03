/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:8081/categorias';
    fetch(URL)
      .then(async (respostaServidor) => {
        const resposta = await respostaServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Frontttt end',
    //       cor: '#000',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Outrooooo end',
    //       cor: '#000',
    //     },
    //   ]);
    // }, 1 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        action=""
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            /* Nao sobreescreva o valor e adicione o novo */
            ...categorias,
            values,
          ]);
          clearForm();
        }}
      >
        <FormField
          label="Nome da categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Carregando...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => <li key={`${categoria.id}`}>{categoria.titulo}</li>)}
      </ul>

      <Link to="/">Ir para a Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
