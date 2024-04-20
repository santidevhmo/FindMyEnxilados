import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReturnBtn } from "../openLinkButtons/ExternalLinkBtns.jsx"
import ResultTopContentCSS from "./ResultTopContent.module.css";

export default function ResultTopContent( {resultTitle, imageURL} ) {
  return (
    <div className={ResultTopContentCSS.contentContainer}>
      <div className={ResultTopContentCSS.topContent}>
        {/* ---- Top Row : ReturnBtn and Text ----- */}
        <Row className="mt-5 align-items-center">
          <Col>
            <ReturnBtn />
          </Col>
          <Col xs={6}>
            <p className={ResultTopContentCSS.title}>
              Tus enxilados mas cerca se encuentran en:
            </p>
          </Col>
          <Col></Col>
        </Row>
      </div>

      {/* ---- Result Title Row ----- */}
      <Row className="mt-5">
        <h1 className={ResultTopContentCSS.resultTitle}>
          {resultTitle}
        </h1>
      </Row>

      {/* ---- Image Result Row ----- */}
      <Row className="imageContainer">
        <img
          className={ResultTopContentCSS.imageContainer}
          src={imageURL}
          alt="enxiladosImage"
        />
      </Row>
    </div>
  );
}