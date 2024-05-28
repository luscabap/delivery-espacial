import { useState } from 'react'
import { adressProps } from './types/adressType';
import data from './adress.json';
import AdressContainer from './components/AdressContainer';
import AdressForm from './components/AdressForm';

function App() {
  const [adress, setAdress] = useState<adressProps[]>(data);

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

  return (
    <div className='flex justify-center items-center flex-col'>
    <h1 className='bg-zinc-600 p-2'>Adress List</h1>
    <AdressForm addAdress={addAdress} />
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
  )
}

export default App
