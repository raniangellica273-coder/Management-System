import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login", 
        { email, password } 
      );
      if (response.data.success) {
        login(response.data.user)
        localStorage.setItem("token", response.data.token);
        if(response.data.user.role === "admin") {
            navigate('/admin-dashboard')
        } else {
          navigate("/employee-dashboard")
        }
      }
    } catch(error) {
      if(error.response && !error.response.data.success) {
        setError(error.response.data.error)
    } else {
      setError("Server Error")
    }
  };
  }

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800 antialiased">
      <div className="w-full max-w-md bg-white border border-slate-200/60 p-8 rounded-2xl shadow-xl shadow-slate-200/50 space-y-6">
      <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-violet-600">
            Management System
          </h1>
        </div>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="flex-shrink mx-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Login
          </span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-sm font-medium text-rose-600 animate-shake">
            <span className="font-bold">Gagal masuk:</span> {error}
          </div>
        )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-slate-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="admin@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100 transition-all placeholder:text-slate-300"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-semibold text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100 transition-all placeholder:text-slate-300"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer select-none font-medium text-slate-600">
              <input
                type="checkbox"
                className="w-4 h-4 rounded text-violet-600 border-slate-300 focus:ring-violet-500"
              />
              Remember me
            </label>
            <a
              href="#"
              className="font-semibold text-violet-600 hover:text-violet-700 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Tombol Submit Utama */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-violet-600 text-white font-bold text-sm shadow-md shadow-violet-200 hover:bg-violet-700 active:scale-[0.98] transition-all"
          >
            Sign In to Dashboard
          </button>
        </form>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-400 font-medium">
            &copy; 2026 EMS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
        
      )

}




      
      


export default Login
