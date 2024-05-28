import { useNavigate } from "react-router-dom";

export default function Header(){
  const navigate = useNavigate();

  return (
    <header className="flex justify-evenly items-center bg-zinc-400 mb-2">
      <h1 className="text-black font-black max-w-80 text-center text-3xl p-3 cursor-pointer" onClick={() => navigate("/")}>Interstellar Delivery</h1>
      <nav>
        <ul className="flex gap-4">
          <li className="text-cyan-900 cursor-pointer" onClick={() => navigate("/create-adress")}>Next Projects</li>
          <li className="text-cyan-900 cursor-pointer">About Us</li>
        </ul>
      </nav>
    </header>
  )
}