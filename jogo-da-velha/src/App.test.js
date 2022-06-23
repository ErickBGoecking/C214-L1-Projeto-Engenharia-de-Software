import {render, screen} from "@testing-library/react";
import  userEvent from "@testing-library/user-event";

import {App} from ".";

describe('Testes no app', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText("Jogo da Velha");
    expect(linkElement).toBeInTheDocument();
  });
})

