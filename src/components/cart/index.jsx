import {
  ChakraProvider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Center,
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

const ModalCart = ({ isOpen, onClose }) => {
  const { RemoveToCart, addQtd, subQtd, Cart } = useContext(CartContext);

  return (
    <ChakraProvider resetCSS={false}>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          color="var(--color-main)"
          bgColor="var(--color-hover)"
          ml="auto"
          mt={["9vh", "9vh", "10vh"]}
          w={["300px", "300px", "400px"]}
          maxH="80vh"
          boxShadow="base"
        >
          <DrawerCloseButton
            bgcolor="var(--color-red-800)"
            color="var(--color-secundary)"
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
                <Flex w="100%" p="2" justifyContent="space-between">
                  <Image
                    boxSize="100px"
                    objectFit="contain"
                    src={`${item.images[0].path}.${item.images[0].extension}`}
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
              <Center>
                <Heading> No products in the Cart</Heading>
              </Center>
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
                  <Text>Total of the demand</Text>{" "}
                  <Text>
                    R${" "}
                    {Cart.reduce(
                      (sum, curr) => curr.prices[0].price * curr.qtd + sum,
                      0
                    )
                      .toFixed(2)
                      .replace(".", ",")}
                  </Text>
                </Flex>

                <Button
                  w="90%"
                  bgColor="var(--color-main)"
                  color="var(--color-secundary)"
                  _hover={{ bgColor: "var(--color-red-800)" }}
                  cursor="poinrer"
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
