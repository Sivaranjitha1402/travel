import React, { useState } from "react";
// import "../Login/index.scss";
import { useHistory } from "react-router";
import { Form, Input, Typography, Col, Row, Button, message } from "antd";

const { Text, Title } = Typography;
const { Item } = Form;
const Booking = ({ form }) => {

    const [open, setOpen] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {

    };
    return (
        <div className="content">
            <div className="maincontent">
                <Form>
                    <Title>Login</Title>
                    <Col>
                        <Item label={<Text>Email</Text>} colon={false} rules={[{ required: true, message: "Enter email" }]}>
                            {(
                                <Input
                                    onWheel={(event) => event.currentTarget.blur()}
                                    placeholder="Email"
                                    style={{ marginLeft: "3.6rem", width: "85%" }}
                                />
                            )}
                        </Item>
                    </Col>
                    <Col>
                        <Item label={<Text>Password</Text>} colon={false}
                            rules={[{ required: true, message: "Enter password" }]}>
                            {(
                                <Input
                                    onWheel={(event) => event.currentTarget.blur()}
                                    type="password"
                                    placeholder="Password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                />
                            )}
                        </Item>
                    </Col>
                    <Row type="flex" justify="space-between" style={{ marginTop: "20px" }}>
                        <Col span={6}>
                            <Button type="primary" onClick={handleSubmit}>
                                Confirm Booking</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};
export default Booking;