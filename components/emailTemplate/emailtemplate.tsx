import type * as React from "react";

interface EmailTemplateProps {
  email: string;
  name: string;
  number: string;
  codePostal: string;
  consent?: boolean;
}

const baseUrl = 'https://www.isolatucasa.com';

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  number,
  codePostal,
}) => (
  <html>
    <body style={main}>
      <div style={container}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <img width="100" height="auto" src="https://isolatucasa.com/logo.png" alt="Isola Logo" style={{ maxWidth: '100%' }} />
        </div>

        <div style={content}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            Asunto: Nuevo Interesado en Contacto Estimado equipo de
            isola.es,
          </h1>
          <h2>
            Tienen un nuevo interesado que desea ponerse en contacto con
            ustedes.
          </h2>
          <p style={{ fontSize: "13px" }}>Nombre : {name}</p>
          <p style={{ fontSize: "13px" }}>
            Correo electrónico : <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p style={{ fontSize: "13px" }}>
            Tel : <a href={`tel:${number}`}>{number}</a>
          </p>
          <p>
            <a href={`https://api.whatsapp.com/send?phone=${number}`}>
              Clicker ici pour ecrire {name} sur WhatsApp
            </a>
          </p>
          <h3>
            Por favor, pónganse en contacto con él cuando les sea más
            conveniente.
          </h3>
          <h3>Gracias.</h3>
        </div>

        <div style={containerImageFooter}>
          <img
            style={image}
            width="100"
            height="auto"
            src="https://isolatucasa.com/logo.png"
            alt="Isola Footer Logo"
          />
        </div>

        <p style={{ textAlign: "center", fontSize: "0.8rem", color: "rgba(0,0,0, 0.7)" }}>
          © 2023 | ISOLA Inc., Valencia, España, | www.isolatucasa.com
        </p>
      </div>
    </body>
  </html>
);

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  margin: 0,
  padding: 0
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
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
  padding: "20px"
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

export default EmailTemplate;
