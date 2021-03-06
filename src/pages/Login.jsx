import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, AutoComplete, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <div style={{ textAlign: "center", paddingBottom: "10px" }}>
            <img
              style={{ width: "10vw", paddingBottom: "10px" }}
              src="/img/dnet.png"
              alt="dnet"
            />
          </div>
          <Card
            hoverable
            style={{
              borderRadius: "20px",
              width: 320,
              border: "-webkit-linear-gradient(right, #0065B3, green)",
            }}
          >
            <div className="card-data">
              <div className="title">
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#0065B3",
                  }}
                >
                  LOGIN
                </span>
              </div>
              <Divider plain style={{ color: "#D2C9CA" }}>
                login for DWP applications
              </Divider>
              <div className="input-section">
                <label
                  style={{ fontSize: "12px", fontFamily: "Raleway SemiBold" }}
                  htmlFor="email"
                >
                  Email
                </label>
                <br />
                <AutoComplete style={{ width: "100%" }} placeholder="" />
                <div className="form-border"></div>
                <br />
                <label
                  style={{ fontSize: "12px", fontFamily: "Raleway SemiBold" }}
                  htmlFor="password"
                >
                  Password
                </label>
                <Input.Password
                  style={{ border: "none" }}
                  placeholder=""
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                <div className="form-border"></div>
                <div className="forgot-password">
                  <Link to="/changepassword">
                    <span style={{ fontSize: "12px", color: "#0065B3" }}>
                      Forgot Password?
                    </span>
                  </Link>
                </div>
              </div>
              <div className="btn-login">
                <Button
                  type="primary"
                  style={{
                    width: "50%",
                    border: "none",
                    background:
                      "-webkit-linear-gradient(right, #0065B3, #01AEF0)",
                  }}
                  shape="round"
                  size="large"
                >
                  Login
                </Button>
              </div>
              <div className="create-account">
                <Link to="/create">
                  <span>Doesn't have an account?</span>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
