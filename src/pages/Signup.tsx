import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch(error) {
      setError(error.message)
    }
  }

  return ( 
  <form onSubmit={handleSubmit}>
    {error && error} 
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
        <h1 className="text-5xl font-bold">Memórias 📸</h1>
        <p className="py-6 text-2xl" >Conecte-se e desfrute da nossa experiência de uma galeria <strong>online ...</strong></p>
      </div>
      <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Login</span>
            </label>
            <input type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-mail"
            className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Senha</span>
            </label>
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             placeholder="senha"
             className="input input-bordered"
             />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div></form>
  )
}


export default Signup;

