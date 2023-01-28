import React, { useState } from "react";
import "./Add.scss";
import axios from "axios";
import { addFormSchema } from "../schema/FormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from "react-helmet";

const Add = () => {
  const [state, setState] = useState({ url: "", name: "", price: null });
  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  console.log(state);

  const addData = () => {
    console.log(state);
    axios.post("http://localhost:8080/products/", state);
    setState({
      url: "",
      name: "",
      price: "",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addFormSchema) });
  return (
    <div className="add">
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      {/* <h1>Add Product</h1> */}
      <form onSubmit={handleSubmit(addData)}>
        <input
          placeholder="url"
          name="url"
          {...register("url")}
          onChange={(e) => handleChange(e)}
        />
        {errors?.url && (
          <span style={{ color: "red" }}>{errors.url.message}</span>
        )}

        <input
          placeholder="name"
          name="name"
          {...register("name")}
          onChange={(e) => handleChange(e)}
        />
        {errors?.name ? (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        ) : (
          <></>
        )}
        <input
          placeholder="price"
          name="price"
          {...register("price")}
          onChange={(e) => handleChange(e)}
        />
        {errors?.price ? (
          <span style={{ color: "red" }}>{errors.price.message}</span>
        ) : (
          <></>
        )}
        <button>Add to Api</button>
      </form>
    </div>
  );
};

export default Add;
