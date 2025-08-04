import { usePatientStore } from "../store"
import PatientsDetail from "./PatientsDetail"


export default function PatientsList() {

    const patients = usePatientStore((state)=> state.patients)

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
        {patients.length ? (
            <>
                <h2 className="font-black text-center text-3xl">Lista de Pacientes </h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
                    {patients.map(patients => (
                        <PatientsDetail
                            key={patients.id}
                            patient={patients}
                        />
                    ))}
                </p>
            </>
        
        ): (
            <>
                <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Comienza Agregando Pacientes {''}
                    <span className="text-indigo-600 font-bold"> y aparecerán en este lugar</span>
                </p>
                
            </>
        )}
    </div>
  )
}
