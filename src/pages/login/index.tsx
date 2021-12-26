import React from 'react';
import { useRouter } from "next/router";

const Login: React.FC = () => {
  const router = useRouter();
  
  return (
    <div className="App">
      <h1>Login</h1>
    </div>
  );
}

export default Login;
