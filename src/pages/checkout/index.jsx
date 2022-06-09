import Container from "../../components/container";
import { DetailsDemand, LogoHeader, Main } from "./style";
import { useContext, useState } from "react";
import { CartContext } from "../../providers/cart";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Checkout = () => {
  const { sumTotal } = useContext(CartContext);
  const [discount, setDiscount] = useState(0);
  const [discountValue, setDiscountValue] = useState("");

  const schema = yup.object().shape({
    Discount: yup
      .string()
      .min(5, "Discount invalid! Need to contain at least 5 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const { Discount } = data;
    Discount.length > 12
      ? setDiscount(sumTotal() * 0.2)
      : setDiscount(sumTotal() * 0.1);

    setDiscountValue(Discount);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Do you have cupom?</label>
            <div>
              <input
                type="text"
                placeholder="digite seu cupom"
                {...register("Discount")}
              />
              <button type="submit">aplicar</button>
            </div>
            {!!errors.Discount && <span>{errors.Discount?.message}</span>}
            {!!discountValue && (
              <p>The discount {discountValue} was add with success</p>
            )}
          </form>
          <button>Confirm</button>
        </DetailsDemand>
      </Main>
    </Container>
  );
};

export default Checkout;
