import { adressProps } from "../../types/adressType";

interface IAdressContainer extends adressProps {
  removeAdress: (id: number) => void
}

export default function AdressContainer({ lot, local, company, id, removeAdress }: IAdressContainer){
  return (
    <span className="min-w-72 border-2 border-solid border-zinc-50 p-4 rounded-lg m-2">
      <ul className="mb-3">
        <li className="text-lg text-sky-900">LOT: {lot}</li>
        <li className="text-right">Local: {local}</li>
        <li className="text-right">Company: {company}</li>
      </ul>
      <div className="flex justify-between">
        <button 
          onClick={() => removeAdress(id)}
          className="font-bold transition-all hover:bg-red-900 hover:border-red-950"
        >X</button>
      </div>
    </span>
  )
}