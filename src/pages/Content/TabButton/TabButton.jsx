import React from "react";
import classnames from "classnames";
import { Button, Nav, NavItem, NavLink } from "reactstrap";

const TabButton = (props) => {
  const { activeTab, toggleTab, countPlaylists, countVideos } = props;
  const buttons = [
    { name: "Upload", tab: "3" },
    { name: "Playlists", tab: "1", total: countPlaylists },
    { name: "Videos", tab: "2", total: countVideos },
  ];
  return (
    <Nav className="border-0 navi" vertical>
      {buttons.map((b, index) => {
        return (
          <NavItem
            key={index}
            className={b.name === "Upload" ? "w-100"  : "d-flex justify-content-between align-items-baseline"}
          >
            <NavLink
              className="px-0"
              className={classnames({
                active: activeTab === b.tab,
              })}
              onClick={() => {
                toggleTab(b.tab);
              }}
            >
              {b.name === "Upload" ? (
                <Button className="w-100 mb-4" color="success">
                  {b.name}
                </Button>
              ) : (
                <>
                  {" "}
                  <i className="dripicons-star mr-2"></i> {b.name}
                </>
              )}
            </NavLink>
            {b.name === "Upload" ? null : <span>{b.total || 0}</span>}
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default TabButton;