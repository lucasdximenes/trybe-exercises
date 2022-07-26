import React, { Component } from "react";

export default class Form extends Component {
  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      house,
      summary,
      post,
      postDescription,
      onInputChange,
      submitButton,
      resetButton,
      onBlur,
      onMouseEnter,
      mouseEntered,
    } = this.props;

    return (
      <div>
        <form action="">
          <fieldset>
            <legend>Dados pessoais</legend>

            <label htmlFor="name-input">
              Nome:
              <input
                type="text"
                name="name"
                id="name-input"
                maxLength={40}
                required
                value={name}
                onChange={onInputChange}
              />
            </label>

            <label htmlFor="email-input">
              Email:
              <input
                type="email"
                name="email"
                id="email-input"
                maxLength={60}
                required
                value={email}
                onChange={onInputChange}
              />
            </label>

            <label htmlFor="cpf-input">
              CPF:
              <input
                type="text"
                name="cpf"
                id="cpf-input"
                maxLength={11}
                required
                value={cpf}
                onChange={onInputChange}
              />
            </label>

            <label htmlFor="address-inpu">
              Endereço:
              <input
                type="text"
                name="address"
                id="address-input"
                maxLength={200}
                required
                value={address}
                onChange={onInputChange}
              />
            </label>

            <label htmlFor="city-input">
              Cidade:
              <input
                type="text"
                name="city"
                id="city-input"
                maxLength={28}
                required
                value={city}
                onChange={onInputChange}
                onBlur={onBlur}
              />
            </label>

            <label htmlFor="state-input">
              Estado:
              <select
                name="state"
                id="state-input"
                value={state}
                onChange={onInputChange}
              >
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </label>

            <label htmlFor="casa">
              Casa:
              <input
                type="radio"
                name="house"
                id="casa"
                value="casa"
                checked={house === "casa"}
                onChange={onInputChange}
              />
            </label>

            <label htmlFor="apartamento">
              Apartamento:
              <input
                type="radio"
                name="house"
                id="apartamento"
                value="apartamento"
                checked={house === "apartamento"}
                onChange={onInputChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Dados do ultimo emprego</legend>

            <label htmlFor="resume-summary">
              Resumo do curriculo:
              <textarea
                name="summary"
                id="resume-summary"
                cols="30"
                rows="10"
                maxLength={1000}
                required
                value={summary}
                onChange={onInputChange}
              ></textarea>
            </label>

            <label htmlFor="post">
              Cargo:
              <textarea
                name="post"
                id="post"
                cols="30"
                rows="10"
                maxLength={40}
                required
                value={post}
                onChange={onInputChange}
                onMouseEnter={onMouseEnter}
                placeholder={
                  mouseEntered ? "Preencha com cuidado esta informação." : ""
                }
              ></textarea>
            </label>

            <label htmlFor="post-description">
              Descrição do cargo:
              <textarea
                name="postDescription"
                id="post-description"
                cols="30"
                rows="10"
                maxLength={500}
                required
                value={postDescription}
                onChange={onInputChange}
              ></textarea>
            </label>
          </fieldset>

          <button type="submit" onClick={submitButton}>
            Enviar
          </button>
          <button type="reset" onClick={resetButton}>
            Limpar
          </button>
        </form>
      </div>
    );
  }
}
