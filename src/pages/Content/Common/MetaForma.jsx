import React from "react";
import { AvField } from "availity-reactstrap-validation";
import {
  FormGroup,
  CardTitle,
CardSubtitle,
Row,
Col
} from "reactstrap";

const MetaForma = (props) => {
  const {
    require,
    metaTitle,
    setMetaTitle,
    metaKeyword,
    setMetaKeyword,
    metaDesc,
    setMetaDesc,
  } = props;

  // On chnage global function
  const onChanged = (setName) => (e) => {
    setName(e.target.value);
  };

  return (
    <>
       <CardTitle>Meta Data</CardTitle>
          <CardSubtitle className="mb-3">
            Fill all information below
          </CardSubtitle>
    <FormGroup className="w-100 mt-4">
           <Row>
              <Col sm={6}>
                <AvField
                  id="metatitle"
                  label="Meta title"
                  name="productname"
                  type="text"
                  className="form-control"
                  placeholder="meta title"
                  required={require}
                  value={metaTitle}
                  onChange={onChanged(setMetaTitle)}
                />
                <AvField
                  label="Meta Keyword"
                  id="metakeywords"
                  name="manufacturername"
                  type="text"
                  className="form-control"
                  placeholder="meta keyword"
                  required={require}
                  value={metaKeyword}
                  onChange={onChanged(setMetaKeyword)}
                />
              </Col>

              <Col sm={6}>
                <AvField
                  label="Meta Description"
                  type="textarea"
                  className="form-control"
                  id="metadescription"
                  name="Meta Description"
                  rows="5"
                  placeholder="meta description"
                  required={require}
                  value={metaDesc}
                  onChange={onChanged(setMetaDesc)}
                />
              </Col>
            </Row>
    </FormGroup>
    </>
  );
};

export default MetaForma;
