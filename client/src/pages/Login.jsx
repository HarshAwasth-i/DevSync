import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { notify } from "../utils/toast";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";


export default function Login() {

  const navigate = useNavigate();
  const { login } = useAuth();


  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });


  const [loading,setLoading] = useState(false);



  const handleChange=(e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });

  };



  const handleSubmit=async(e)=>{

    e.preventDefault();

    if(loading) return;


    try{

      setLoading(true);


      const res = await api.post(
        "/auth/login",
        formData
      );


      login(
        res.data.user,
        res.data.token
      );


      notify.success(
        "Login successful! Welcome back 👋"
      );


      navigate("/dashboard");


    }
    catch(err){

      notify.error(
        err.response?.data?.message ||
        "Login failed!"
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

          Welcome Back 👋

        </h2>



        <p
          className="
          text-center
          text-slate-500
          dark:text-slate-400

          mb-6
          "
        >
          Login to continue to DevSync
        </p>



        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >


          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />



          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />



          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >

            {
              loading
              ?
              "Logging in..."
              :
              "Login"
            }

          </Button>


        </form>


      </Card>


    </div>

  );

}