import React from "react";
import { CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

const EmptyMessage = (props) => {
  const { setActiveTab, activeTab } = props;

  const toggleToUpload = () => {
    setActiveTab("3");
  };

  return (
    <div className="overlay">
      <CardBody>
        <CardTitle className="text-center mb-3 mt-3">
          {activeTab === "1"
            ? "Upload your files, then organize them and started with distibution"
            : "Upload your first video to get started!"}
        </CardTitle>
        <div className="text-center mb-3">
          <Link to="/content">
            <Button
              color="info"
              className="waves-effect"
              onClick={activeTab === "1" ? null : toggleToUpload}
            >
              {activeTab === "1"
                ? "Playlists"
                : "Upload videos"}
            </Button>
          </Link>
        </div>
      </CardBody>
    </div>
  );
};

export default EmptyMessage;
