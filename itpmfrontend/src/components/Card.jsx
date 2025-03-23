import React from "react";
import Image1 from "../components/IMG/Image1";

const styles = {
    Card: {
      position: "absolute",
      top: "32%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
      padding: "16px",
      width: "1376px",
      height: "264px",
      backgroundColor: "#f2f2f2",
      borderRadius: "24px",
      boxShadow: "2px 0px 10px rgba(3,3,3,0.1)",
    },
    Content: {
      display: "flex",
      flexDirection: "column", 
      justifyContent: "center",
      paddingLeft: "20px",
    },
    Title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "8px", 
    },
    Paragraph: {
      fontSize: "16px",
      color: "#555", 
      lineHeight: "1.5",
    },
  };
  
  const Card = (props) => {
    return (
      <div style={styles.Card}>
        <Image1 style={styles.Image} />
        <div style={styles.Content}>
          <h2 style={styles.Title}>Pet First Aid Guide</h2>
          <p style={styles.Paragraph}>
            • Learn how to provide first aid for your pet. <br />
            • Select the breed, age, symptoms, and behavior patterns. <br />
            • Get tailored advice for your pet’s specific needs.
          </p>
        </div>
        {props.children}
      </div>
    );
  };
  
  export default Card;
  