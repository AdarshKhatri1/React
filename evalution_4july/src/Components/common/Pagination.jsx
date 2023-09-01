import Button from "./Button";

function Pagination({ onChange, total, current }) {
  
  let pages = new Array(total).fill(0).map((item, index) => {
    // finish code with Button
    // it should be 1,2,3....n pages


   return <Button  disabled={index+1===current} children={index+1} handleButton={()=>(
    onChange(index+1)
   )}>{index+1}</Button>
    
  });

  return total !== 0 && pages;

}
export default Pagination;
