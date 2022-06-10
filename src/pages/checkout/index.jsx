import Container from "../../components/container";
import { DetailsDemand, LogoHeader, Main } from "./style";
import { useState } from "react";

import useCart from "../../providers/cart";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { useToast, ChakraProvider } from "@chakra-ui/react";

const Checkout = () => {
  const history = useHistory();
  const { sumTotal } = useCart();
  const [discount, setDiscount] = useState(0);
  const [discountValue, setDiscountValue] = useState("");

  const toast = useToast();

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
          <h2> Details of the Order</h2>
          <section>
            <button onClick={() => history.push("/")}>
              <FaArrowLeft />
            </button>
            <div>
              <span>SubTotal</span>
              <span>US$ {sumTotal().toFixed(2).replace(".", ",")}</span>
            </div>
            <div>
              <span className="red">Discount</span>
              <span className="red">
                {" "}
                - {discount.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>
                US$ {(sumTotal() - discount).toFixed(2).replace(".", ",")}
              </h3>
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
            {!!errors.Discount && (
              <span className="red">{errors.Discount?.message}</span>
            )}
            {!!discountValue && (
              <p>The discount "{discountValue}" was add with success</p>
            )}
          </form>
          <ChakraProvider>
            <button
              onClick={() =>
                toast({
                  title: "Completed Order",
                  description: "Your order was concluded with success",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              Confirm
            </button>
          </ChakraProvider>
        </DetailsDemand>
      </Main>
    </Container>
  );
};

export default Checkout;
