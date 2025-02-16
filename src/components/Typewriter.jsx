import  { useState, useEffect } from "react";

const Typewriter = () => {
  const text = `Hi, I’m <b>Burxanova Sabina</b>, a junior <b><i>front-end developer</i></b> and <b><i>UI/UX design enthusiast</i></b> passionate about crafting clean, user-friendly interfaces. As a sophomore at <b>New Uzbekistan University</b>, majoring in <i>Software Engineering</i>, I thrive on turning creative ideas into interactive digital experiences. Let’s build something amazing together! 🚀`;

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
        border: "2px solid #000", 
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
          color: "#000", 
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
