import React, { useState } from "react";
import { saveNews } from "../Utils/News";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

export const NewsCard = ({ article }) => {
  const [show, setShow] = useState(false);

  const saveForLater = () => {
    // const [alertText, setAlertText] = React.useState("Your news is savd for offline use")
    saveNews({ ...article }).then(() => {
      setShow(true);
    });
  };
  return (
    <div style={{ paddingRight: "20px", flex: "1" }}>
      <Card
        style={{
          width: "18rem",
          border: "2px solid black",
          borderRadius: "10px",
          height: "650px",
          width: "300px",
          margin: "10px",
        }}
      >
        <Card.Img
          variant="top"
          src={article.urlToImage}
          className="img-responsive"
        />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.content}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text>{article.author}</Card.Text>
          {show == true ? (
            <Alert key="" variant="success" dismissible onClose={() => setShow(false)} >
              News saved for later
            </Alert>
          ) : null}
          <Card.Link href="#" onClick={saveForLater}>
            Save For Later
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
