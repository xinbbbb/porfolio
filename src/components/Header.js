import { Box, HStack } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: boboxinb@hotmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/xinbbbb",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/yuxin-wang-b883b3101/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21587667/yuxin-wang",
  },
];

const Header = () => {
  // TODO 这里有个剪头函数，不知道为啥
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack
              spacing={4}
            >
              {socials.map((item) => {
                return (
                  <Box key={item.url}>
                    <a href={item.url} >
                      <FontAwesomeIcon icon={item.icon} size='2x' />
                    </a>
                  </Box>
                )
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Box>
                <a onClick={() => handleClick('projects')}>Projects</a>
              </Box>
              <Box>
                <a onClick={() => handleClick('contactme')}>Contact Me</a>
              </Box>
            </HStack>
          </nav>
        </HStack>
      </Box >
    </Box >
  );
};
export default Header;
