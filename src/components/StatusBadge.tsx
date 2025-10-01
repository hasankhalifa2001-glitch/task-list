import { Status } from '@prisma/client'
import React from 'react'

interface StatusBadgeProps {
    status: Status
}

const StatusBadgePage = ({ status }: StatusBadgeProps) => {

    const statusColor = status === Status.TODO
        ? 'bg-red-400 text-red-950' : status === Status.IN_PROGRESS
            ? 'bg-yellow-400 text-yellow-950' : 'bg-green-400 text-green-950'

    return (
        <div className={`${statusColor} w-fit py-1 px-2 rounded font-semibold`}>
            {status.toString()}
        </div>
    )
}

export default StatusBadgePage