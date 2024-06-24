import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"


export type PatientDetailsProps = {
  patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {

  const deletePatient = usePatientStore(state => state.deletePatient)
  const getPatientById = usePatientStore(state => state.getPatientById)

  const handleclick = () => {
    deletePatient(patient.id)
    toast.error("Paciente eliminado correctamente")
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-lg">
        <PatientDetailItem label={'ID'} data={patient.id}/>
        <PatientDetailItem label={'Name'} data={patient.name}/>
        <PatientDetailItem label={'Propietario'} data={patient.caretaker}/>
        <PatientDetailItem label={'Email'} data={patient.email}/>
        <PatientDetailItem label={'Fecha de alta'} data={patient.date.toString()}/>
        <PatientDetailItem label={'Sintomas'} data={patient.symptoms}/>

      <div className="flex flex-col gap-3 lg:flex-row justify-between mt-10">
        <button 
          onClick={ () => getPatientById(patient.id)}
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >Editar</button>
        <button 
          type="button"
          onClick={ handleclick }
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >Eliminar</button>

      </div>
        
    </div>
  )
}
