import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonLoader() {
    return (
        <div>
            <Skeleton count={4} width={200} />
        </div>
    )
}

export default SkeletonLoader