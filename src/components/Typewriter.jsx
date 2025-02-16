import  { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Typewriter = () => {
  const {t}  = useTranslation();

  const text = t("home.intro");
  useEffect(()=>{
    setIndex(0);
    setDisplayText("");
  },
  [text]
)

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);


  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
       
        const currentChar = text[index];
        if (currentChar === "<") {
          const tagEndIndex = text.indexOf(">", index);
          if (tagEndIndex !== -1) {
            setIndex(tagEndIndex + 1);
            setDisplayText((prev) => prev + text.slice(index, tagEndIndex+1));
            return;
          }
        }

        setDisplayText((prev) => prev + currentChar);
        setIndex((prev) => prev + 1);
      }, 90); 

      return () => clearTimeout(timeout); 
    }
  }, [index, text]);

  return (
    <div
      style={{
        width: "900px",
        height: "500px",
        border: "2px solid #f1a0da",
        backgroundColor: "transparent",
        padding: "20px",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        className="home-title"
        style={{
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          maxWidth: "100%",
          margin: "0 auto",
          fontFamily: "monospace",
          color: "var(--primary-color)",
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: displayText }} />
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            background: "orange",
            animation: "blink 1s infinite",
          }}
        />
      </p>
    </div>
  );
};

export default Typewriter;
