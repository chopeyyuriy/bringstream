import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Media, Button } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { withRouter } from 'react-router-dom';
import Breadcrumb from '../../components/Common/Breadcrumb';
import noAvatar from '../../assets/images/users/no-avatar.png';
import { connect } from 'react-redux';
import Actions from '../../store/actions'
import selectors from './../../selectors/index'

const UserProfile = (props) => {
	const { user, onChangeUserProfile, onGetUserProfile } = props

	const firstName = user?.given_name || ''
	const lastName = user?.family_name || ''
	const userId = user?.id || ''
	const userEmail = user?.email || ''

	useEffect(() => {
		onGetUserProfile()
	}, [user, onGetUserProfile]);

	function onFormSubmit(event, values) {
		const data = {
			given_name: values.firstName,
			family_name: values.lastName,
		}
		onChangeUserProfile(data)
	}

	return (
		<React.Fragment>
			<div className="page-content">
				<Container fluid>
					<Breadcrumb title="Home" breadcrumbItem="Profile" />
					<Row>
						<Col lg="12">
							<Card>
								<CardBody>
									<Media>
										<div className="mr-3">
											<img src={noAvatar} alt={firstName} className="avatar-md rounded-circle img-thumbnail" />
										</div>
										<Media body className="align-self-center">
											<div className="text-muted">
												{/* <h5>{firstName}</h5> */}
												<p className="mb-1">{userEmail}</p>
												<p className="mb-0">ID: {userId}</p>
											</div>
										</Media>
									</Media>
								</CardBody>
							</Card>
						</Col>
					</Row>

					<h4 className="card-title mb-4">Info</h4>

					<Card>
						<CardBody>
							<AvForm className="form-horizontal" onValidSubmit={(e, v) => { onFormSubmit(e, v) }}>
								<div className="form-group">
									<AvField
										name="firstName"
										label="First Name"
										value={firstName}
										className="form-control"
										placeholder="Enter First Name"
										type="text"
										required
									/>
									<AvField
										name="lastName"
										label="Last Name"
										value={lastName}
										className="form-control"
										placeholder="Enter Last Name"
										type="text"
										required
									/>
								</div>
								<div className="text-center mt-4">
									<Button type="submit" className="w-md" color="primary">Save</Button>
								</div>
							</AvForm>
						</CardBody>
					</Card>
				</Container>
			</div>
		</React.Fragment>
	);
}


const mapStateToProps = state => ({
	user: selectors.profile.user(state)
})

const mapDispatchToProps = dispatch => ({
	onGetUserProfile: () => dispatch(Actions.profile.getUserProfileRequest()),
	onChangeUserProfile: (data) => dispatch(Actions.profile.changeUserProfileRequest(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));