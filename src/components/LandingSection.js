import { Avatar, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Wangyuxin!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size='s' name='Wang yuxin' src='https://media.licdn.com/dms/image/v2/D5603AQGc7o10_sQu-Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1683008782169?e=1730332800&v=beta&t=UZq4BnNTwAgwxeAdpuALDMu3XNZQlseBn2fxCuMfRP8' />
    <h1>{greeting}</h1>

    <VStack>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>


  </FullScreenSection>
);

export default LandingSection;
