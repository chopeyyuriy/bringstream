import React from 'react';
import { CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Upload = () => {
    return (
        <div className="overlay">
          <CardBody>
        <CardTitle className="text-center mb-3 mt-3">
          Upload
        </CardTitle>
        <div className="text-center mb-3">
          <Link to="/content">
            <Button color="info" className="waves-effect">
              Upload
            </Button>
          </Link>
        </div>
      </CardBody>
        </div>
    )
}

export default Upload;