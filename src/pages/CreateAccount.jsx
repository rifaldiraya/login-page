import React from "react";
import { Card, Divider, AutoComplete, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function CreateAccount() {
  return (
    <div>
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
              width: 300,
              border: "-webkit-linear-gradient(right, #0065B3, green)",
            }}
          >
            <div className="card-data">
              <div className="title-forgot">
                <span
                  style={{
                    color: "#0065B3",
                  }}
                >
                  Create new account
                </span>
              </div>
              <Divider plain style={{ color: "#D2C9CA" }}>
                d~net
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
                <div class="form-border"></div>
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
                <div class="form-border"></div>
              </div>
              <div className="btn-login">
                <a href="/login">
                  <Button
                    type="primary"
                    style={{
                      width: "50%",
                      border: "none",
                      fontSize: "12px",
                      paddingBottom: "10px",
                      background:
                        "-webkit-linear-gradient(right, #0065B3, #01AEF0)",
                    }}
                    shape="round"
                    size="large"
                  >
                    Create Account
                  </Button>
                </a>
                <br />
              </div>
              <div className="content-forgot">
                <span>by clikcing "Create Account" I agree to </span>
                <span style={{ color: "#0065B1" }}>Terms of Service </span>
                <span>
                  and
                  <span style={{ color: "#0065B1" }}> Privacy Policy</span>
                </span>
                <br />
                <br />
                <span>Already have an account?</span>
                <div className="create-account">
                  <a href="/login">
                    <span>Sign In</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
