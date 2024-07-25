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
} from "@react-email/components";

interface EmailTemplateProps {
  email: string;
  name: string;
  number: string;
  codePostal: string;
  consent?: boolean;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  number,
  codePostal,
}) => (
  <Html>
    <Head>
      <Preview>Asunto: Nuevo Interesado en Contacto</Preview>
      <Body>
        <Container>
          <Section className="w-full flex flex-column justify-center items-center">
            <Img style={logo} src={`${baseUrl}/public/logo.svg`} />
          </Section>
          <Section style={content}>
            <Heading
              as="h1"
              style={{
                fontSize: 32,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Asunto: Nuevo Interesado en Contacto Estimado equipo de 4SRENT.es,
            </Heading>
            <Heading as="h2">
              Tienen un nuevo interesado que desea ponerse en contacto con
              ustedes.
            </Heading>
            <Text style={{fontSize:13,}}>Nombre : {name}</Text>
            <Text style={{fontSize:13,}}>
              Correo electrónico : <a href={`mailto:${email}`}>{email}</a>
            </Text>
            <Text style={{fontSize:13,}}>
              Tel : <a href={`tel:${number}`}>{number}</a>
            </Text>
            <Text>
              <a href={`https://api.whatsapp.com/send?phone=${number}`}>
                Clicker ici pour ecrire {name} sur WhatsApp
              </a>
            </Text>
            <Heading as="h3">
              Por favor, pónganse en contacto con él cuando les sea más
              conveniente.
            </Heading>
          </Section>
          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`${baseUrl}/public/logo.svg`}
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2023 | 4SRENT Inc., Valencia, España, | www.4srent.es
          </Text>
        </Container>
      </Body>
    </Head>
  </Html>
);

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
