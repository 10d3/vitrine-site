import * as React from "react";

export default function Email() {
  return (
    <html>
      <body style={main}>
        <div style={container}>
          <a
            href="https://example.com"
            style={button}
          >
            Click me
          </a>
        </div>
      </body>
    </html>
  );
}

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

const button = {
  background: "#000",
  color: "#fff",
  padding: "12px 20px",
  textDecoration: "none",
  borderRadius: "4px",
  display: "inline-block",
};
