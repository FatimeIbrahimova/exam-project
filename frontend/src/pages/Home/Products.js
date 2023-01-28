import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [value,setvalue]=useState("");
  const [sorted,setSorted]=useState({sorted:"price",reversed:false})

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/products/");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8080/products/${id}`)
    console.log("delete");
    getData()
  }
  const handleChange=(e)=>{
    setvalue(e.target.value)
    console.log(value);
  }
  const sortData=()=>{
    setSorted({sorted:"price",reversed:!sorted.reversed})
    let dataCopy=[...data]
    dataCopy.sort((a,b)=>{
        if(sorted.reversed){
            return a.price-b.price;
        }
        return b.price-a.price
    })
    setData(dataCopy)
  }
 
  return (
    <div className="third-sec">
      <div className="container">
        <div className="third-sec_desc">
          <h1>Product Overwiew</h1>
          <input style={{marginLeft:50,marginRight:20}} placeholder="filter by name" onChange={(e)=>handleChange(e)}/>
          <button onClick={()=>sortData()}>Sort price</button>
        </div>
        <div className="card-container">
          {data && data
          .filter((product)=>{
            return value.trim().toLowerCase()==="" ? product : product.name.toLowerCase().includes(value.toLowerCase())
          })
          .map((product)=>(
            <div className="card">
            <div className="card-img">
              <img src={product.url} alt="img"/>
            </div>
            <div className="card-desc">
              <h2>{product.name}</h2>
              <span>${product.price}</span><br/>
              <button onClick={()=>handleDelete(product._id)} style={{marginTop:5,color:"red",borderColor:"red"}}>Delete</button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
