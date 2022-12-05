import { Container, Text } from "@nextui-org/react";
import Head from "next/head";
import { FC, ReactNode } from "react";
import { Top } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || `Pokemon App`}</title>
        <meta name="author" content="Luis H Ron" />
        <meta name="description" content="Lorem" />
      </Head>
      <Top />
      <main>{children}</main>
      <footer>
        <Container css={{ borderTop: "1px solid gray" }} gap={2}>
          <Text>
            Pokémon and Pokémon character names are trademarks of Nintendo.
          </Text>
        </Container>
      </footer>
    </>
  );
};
