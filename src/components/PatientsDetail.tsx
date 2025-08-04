import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientsDetailProps ={
    patient: Patient
}

export default function PatientsDetail({patient}:PatientsDetailProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem
        label="ID:"
        data={patient.id}
        />
    </div>
  )
}
