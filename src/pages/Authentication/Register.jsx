import React, { useEffect, useState } from 'react';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-img.png";
import logoImg from "../../assets/images/logo.svg";
import { connect } from "react-redux";
import Actions from '../../store/actions'
import { AvForm, AvField } from "availity-reactstrap-validation";
import selectors from './../../selectors'

const Register = (props) => {
  const { onRegisterUser, successMessage } = props
  const [isSuceessScreen, setSuccessScreen] = useState(false)

  useEffect(() => {
    if (successMessage) {
      setSuccessScreen(true)
    }
  }, [successMessage])

  function onFormSubmit(event, values) {

    const data = {
      email: values.email,
      givenName: values.firstName,
      familyName: values.lastName,
    }

    onRegisterUser(data)
  }

  const renderSuccessScreen = () => {
    return (
      <div className="text-center">
        <p className="mb-3">Registration successfully, pleas check your email!</p>
      </div>
    )
  }

  const renderForm = () => {
    return (
      <AvForm
        className="form-horizontal"
        onValidSubmit={(e, v) => { onFormSubmit(e, v) }}
      >
        {props.user && props.user ? (
          <Alert color="success">Register User Successfully</Alert>
        ) : null}
        {props.registrationError &&
          props.registrationError ? (
            <Alert color="danger">{props.registrationError}</Alert>
          ) : null}
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
        <div className="form-group">
          <AvField
            name="firstName"
            label="First Name"
            type="text"
            required
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <AvField
            name="lastName"
            label="Last Name"
            type="text"
            required
            placeholder="Enter your last name"
          />
        </div>
        <div className="mt-4">
          <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Register</button>
        </div>
        <div className="mt-4 text-center">
          <p className="mb-0">By registering you agree to the Skote{" "}
            <Link to="#" className="text-primary">Terms of Use</Link>
          </p>
        </div>
      </AvForm>
    )
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
                        <h5 className="text-primary">Free Register</h5>
                        <p>Get your Bring Stream account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img src={logoImg} alt="" className="rounded-circle" height="34" />
                      </span>
                    </div>
                  </div>
                  <div className="p-2">
                    {isSuceessScreen ? renderSuccessScreen() : renderForm()}
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?
                  <Link to="/login" className="font-weight-medium text-primary"> Login</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  successMessage: selectors.common.successMessage(state),
})

const mapDispatchToProps = dispatch => ({
  onRegisterUser: (data) => dispatch(Actions.authorization.registerUserRequest(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
