import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (password === 'admin123') {
      router.push('/dashboard');
    } else {
      alert('Şifre yanlış');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-xl mb-4">Admin Paneli Giriş</h1>
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 w-full rounded">
          Giriş Yap
        </button>
      </div>
    </div>
  );
}
