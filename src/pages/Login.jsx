import React, { Component } from "react";
import { Card, Divider, AutoComplete, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <div style={{ textAlign: "center", paddingBottom: '10px'}}>
            <img style={{ width: "10vw" }} src="/img/dnet.png" alt="dnet" />
          </div>
          <Card hoverable style={{ borderRadius: "20px", width: 300, border: "-webkit-linear-gradient(right, #0065B3, green)"}}>
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
              <Divider plain style={{ color: "#0065B3" }}>
                D~Net
              </Divider>
              <div className="input-section">
                <label htmlFor="email">Email</label>
                <br />
                <AutoComplete style={{ width: "100%" }} placeholder="Email" />
                <div class="form-border"></div>
                <br />
                <label htmlFor="password">Password</label>
                <Input.Password
                  style={{ border: "none" }}
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                <div class="form-border"></div>
                <div className="forgot-password">
                  <span style={{ color: "#0065B3" }}>Forgot Password</span>
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
                  LOGIN
                </Button>
              </div>
              <div className="create-account">
                <span>doesn't have an account?</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
