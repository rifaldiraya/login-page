import React from "react";
import { Card, Divider, AutoComplete, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function ChangePassword() {
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
                Forgot Password
              </span>
            </div>
            <div className="content-forgot">
              <span>
                We have sent a verification code to your Emaill Please check
                your inbox or spambox
              </span>
            </div>
            <Divider plain style={{ color: "#D2C9CA" }}>
              d~net
            </Divider>
            <div className="input-section">
              <label
                style={{ fontSize: "12px", fontFamily: "Raleway SemiBold" }}
                htmlFor="new-password"
              >
                New Password
              </label>
              <Input.Password
                style={{ border: "none" }}
                placeholder=""
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <div class="form-border"></div>
              <br />
              <label
                style={{ fontSize: "12px", fontFamily: "Raleway SemiBold" }}
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <Input.Password
                style={{ border: "none" }}
                placeholder=""
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <div class="form-border"></div>
              <br />
              <label
                style={{ fontSize: "12px", fontFamily: "Raleway SemiBold" }}
                htmlFor="verification-code"
              >
                Verification Code
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
                  Reset Password
                </Button>
              </a>
              <br />
            </div>
            <div className="create-account">
              <span>send new verification code</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ChangePassword;
