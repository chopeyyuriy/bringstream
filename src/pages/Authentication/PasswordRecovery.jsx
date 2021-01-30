import React, { useEffect, useState } from 'react';
import { Row, Col, Alert, Card, CardBody, Container } from "reactstrap";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";
import Actions from '../../store/actions'
import selectors from './../../selectors'

const ForgetPasswordPage = React.memo((props) => {
  const { history, onSendNewPassword, successMessage, errorMessage } = props
  const [isSent, setSentStatus] = useState(null)
  const [responseMessage, setResponseMessage] = useState('')

  const path = history.location.pathname.split('/');
  const hash = path[path.length - 1];

  useEffect(() => {
    if (hash && isSent === null) {
      onSendNewPassword({"hash": hash})
      setSentStatus(true)
    }

    if (successMessage || errorMessage) {
      setResponseMessage(successMessage || errorMessage)
      setSentStatus(false)
    }
  }, [successMessage, errorMessage])

  const renderCurrentMessage = () => {
    if (isSent === true) {
      return (
        <div className="text-center mb-4">
          <span className="mr-1">Please wait</span>
          <i className="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i>
        </div>
      )
    }

    if (isSent === false) {
      return (
        <div className="text-center mb-4">
          <span className="mr-1">{responseMessage}</span>
        </div>
      )
    }

  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark"><i className="fas fa-home h2"></i></Link>
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
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img src={logo} alt="" className="rounded-circle" height="34" />
                        </span>
                      </div>
                    </Link>
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
                    {renderCurrentMessage()}
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p> Go back to <Link to="/login" className="font-weight-medium text-primary">Login</Link></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
})


const mapStateToProps = (state) => ({
  errorMessage: selectors.common.errorMessage(state),
  successMessage: selectors.common.successMessage(state),
})

const mapDispathcToProps = dispatch => ({
  onForgotPassword: (data) => dispatch(Actions.authorization.forgotPasswordRequest(data)),
  onSendNewPassword: (value) => dispatch(Actions.authorization.sendNewPasswordRequest(value)),
})


export default withRouter(
  connect(mapStateToProps, mapDispathcToProps)(ForgetPasswordPage)
);
