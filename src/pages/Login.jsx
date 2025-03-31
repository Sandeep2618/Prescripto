 import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate()
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      if (storedName) setName(storedName);
    }
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    localStorage.setItem("name", name); 
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    // alert("Data saved in local storage");
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>Please {state === "Sign Up" ? "Sign Up" : "Log in"} to book an appointment</p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p><input className="border border-zinc-300 rounded w-full p-2 mt-1"
             type="text" onChange={(e) => setName(e.target.value)} value={name} required placeholder="Enter Your Name" />
          </div>
        )}
        <div className="w-full">
          <p>Email</p> <input className="border border-zinc-300 rounded w-full p-2 mt-1"
           type="email" onChange={(e) => setEmail(e.target.value)} value={email} required placeholder="Enter Your Email"/>
        </div>
        <div className="w-full">
          <p>Password</p><input className="border border-zinc-300 rounded w-full p-2 mt-1"
           type="password" name="new-password" onChange={(e) => setPassword(e.target.value)} value={password} required placeholder="Enter Your Password" autoComplete="new-password"/>
        </div>
        <button onClick={()=>{navigate(`/home/`);}} className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p> Already have an account? {" "} <span onClick={() => setState("Login")} className="text-primary underline cursor-pointer"> login here</span>
          </p>)
           : 
           (<p> Create a new account? {" "}<span onClick={() => setState("Sign Up")} className="text-primary underline cursor-pointer" > click here </span>
          </p>)}
      </div>
    </form>
  );
};

export default Login;
