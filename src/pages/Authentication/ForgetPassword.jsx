import React from 'react';
import { Row, Col, Alert, Card, CardBody, Container } from "reactstrap";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";
import Actions from '../../store/actions'
import { AvForm, AvField } from "availity-reactstrap-validation";

const ForgetPasswordPage = (props) => {

  function onFormSubmit(event, values) {
    const data = {
      email: values.email,
    }
    props.onForgotPassword(data)
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <i className="fas fa-home h2"></i>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-soft-primary">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Bring Stream.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img src={logo} alt="" className="rounded-circle" height="34" />
                      </span>
                    </div>
                  </div>
                  <div className="p-2">
                    {props.forgetError && props.forgetError ? (
                      <Alert color="danger" style={{ marginTop: "13px" }}>
                        {props.forgetError}
                      </Alert>
                    ) : null}
                    {props.forgetSuccessMsg ? (
                      <Alert color="success" style={{ marginTop: "13px" }}>
                        {props.forgetSuccessMsg}
                      </Alert>
                    ) : null}
                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => onFormSubmit(e, v)}
                    >
                      <div className="form-group">
                        <AvField
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>
                      <Row className="form-group">
                        <Col className="text-right">
                          <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                        </Col>
                      </Row>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p> Go back to <Link to="login" className="font-weight-medium text-primary">Login</Link></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}


const mapDispathcToProps = dispatch => ({
  onForgotPassword: (data) => dispatch(Actions.authorization.forgotPasswordRequest(data))
})


export default withRouter(
  connect(null, mapDispathcToProps)(ForgetPasswordPage)
);
