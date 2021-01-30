import React from 'react';
import { Link } from "react-router-dom";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import {
	Container,
	ListGroup,
	ListGroupItem,
	Button,
} from 'reactstrap';

const GettingStarted = () => {

	const publish = false

	return (
		<>
			<div className="page-content">
				<Container fluid>
					<Breadcrumbs
						title={"dashboard"}
						breadcrumbItem={"getting started"}
					/>
					<ListGroup>
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<div className="icon-wrapper">
									<i className="fas fa-search-dollar icon-font-size mr-4" />
								</div>
								<div>
									<h5 className="mb-1">Connect a bank account</h5>
									<span className="font-weight-lighter text-muted">Provide account details so you can collect revenue</span>
								</div>
							</div>
							<Button className="btn-size" color="success">Connect</Button>
						</ListGroupItem>
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<div className="icon-wrapper">
									<i className="far fa-credit-card icon-font-size mr-4" />
								</div>
								<div>
									<h5 className="mb-1">Add billing information</h5>
									<span className="font-weight-lighter text-muted">Include a credit card for billing purposes</span>
								</div>
							</div>
							<Button className="btn-size" color="success">Add</Button>
						</ListGroupItem>
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<div className="icon-wrapper">
									<i className="far fa-file-alt icon-font-size mr-4" />
								</div>
								<div>
									<h5 className="mb-1">Write customer agreements</h5>
									<span className="font-weight-lighter text-muted">Add your Privacy Policy and Terms Of Service</span>
								</div>
							</div>
							<Button className="btn-size" color="success">Write</Button>
						</ListGroupItem>
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<div className="icon-wrapper">
									<i className="fas fa-cloud-upload-alt icon-font-size mr-4" />
								</div>
								<div>
									<h5 className="mb-1">Upload videos</h5>
									<span className="font-weight-lighter text-muted">Add your videos and organize them into collections to get started</span>
								</div>
							</div>
							<Button className="btn-size" color="success">Upload</Button>
						</ListGroupItem>
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<div className="icon-wrapper">
									<i className="fas fa-photo-video icon-font-size mr-4" />
								</div>
								<div>
									<h5 className="mb-1">Create a product</h5>
									<span className="font-weight-lighter text-muted">Get your videos ready for selling with all kinds of customization</span>
								</div>
							</div>
							<Button className="btn-size" color="success">Create</Button>
						</ListGroupItem>
						<ListGroupItem className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<div className="icon-wrapper">
									<i className="fab fa-youtube icon-font-size mr-4" />
								</div>
								<div>
									<h5 className="mb-1">Publish your site</h5>
									<span className="font-weight-lighter text-muted">Your site will go live and be available to your audience</span>
								</div>
							</div>
							<Link to="/channels/settings">
								<Button
									className="btn-size"
									color={publish ? "warning" : "success"}
								>{publish ? "Unpublish" : "Publish"}</Button>
							</Link>
						</ListGroupItem>
					</ListGroup>
				</Container>
			</div>
		</>
	)
}

export default GettingStarted;
