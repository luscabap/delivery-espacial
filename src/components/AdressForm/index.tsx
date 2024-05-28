import { useState } from "react"

interface IAdressForm {
  addAdress: (lot: string, local: string, company: string) => void
}

export default function AdressForm({ addAdress }: IAdressForm){
  const [lot, setLot] = useState("");
  const [local, setLocal] = useState("");
  const [company, setCompany] = useState("");
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!lot || local == "" || !company){
      alert("Por favor, verifique os campos digitados")
    }
    
    addAdress(lot, local, company);

    setLot("");
    setLocal("");
    setCompany("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Enter number lot"
          onChange={e => setLot(e.target.value)}
          className="p-2"
        />
        <select onChange={e => setLocal(e.target.value)} className="p-2">
          <option></option>
          <option>Factory</option>
          <option>Hangar</option>
        </select>
        <input 
          type="text" 
          placeholder="Enter company" 
          onChange={e => setCompany(e.target.value)}
          className="p-2"
        />
        <button type="submit">Add Adress</button>
      </form>
    </>
  )
}