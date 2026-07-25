import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { notify } from "../utils/toast";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";


export default function Register() {


  const navigate = useNavigate();


  const [loading,setLoading]=useState(false);



  const [formData,setFormData]=useState({

    name:"",
    email:"",
    password:"",

  });



  const handleChange=(e)=>{

    setFormData((prev)=>({

      ...prev,

      [e.target.name]:e.target.value,

    }));

  };



  const handleSubmit=async(e)=>{

    e.preventDefault();


    if(loading) return;



    try{

      setLoading(true);



      await api.post(
        "/auth/register",
        formData
      );



      notify.success(
        "Account created successfully! Please login."
      );



      navigate("/login");



    }
    catch(err){


      notify.error(

        err.response?.data?.message ||
        "Registration failed!"

      );


    }
    finally{

      setLoading(false);

    }


  };




  return (

    <div

      className="
      min-h-screen

      flex
      justify-center
      items-center

      bg-slate-100
      dark:bg-slate-950

      transition-colors
      duration-300

      p-5
      "

    >



      <Card

        className="
        w-full
        max-w-md
        "

      >



        <h2

          className="
          text-3xl
          font-bold

          mb-6

          text-center

          text-slate-800
          dark:text-white
          "

        >

          Create Account

        </h2>



        <p
          className="
          text-center
          text-slate-500
          dark:text-slate-400

          mb-6
          "
        >
          Join DevSync today
        </p>




        <form

          onSubmit={handleSubmit}

          className="space-y-4"

        >



          <Input

            label="Full Name"

            name="name"

            value={formData.name}

            onChange={handleChange}

            placeholder="Enter your name"

          />



          <Input

            label="Email"

            type="email"

            name="email"

            value={formData.email}

            onChange={handleChange}

            placeholder="Enter your email"

          />



          <Input

            label="Password"

            type="password"

            name="password"

            value={formData.password}

            onChange={handleChange}

            placeholder="Create password"

          />




          <Button

            type="submit"

            disabled={loading}

            className="w-full"

          >

            {
              loading
              ?
              "Creating Account..."
              :
              "Register"
            }


          </Button>



        </form>



      </Card>



    </div>

  );

}