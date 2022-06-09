import Container from "../../components/container";
import { DetailsDemand, LogoHeader, Main } from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Checkout = () => {
  const { Cart } = useContext(CartContext);

  return (
    <Container>
      <LogoHeader>
        <h1> House of Marvel</h1>
      </LogoHeader>
      <Main>
        <DetailsDemand>
          <h2> Details of the demand</h2>
          <section>
            <div>
              <span>SubTotal</span>
              <span>
                R${" "}
                {Cart.reduce(
                  (sum, curr) => curr.prices[0].price * curr.qtd + sum,
                  0
                )
                  .toFixed(2)
                  .replace(".", ",")}
              </span>
            </div>
            <div>
              <span>Desconto</span>
              <span>R$ 0,00</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$</h3>
            </div>
          </section>
          <div>
            <input type="text" placeholder="digite seu cupom" />
            <button>aplicar</button>
          </div>
          <button>Confirm</button>
        </DetailsDemand>
      </Main>
    </Container>
  );
};

export default Checkout;
