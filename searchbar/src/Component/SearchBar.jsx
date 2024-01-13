import { useEffect, useRef, useState } from "react";
import { act } from "react-dom/test-utils";
import { isPlainObject } from "redux";
import styled from "styled-components";
import { useThrottle } from "use-throttle";

export default function SearchBar({ setQuery, suggesstion }) {
  const [inputText, setInputText] = useState("");
  const [active, setActive] = useState(0);
  const scrollRef = useRef();

  const handleActiveSuggestion = (e) => {
    const code = e.keyCode;
    // console.log(code);

    switch (code) {
      case 38: {
        if (active === 1 || active === 0) {
          scrollRef.current.scrollTop = suggesstion.length * 22.4;
          setActive(suggesstion.length - 1);
        } else if (active <= suggesstion.length - 4) {
          scrollRef.current.scrollTop -= 22.4;
        }
        setActive((prev) => prev - 1);
        break;
      }
      case 40: {
        //down
        if (active == suggesstion.length) {
          scrollRef.current.scrollTop = 0;
          setActive(0);
        } else if (active >= 5) {
          scrollRef.current.scrollTop += 22.4;
        }
        // console.log("her");
        setActive((prev) => prev + 1);

        break;
      }
      default:
        break;
    }
  };
  const throt = useThrottle(inputText, 1000);

  useEffect(() => {
    // console.log("inside sb ue");
    // setQuery(inputText);
    setQuery(throt);
  }, [setQuery, throt]);

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Div onKeyUp={handleActiveSuggestion}>
        <Input
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </Div>
      {!!suggesstion.length && (
        <Sdiv ref={scrollRef} activeOpiton={active} limit={5}>
          {/* {console.log(suggesstion)} */}
          {suggesstion.map((item, index) => {
            return (
              <div
                onMouseOver={() => {
                  setActive(index + 1);
                }}
                key={item.country}
                style={{
                  border: "1px solid grey",
                }}
              >
                {item.country}
              </div>
            );
          })}
        </Sdiv>
      )}
    </div>
  );
}
const Div = styled.div`
  border: 1px solid blue;
  height: 30px;
  text-align: center;
  display: flex;
`;

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 20px;
  flex: 1;
`;

const Sdiv = styled.div`
  border: 1px solid red;
  max-height: ${({ limit }) => {
    return `${limit * 22.4}px`;
  }};
  overflow: auto;
  display: flex;
  flex-direction: column;

  & * {
    flex: 1;
    text-align: left;
  }

  & :nth-child(${({ activeOpiton }) => activeOpiton}) {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }

  :nth-child(${({ activeOpiton }) => activeOpiton}) {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }
`;
