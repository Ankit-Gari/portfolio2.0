import React from "react";
import Main from "../components/Main";
import Gap from "../components/Gap";

const PageVFX = () => {
  return (
    <>
      <Gap />
      <Main>
        <div
          className="container"
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="grid"
            style={{
              display: "grid",
              height: "100%",
              width: "100%",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
              gap: "16px",
              padding: "8px",
            }}
          >
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                style={{
                  fontFamily: "'M PLUS 2 Variable', sans-serif",
                  gridColumn: "span 1",
                  gridRow: item === 2 || item === 3 ? "span 4" : "span 2",
                  backgroundColor: "lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Main>
    </>
  );
};

export default PageVFX;
