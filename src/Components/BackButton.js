import React from "react";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faArrowLeft } from "@fontawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <Button variant="primary">
          <FontAwesomeIcon icon={faArrowLeft} /> Kembali
        </Button>
      </Link>
    </div>
  );
};

export default BackButton;
