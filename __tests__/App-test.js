import renderer from 'react-test-renderer';
import App from '../App';
import { fireEvent, render } from '@testing-library/react-native';
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

test('teste de snapshot', () => {
    const tela = renderer.create(<App />).toJSON();
    expect(tela).toMatchSnapshot();
});

describe("Teste de Navegação", () => {
    it("Navegação de Index para Campus", () => {
        const { getByText, getByTestId } = render(<App />);

        const botao = getByTestId("botão1")
        fireEvent.press(botao)

        expect(getByText('Campus Apodi')).toBeTruthy()
    })

    it("Navegação de Index para Campus", () => {
        const { getByText, getByTestId } = render(<App />);

        const botao = getByTestId("botão2")
        fireEvent.press(botao)

        expect(getByText('Campus Apodi')).toBeTruthy()
    })

    it("Navegação de Index para Campus", () => {
        const { getByText, getByTestId } = render(<App />);

        const botao = getByTestId("botão3")
        fireEvent.press(botao)

        expect(getByText('Campus Apodi')).toBeTruthy()
    })

    it("Navegação de Index para Campus", () => {
        const { getByText, getByTestId } = render(<App />);

        const botao = getByTestId("botão4")
        fireEvent.press(botao)

        expect(getByText('Campus Apodi')).toBeTruthy()
    })
})