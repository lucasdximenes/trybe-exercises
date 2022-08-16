import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Configuração inicial do jogo", () => {
  test("Verificar se foi renderizada nove casas", () => {
    render(<App />);
    for (let i = 0; i < 9; i++) {
      expect(screen.getByTestId(`cell_${i}`)).toBeInTheDocument();
    }
  });

  test("Começar com todos os espaços em branco.", () => {
    render(<App />);
    for (let i = 0; i < 9; i++) {
      expect(screen.getByTestId(`cell_${i}`)).toHaveTextContent("");
    }
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    render(<App />);
    expect(screen.queryByText("Fim de jogo")).not.toBeInTheDocument();
  });
});
