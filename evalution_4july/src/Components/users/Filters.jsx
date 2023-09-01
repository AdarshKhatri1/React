import { useEffect, useState } from "react";

const Filters = ({ handleasc,handleperpage }) => {

  const[check,setCheck] = useState(true)
  const [val,setVal] = useState(10);

  function handleValue(e){

    // console.log(e.target)
    // console.log(e.target.value)
    setVal(+e.target.value)

    // or we can Write
    // setVal(Number(e.target.value))

  }


  useEffect(()=>(
    handleasc(check)
  ),[check])

  useEffect(()=>(
    handleperpage(val)
  ),[val])

  return (
    <div style={{ display: "flex", gap:"2rem" }}>
      <div>
        <label>
          <input
            data-testid="order-filter"
            type="checkbox"
            onChange={()=>{
              // console.log(check)
              setCheck(!check)
              
            }}
            checked= {check}
            />
            Ascending
        </label>
      </div>
      <div>
        <label>
          <select
            data-testid="per-page-filter"
            onChange={handleValue}
          >
            <option value={10} > 10</option>
            <option value={20} > 20</option>
          </select>
          Per page
        </label>
      </div>
    </div>
  );
};
export default Filters;
