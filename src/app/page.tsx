import Image from "next/image";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="flex justify-center py-8">
        <Image
          src="/shield.png"
          alt="Bolla Network Shield"
          width={120}
          height={120}
          priority
          className="drop-shadow-lg"
        />
      </header>

      {/* Main */}
      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center gap-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-green-500">
          Welcome to Bolla Network
        </h1>

        <p className="max-w-xl text-lg text-gray-300 leading-relaxed">
          Bolla Network is a family-driven collection of personal servers
          designed to make your life easier.  
          Secure, reliable, and tailored to meet the digital needs of the
          <span className="text-green-400 font-semibold"> Bolla family</span>.
        </p>

        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-sm text-gray-500 text-center py-6 border-t border-gray-700">
        &copy; 2025 Bolla Network — All rights reserved.
      </footer>
    </div>
  );
}
