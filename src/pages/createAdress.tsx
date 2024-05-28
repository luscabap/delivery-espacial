import { useState } from 'react'
import { adressProps } from '../types/adressType';
import data from '../adress.json';
import AdressContainer from '../components/AdressContainer';
import AdressForm from '../components/AdressForm';

export default function CreateAdress(){
  const [adress, setAdress] = useState<adressProps[]>(data);
  const [createOpen, setCreateOpen] = useState(false);

  const addAdress = (lot: string, local: string, company: string) => {
    const newAdress = [...adress, {
      id: Math.floor(Math.random() * 10000),
      lot,
      local,
      company
    }]

    setAdress(newAdress)
  }

  const removeAdress = (id: number) => {
    const newAdress = [...adress];

    const filteredAdress = newAdress.filter(adress => adress.id !== id);

    setAdress(filteredAdress);
  }

  const handleCreateAdress = () => {
    setCreateOpen(!createOpen)
  }

  return (
    <div className='flex justify-center items-center flex-col'>
    <h2 className='text-2xl m-2 text-cyan-800 cursor-pointer hover:text-cyan-600' onClick={handleCreateAdress}>+ Create Mars Adress</h2>
    {
      createOpen ? <AdressForm addAdress={addAdress} /> : null
    }
    
    <div className='flex'>
    {
      adress.map(adress => <AdressContainer 
        key={adress.id} 
        id={adress.id}
        company={adress.company} 
        local={adress.local} 
        lot={adress.lot}
        removeAdress={removeAdress}
      />)
    }
    </div>
    </div>
  )
}