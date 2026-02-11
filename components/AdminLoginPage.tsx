
import React, { useState } from 'react';
import { Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface AdminLoginPageProps {
  onLogin: (success: boolean) => void;
  onBack: () => void;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLogin, onBack }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'jofcenna2026') {
      onLogin(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-juve-darkgray p-8 rounded-2xl border border-gray-800 shadow-2xl animate-fade-in-up">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-juve-gold p-4 rounded-full mb-4 shadow-lg">
            <Lock className="w-8 h-8 text-black" />
          </div>
          <h1 className="font-display font-black text-2xl text-white uppercase tracking-tighter">Area Riservata</h1>
          <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mt-2">Accesso Gestione Club</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Inserisci Password"
              className={`w-full bg-black/50 border-2 ${error ? 'border-red-500' : 'border-gray-800'} focus:border-juve-gold outline-none p-4 rounded-lg text-white font-medium transition-all pr-12`}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
            {error && <p className="text-red-500 text-[10px] font-bold uppercase mt-2 text-center tracking-widest">Password Errata</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-display font-bold uppercase py-4 rounded-lg hover:bg-juve-gold hover:text-white transition-all tracking-[0.2em]"
          >
            Accedi
          </button>
        </form>

        <button 
          onClick={onBack}
          className="w-full mt-6 text-gray-500 hover:text-white flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Annulla e torna alla Home
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
