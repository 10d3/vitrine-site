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

const baseUrl = 'https://www.4srent.es';

export const customerEmailTemplate = ({
  name,
  email,
  number,
  codePostal,
} : EmailTemplateProps) => (
  <Html>
    <Head>
      <Preview>Gracias por contactarnos.</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section className="w-full flex flex-column justify-center items-center">
              <Img src={`https://4srent.es/logo.svg`} />
            </Section>
            <Section>
              <Heading as="h1">Gracias por contactarnos.</Heading>
              <Heading as="h2">
                Hemos recibido sus datos y nos pondremos en contacto con usted
                en breve.
              </Heading>
              <Heading as="h3">Equipo de ISOLA</Heading>
            </Section>
            <Section>
              <Img src="https://4srent.es/logo.svg" />
            </Section>
            <Text className="text-center text-[0.8rem] text-[rgb(0,0,0, 0.7)]">
              © 2023 | ISOLA Inc., Valencia, España, | www.4srent.es
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Head>
  </Html>
);

customerEmailTemplate.PreviewProps = {
  username: "alanturing",
  userImage: `localhost:3000/logo.svg`,
  invitedByUsername: "Alan",
  invitedByEmail: "alan.turing@example.com",
  teamName: "Enigma",
  teamImage: `${baseUrl}/static/vercel-team.png`,
  inviteLink: "https://vercel.com/teams/invite/foo",
  inviteFromIp: "204.13.186.218",
  inviteFromLocation: "São Paulo, Brazil",
} as EmailTemplateProps;

export default customerEmailTemplate;