import React from "react";
import { Typography } from "antd";
import MailImg from "../../images/email.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>Movie App</div>
      <div>©2022, Movie, Inc. or its affiliates</div>
      <div>
        <small>
          <b style={{ color: "#fff" }}>designed and created by madan ghimire</b>
        </small>
        <div style={{ marginLeft: "1.5rem" }}>
          <a href="mailto:mail2madanghimire@gmail.com">
            <Typography
              style={{
                color: "#fff",
                fontSize: "15px",
                marginBottom: "15px",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                  marginBottom: "-2px",
                }}
                src={MailImg}
                width={15}
                height={15}
                alt="img"
              />{" "}
              mail2madanghimire
            </Typography>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
