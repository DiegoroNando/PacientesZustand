import type { Patient } from "../types"

type PatientsDetailProps ={
    patient: Patient
}

export default function PatientsDetail({patient}:PatientsDetailProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> ID: {''}
            <span className="font-normal normal-case">{patient.id}</span>
        </p>
    </div>
  )
}
