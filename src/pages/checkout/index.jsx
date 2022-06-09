import Container from "../../components/container";
import { DetailsDemand, LogoHeader, Main } from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { useState } from "react";

const Checkout = () => {
  const { sumTotal } = useContext(CartContext);
  const [discount, setDiscount] = useState(0);

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
              <span>R$ {sumTotal().toFixed(2).replace(".", ",")}</span>
            </div>
            <div>
              <span>Desconto</span>
              <span> - {discount.toFixed(2).replace(".", ",")}</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ {(sumTotal() - discount).toFixed(2).replace(".", ",")}</h3>
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
