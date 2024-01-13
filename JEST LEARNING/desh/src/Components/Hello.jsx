import styled from "styled-components";

export default function Hello() {
  return (
    <div>
      <div>Hello</div>

      <Div>
        <p>i am one p</p>
        <div>one</div>
        <div>two</div>
        <div>three</div>
        <div className="jj">four</div>

        <div>
          <p>one</p>
          <p>two</p>
          <div className="op">op</div>
          <p>three</p>
          <p>four</p>
        </div>
      </Div>
    </div>
  );
}

const Div = styled.div`
  border: 1px solid red;

  & > div > div ~ p {
    border: 10px solid grey;
  }

  //   & div {
  //     border: 1px solid green;
  //   }

  //   .jj {
  //     border: 5px solid blue;
  //   }
  //   .op {
  //     background-color: blue;
  //   }

  //   & ~ p {
  //     border: 1px solid black;
  //   }
  //   & > p {
  //     border: 1px solid orange;
  //   }
  //   & + p {
  //     border: 1px solid orange;
  //   }
  //   & p {
  //     border: 1px solid orange;
  //   }
`;
