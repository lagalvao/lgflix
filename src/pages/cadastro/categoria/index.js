import React, { useState } from "react";

import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infoEvento) {
    setValue(infoEvento.target.getAttribute("name"), infoEvento.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        action=""
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            /* Nao sobreescreva o valor e adicione o novo */
            ...categorias,
            values,
          ]);
          setValues(valoresIniciais);
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
          type="text"
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

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para a Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
