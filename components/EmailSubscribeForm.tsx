import { FormEvent, useState, useEffect, useRef } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  Heading,
  Text,
  Container,
  Flex,
  CloseButton,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";

type SubscribeState = "init" | "submitting" | "success" | "fail";

interface Props {
  showCloseButton?: boolean;
}

export default function DialogSubscribe({ showCloseButton = true }: Props) {
  const inputEl = useRef<HTMLInputElement>(null);
  const [showSubscribe, setShowSubscribe] = useState<boolean>(false);
  const [subscribeState, setSubscribeState] = useState<SubscribeState>("init");

  const subscribeMessage: { [key: string]: string } = {
    init: "Never any spam 🙅‍♂️",
    success: "Thanks for signing up! A welcome email has been sent your way 🚀",
    fail: "Oh no an error! 😭 Please try again later.",
  };

  const bgColor = useColorModeValue("white", "gray.900");
  const inputColor = useColorModeValue("gray.700", "gray.300");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubscribeState("submitting");

    const response = await fetch("/api/subscription", {
      body: JSON.stringify({
        email: inputEl?.current?.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!response.ok) return setSubscribeState("fail");

    localStorage.setItem("subscribed", "true");
    return setSubscribeState("success");
  };

  const handleClose = () => {
    sessionStorage.setItem("subscribeDeclined", "true");
    return setShowSubscribe(false);
  };

  useEffect(() => {
    const subscribeDeclined = sessionStorage.getItem("subscribeDeclined");
    const subscribed = localStorage.getItem("subscribed");
    if (!subscribeDeclined && !subscribed) return setShowSubscribe(true);
  }, []);

  return showSubscribe ? (
    <Flex
      position={{ base: "relative", sm: "fixed" }}
      top={{ base: 0, sm: "auto" }}
      bottom={{ base: "auto", sm: 5 }}
      right={{ base: "auto", sm: 5 }}
      width={{ base: "100%", sm: "auto" }}
      align="center"
      justify="center"
      bg={bgColor}
      borderRadius={{ base: "none", sm: "lg" }}
      borderBottom={{ base: "1px solid #909090", sm: "none" }}
      boxShadow={{ base: "none", sm: "lg" }}
      maxW="400px"
    >
      <Container maxW="lg" p={{ base: "24px 32px 4px 32px", sm: 6 }}>
        {showCloseButton && (
          <CloseButton
            aria-label="Close"
            size="sm"
            sx={{
              position: "absolute",
              top: 2,
              right: 2,
            }}
            onClick={handleClose}
          />
        )}
        <Show above="sm">
          <Heading
            as="h2"
            fontSize={{ base: "xl", sm: "2xl" }}
            textAlign="center"
            mb={5}
          >
            {"Subscribe to the Newsletter"}
          </Heading>
        </Show>
        <Stack
          direction="row"
          as="form"
          spacing={{ base: "4px", sm: "12px" }}
          onSubmit={handleSubmit}
        >
          <FormControl>
            <Input
              variant="solid"
              borderWidth={1}
              color={inputColor}
              borderColor={inputColor}
              _placeholder={{
                color: "gray.400",
              }}
              id="email"
              type="email"
              required
              placeholder="Your Email"
              aria-label="Your Email"
              ref={inputEl}
              disabled={subscribeState !== "init"}
            />
          </FormControl>
          <FormControl w="40%">
            <Button
              w="100%"
              colorScheme={subscribeState === "success" ? "green" : "blue"}
              isLoading={subscribeState === "submitting"}
              type={subscribeState === "success" ? "button" : "submit"}
              disabled={subscribeState !== "init"}
            >
              {subscribeState === "success" ? (
                <span role="img" aria-label="checkmark">
                  ✅
                </span>
              ) : (
                "Sign Up"
              )}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign="center"
          color={subscribeState === "fail" ? "blue.500" : inputColor}
        >
          {subscribeMessage[subscribeState]}
        </Text>
      </Container>
    </Flex>
  ) : null;
}
