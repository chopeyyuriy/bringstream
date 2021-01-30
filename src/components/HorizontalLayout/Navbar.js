import React, {useEffect } from "react";
import {
  // Row,
  // Col,
  Collapse,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
// import classname from "classnames";

//i18n
import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";

const Navbar = (props) => {
//   const [dashboard, setdashboard] = useState(false);
//   const [settings, setSettings] = useState(false);

  // const [ui, setui] = useState(false);
  // const [product, setProduct] = useState(false);
  // const [email, setemail] = useState(false);
  // const [ecommerce, setecommerce] = useState(false);
  // const [crypto, setcrypto] = useState(false);
  // const [project, setproject] = useState(false);
  // const [task, settask] = useState(false);
  // const [contact, setcontact] = useState(false);
  // const [component, setcomponent] = useState(false);
  // const [form, setform] = useState(false);
  // const [table, settable] = useState(false);
  // const [chart, setchart] = useState(false);
  // const [icon, seticon] = useState(false);
  // const [map, setmap] = useState(false);
  // const [invoice, setinvoice] = useState(false);
  // const [auth, setauth] = useState(false);
  // const [utility, setutility] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });
  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="#"
                  >
                    <i className="bx bx-home-circle mr-2"></i>
                    {props.t("Dashboard")}
                    {props.menuOpen} <span className="arrow-down" />
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/dashboard" className="dropdown-item">
                      {props.t("Default")}
                    </Link>
                  </div>
                </li>

                {/* ADD CONTENT PAGE */}
                <li className="nav-item">
                  <Link className="nav-link arrow-none" to="/content">
                    <i className="bx bx-home-circle mr-2"></i>
                    {props.t("Content")}
                  </Link>
                </li>

                {/* <li className="nav-item dropdown">
                                        <Link to="/#" onClick={e => { e.preventDefault(); setui(!ui); }} className="nav-link dropdown-toggle arrow-none">
                                            <i className="bx bx-tone mr-2"></i>{props.t('UI Elements')} <div className="arrow-down"></div>
                                        </Link>
                                        <div
                                            className={classname(
                                                "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                                                { show: ui })}>
                                            <Row>
                                                <Col lg={4}>
                                                    <div>
                                                        <Link to="ui-alerts" className="dropdown-item">{props.t('Alerts')}</Link>
                                                        <Link to="ui-buttons" className="dropdown-item">{props.t('Buttons')}</Link>
                                                        <Link to="ui-cards" className="dropdown-item">{props.t('Cards')}</Link>
                                                        <Link to="ui-carousel" className="dropdown-item">{props.t('Carousel')}</Link>
                                                        <Link to="ui-dropdowns" className="dropdown-item">{props.t('Dropdowns')}</Link>
                                                        <Link to="ui-grid" className="dropdown-item">{props.t('Grid')}</Link>
                                                        <Link to="ui-images" className="dropdown-item">{props.t('Images')}</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <Link to="ui-lightbox" className="dropdown-item">{props.t('Lightbox')}</Link>
                                                        <Link to="ui-modals" className="dropdown-item">{props.t('Modals')}</Link>
                                                        <Link to="ui-rangeslider" className="dropdown-item">{props.t('Range Slider')}</Link>
                                                        <Link to="ui-session-timeout" className="dropdown-item">{props.t('Session Timeout')}</Link>
                                                        <Link to="ui-progressbars" className="dropdown-item">{props.t('Progress Bars')}</Link>
                                                        <Link to="ui-sweet-alert" className="dropdown-item">{props.t('Sweet-Alert')}</Link>
                                                        <Link to="ui-tabs-accordions" className="dropdown-item">{props.t('Tabs & Accordions')}</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div>
                                                        <Link to="ui-typography" className="dropdown-item">{props.t('Typography')}</Link>
                                                        <Link to="ui-video" className="dropdown-item">{props.t('Video')}</Link>
                                                        <Link to="ui-general" className="dropdown-item">{props.t('General')}</Link>
                                                        <Link to="ui-colors" className="dropdown-item">{props.t('Colors')}</Link>
                                                        <Link to="ui-rating" className="dropdown-item">{props.t('Rating')}</Link>
                                                        <Link to="ui-notifications" className="dropdown-item">{props.t('Notifications')}</Link>
                                                        <Link to="ui-image-cropper" className="dropdown-item">{props.t('Image Cropper')}</Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li> */}

                {/* <li className="nav-item">
                                        <Link to="#" onClick={e => { e.preventDefault(); setProduct(!product); }} className="nav-link dropdown-togglez arrow-none"  >
                                            <i className="bx bx-customize mr-2"></i>Product <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu", { show: product })} >
                                            <Link to="#" className="dropdown-item">Exmple</Link>
                                        </div>
                                    </li> */}

                {/* <li className="nav-item dropdown">
                                        <Link to="/#" className="nav-link dropdown-toggle arrow-none"
                                            onClick={e => {
                                                e.preventDefault();
                                                setcomponent(!component);
                                            }}>
                                            <i className="bx bx-collection mr-2"></i>{props.t('Components')} <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu", { show: component })}>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        setform(!form);
                                                    }}>
                                                   {props.t('Forms')}  <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show:form })}>
                                                    <Link to="form-elements" className="dropdown-item">{props.t('Form Elements')}</Link>
                                                    <Link to="form-validation" className="dropdown-item">{props.t('Form Validation')}</Link>
                                                    <Link to="form-advanced" className="dropdown-item">{props.t('Form Advanced')}</Link>
                                                    <Link to="form-editors" className="dropdown-item">{props.t('Form Editors')}</Link>
                                                    <Link to="form-uploads" className="dropdown-item">{props.t('Form File Upload')} </Link>
                                                    <Link to="form-xeditable" className="dropdown-item">{props.t('Form Xeditable')}</Link>
                                                    <Link to="form-repeater" className="dropdown-item">{props.t('Form Repeater')}</Link>
                                                    <Link to="form-wizard" className="dropdown-item">{props.t('Form Wizard')}</Link>
                                                    <Link to="form-mask" className="dropdown-item">{props.t('Form Mask')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        settable(!table);
                                                    }}>
                                                    {props.t('Tables')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: table })}>
                                                    <Link to="tables-basic" className="dropdown-item">{props.t('Basic Tables')}</Link>
                                                    <Link to="tables-datatable" className="dropdown-item">{props.t('Data Tables')}</Link>
                                                    <Link to="tables-responsive" className="dropdown-item">{props.t('Responsive Table')}</Link>
                                                    <Link to="tables-editable" className="dropdown-item">{props.t('Editable Table')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        setchart(!chart);
                                                    }}>
                                                     {props.t('Charts')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: chart })}>
                                                    <Link to="apex-charts" className="dropdown-item"> {props.t('Apex charts')}</Link>
                                                    <Link to="chartist-charts" className="dropdown-item"> {props.t('Chartjs Chart')}</Link>
                                                    <Link to="e-charts" className="dropdown-item"> {props.t('E Chart')}</Link>
                                                    <Link to="tui-charts" className="dropdown-item">{props.t('Toast UI Chart')}</Link>
                                                    <Link to="sparkline-charts" className="dropdown-item"> {props.t('Sparkline Chart')}</Link>
                                                    <Link to="charts-knob" className="dropdown-item">{props.t('Knob Chart')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        seticon(!icon);
                                                    }}>
                                                     {props.t('Icons')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: icon })}>
                                                    <Link to="icons-boxicons" className="dropdown-item">{props.t('Boxicons')}</Link>
                                                    <Link to="icons-materialdesign" className="dropdown-item">{props.t('Material Design')}</Link>
                                                    <Link to="icons-dripicons" className="dropdown-item">{props.t('Dripicons')}</Link>
                                                    <Link to="icons-fontawesome" className="dropdown-item">{props.t('Font awesome')} </Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        setmap(!map);
                                                    }}>
                                                    {props.t('Maps')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: map })}>
                                                    <Link to="maps-google" className="dropdown-item">{props.t('Google Maps')} </Link>
                                                    <Link to="maps-vector" className="dropdown-item">{props.t('Vector Maps')} </Link>
                                                    <Link to="maps-leaflet" className="dropdown-item">{props.t('Leaflet Maps')} </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li> */}

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#">
                    <i className="bx bx-file mr-2"></i>Settings{" "}
                    <div className="arrow-down"></div>
                  </Link>
                  <div className="dropdown-menu">
                    <Link
                      to="/channels/getting-started"
                      className="dropdown-item"
                    >
                      Getting Started
                    </Link>
                    <Link to="/channels/settings" className="dropdown-item">
                      Channel Settings
                    </Link>
                  </div>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default withRouter(
  connect(mapStatetoProps, {})(withNamespaces()(Navbar))
);
