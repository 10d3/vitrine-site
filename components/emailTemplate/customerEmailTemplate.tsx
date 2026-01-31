/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type * as React from "react";

interface EmailTemplateProps {
  email?: string;
  name?: string;
  number?: string;
  codePostal?: string;
  consent?: boolean;
}

const baseUrl = 'https://www.isolatucasa.com';

export const customerEmailTemplate = ({
  name,
  email,
  number,
  codePostal,
}: EmailTemplateProps) => (
  <html>
    <body style={main}>
      <div style={container}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <img width="100" height="auto" src="https://isolatucasa.com/logo.png" alt="Isola Logo" style={{ maxWidth: '100%' }} />
        </div>

        <div style={content}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center", margin: "20px 0" }}>
            Gracias por contactarnos.
          </h1>
          <h2 style={{ fontSize: "24px", textAlign: "center", margin: "10px 0" }}>
            Hemos recibido sus datos y nos pondremos en contacto con usted en breve.
          </h2>
          <h3 style={{ fontSize: "20px", textAlign: "center", margin: "10px 0" }}>
            Equipo de ISOLA
          </h3>
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

// Styles
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

const content = {
  // border: "1px solid rgb(0,0,0, 0.1)", // Not strictly present in original but often good for containment, keeping minimal as per original visual intent likely
  padding: "20px"
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};

const image = {
  maxWidth: "100%",
};

customerEmailTemplate.PreviewProps = {
  name: "Alan Turing",
  email: "alan.turing@example.com",
} as EmailTemplateProps;

export default customerEmailTemplate;