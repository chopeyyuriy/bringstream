import React, { useEffect, useState } from 'react';
import { CardBody, CardTitle, Button, Container } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { withNamespaces } from 'react-i18next';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import Actions from '../../store/actions'
import selectors from './../../selectors/index'
import { validate } from './../../helpers/validation'
import "./channels.scss";

const CreateChannel = (props) => {
	
	const { 
		onAddChannel, 
		errorMessgae, 
		history, 
		isChannelAddedSuccessfuly,
		resetIsChannelAddedValue,
	 } = props
	 
	const [isSent, setSentStatus] = useState(false)

	useEffect(()=>{
		setSentStatus(false)

		if(isChannelAddedSuccessfuly){
			history.push('/channels/getting-started')
			resetIsChannelAddedValue()
		}
		
	}, [errorMessgae, isChannelAddedSuccessfuly])

	const customValidation = value => validate.isChannelNameValid(value) ? true : `The field must not contain spaces.`;

	function onFormSubmit(event, values) {

		if(!validate.isChannelNameValid(values.name)) return

		const data = {
			name: values.name,
			subdomain: values.name.replace(/\s/g, ''),
		}

		setSentStatus(true)
		onAddChannel(data)
	}

	return (
		<>
			<div className="page-content">
				<Container fluid>
					<Breadcrumbs
						title={"dashboard"}
						breadcrumbItem={"create a new project"}
					/>
					<div className="overlay">
						<div className="create-form">
							<CardBody>
								<CardTitle className="text-center mb-3">What's the name of your project?</CardTitle>
								<AvForm onValidSubmit={(e, v) => { onFormSubmit(e, v) }}>
									<div className="form-group">
										<AvField
											name="name"
											className="form-control"
											placeholder="Your film, show, company name. You can change this later"
											type="text"
											required
											validate={{customValidation}}
										/>
									</div>
									<Button className="mt-1 waves-effect waves-light" color="primary" type="submit">
										{isSent && <i className="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i>}
										Create Project
									</Button>
								</AvForm>
							</CardBody>
						</div>
					</div>
				</Container>
			</div>
		</>
	)
}


const mapStateToProps = state => ({
	errorMessgae: selectors.common.errorMessage(state),
	isChannelAddedSuccessfuly: selectors.channels.isChannelAddedSuccessfuly(state),
})

const mapDispatchToProps = dispatch => ({
	onAddChannel: (data) => dispatch(Actions.channels.addChannelRequest(data)),
	resetIsChannelAddedValue: () => dispatch(Actions.channels.addChannelSucces(false)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(CreateChannel));
