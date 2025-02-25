import React from 'react'
import { AlertCircle } from 'lucide-react'

function AlertMsg({msg}) {
    return (
        <div className= " p-4 bg-red-500 mt-5 text-white rounded-md flex gap-5 items-center justify-center ">
            <AlertCircle />
            <p>{msg}</p>
        </div>
    )
}

export default AlertMsg