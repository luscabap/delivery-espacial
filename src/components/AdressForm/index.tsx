import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import { schemaAdress } from "../../schemas/schemaAdress";

type Schema = z.infer<typeof schemaAdress>

interface IAdressForm {
  addAdress: (lot: string, local: string, company: string) => void
}

export default function AdressForm({ addAdress }: IAdressForm){
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Schema>({
    resolver: zodResolver(schemaAdress),
    defaultValues: {
      lot: "",
      company: "",
      local: ""
    }
  })

  const onSubmit = (data: Schema) => {
    addAdress(data.lot, data.local, data.company)
    setValue("company", "");
    setValue("local", "");
    setValue("lot", "");
  }

  return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter number lot"
          className="p-2 min-w-96"
          {...register("lot")}
        />
        { errors.lot?.message && (
          <span className="text-red-500">{errors.lot.message}</span>
        ) }
        <select className="p-2 min-w-96" {...register("local")}>
          <option></option>
          <option>Factory</option>
          <option>Hangar</option>
        </select>
        { errors.local?.message && (
          <span className="text-red-500">{errors.local.message}</span>
        ) }
        <input 
          type="text" 
          placeholder="Enter company" 
          className="p-2 min-w-96"
          {...register("company")}
        />
        { errors.company?.message && (
          <span className="text-red-500">{errors.company.message}</span>
        ) }
        <button type="submit">Add Adress</button>
      </form>
  )
}