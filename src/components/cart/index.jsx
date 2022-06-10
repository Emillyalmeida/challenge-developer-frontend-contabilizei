import {
  ChakraProvider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Flex,
  Image,
  VStack,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { FaShoppingCart } from "react-icons/fa";
import { BsCartXFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import noImage from "../../assets/noImage.jpg";

const ModalCart = ({ isOpen, onClose }) => {
  const { RemoveToCart, addQtd, subQtd, Cart, sumTotal } =
    useContext(CartContext);

  const history = useHistory();

  return (
    <ChakraProvider resetCSS={false}>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          color="var(--color-main)"
          bgColor="var(--color-hover)"
          ml="auto"
          mt={["9vh", "9vh", "10vh"]}
          w={["320px", "320px", "400px"]}
          maxH="80vh"
          boxShadow="base"
        >
          <DrawerCloseButton
            bgcolor="var(--color-main)"
            color="var(--color-red-800)"
            _hover={{ bgColor: "var(--color-main)" }}
          />
          <DrawerHeader
            borderBottomWidth="1px"
            color="var(--color-red-600)"
            bgColor="var(--color-secundary)"
            display="flex"
            alignItems="center"
          >
            <FaShoppingCart size="2.5rem" /> <Heading ml="5px">Cart</Heading>
          </DrawerHeader>
          <DrawerBody mt="4">
            {Cart.length > 0 ? (
              Cart.map((item) => (
                <Flex
                  w="100%"
                  p="2"
                  justifyContent="space-between"
                  key={item.id}
                >
                  <Image
                    boxSize="100px"
                    objectFit="contain"
                    src={
                      item.images.length > 0
                        ? `${item.images[0].path}.${item.images[0].extension}`
                        : noImage
                    }
                    alt={item.title}
                  />
                  <VStack>
                    <Heading textAlign="center" fontSize="xl">
                      {item.title}
                    </Heading>
                    <span>
                      Price: US$
                      {item.prices[0].price}
                    </span>
                  </VStack>
                  <VStack spacing="2">
                    <Flex>
                      <Button
                        bgColor="var(--color-red-800)"
                        color="var(--color-secundary)"
                        fontSize="1.75rem"
                        minW="25px"
                        h="25px"
                        p="1"
                        fontFamily="mono"
                        _hover={{ bgColor: "var(--color-main)" }}
                        onClick={() => addQtd(item)}
                      >
                        +
                      </Button>
                      <Text w="20px" bgColor="white" textAlign="center">
                        {item.qtd}
                      </Text>
                      <Button
                        bgColor="var(--color-red-800)"
                        color="var(--color-secundary)"
                        fontSize="1.75rem"
                        minW="25px"
                        h="25px"
                        p="1"
                        fontFamily="mono"
                        _hover={{ bgColor: "var(--color-main)" }}
                        onClick={() => subQtd(item)}
                      >
                        -
                      </Button>
                    </Flex>

                    <Button
                      bgColor="var(--color-red-800)"
                      color="var(--color-secundary)"
                      _hover={{ bgColor: "var(--color-main)" }}
                      cursor="poinrer"
                      onClick={() => RemoveToCart(item)}
                    >
                      {" "}
                      Remove{" "}
                    </Button>
                  </VStack>
                </Flex>
              ))
            ) : (
              <Flex flexDir="column" alignItems="center" pb="8">
                <Heading textAlign="center" size="lg" pb="3">
                  Your Cart is empty
                </Heading>
                <BsCartXFill fontSize="5rem" />
              </Flex>
            )}
          </DrawerBody>
          {Cart.length > 0 ? (
            <Box>
              <VStack pb="4" borderTop="1px" borderColor="var(--color-main)">
                <Flex
                  justifyContent="space-between"
                  w="95%"
                  paddingX="4"
                  pt="2"
                >
                  <Text fontSize="xl">Total of the demand</Text>{" "}
                  <Text fontSize="xl" fontWeight="bold">
                    R$ {sumTotal().toFixed(2).replace(".", ",")}
                  </Text>
                </Flex>

                <Button
                  w="90%"
                  bgColor="var(--color-main)"
                  color="var(--color-secundary)"
                  _hover={{ bgColor: "var(--color-red-800)" }}
                  cursor="poinrer"
                  fontSize="xl"
                  onClick={() => history.push("/checkout")}
                >
                  Finished demand
                </Button>
              </VStack>
            </Box>
          ) : (
            <></>
          )}
        </DrawerContent>
      </Drawer>
    </ChakraProvider>
  );
};

export default ModalCart;
