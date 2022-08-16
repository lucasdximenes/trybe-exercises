import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Adicionar');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');
    const list = screen.getByRole('list');
    userEvent.type(input, 'Nova tarefa');
    userEvent.click(button);
    expect(list).toContainElement(screen.getByText('Nova tarefa'));
  });
});
