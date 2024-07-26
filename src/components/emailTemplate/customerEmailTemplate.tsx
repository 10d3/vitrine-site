import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface EmailTemplateProps {
  email?: string;
  name?: string;
  number?: string;
  codePostal?: string;
  consent?: boolean;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const customerEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  number,
  codePostal,
}) => (
  <Html>
    <Head>
      <Preview>Asunto: Nuevo Interesado en Contacto</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section className="w-full flex flex-column justify-center items-center">
              <Img src={`${baseUrl}/logo.svg`} />
            </Section>
            <Section>
              <Heading as="h1">
                Asunto: Nuevo Interesado en Contacto Estimado equipo de
                4SRENT.es,
              </Heading>
              <Heading as="h2">
                Tienen un nuevo interesado que desea ponerse en contacto con
                ustedes.
              </Heading>
              <Heading as="h3">
                Por favor, pónganse en contacto con él cuando les sea más
                conveniente.
              </Heading>
              <Heading as="h3">Gracias.</Heading>
            </Section>
            <Section>
              <Img src="/public/logo.svg" />
            </Section>
            <Text className="text-center text-[0.8rem] text-[rgb(0,0,0, 0.7)]">
              © 2023 | 4SRENT Inc., Valencia, España, | www.4srent.es
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Head>
  </Html>
);
