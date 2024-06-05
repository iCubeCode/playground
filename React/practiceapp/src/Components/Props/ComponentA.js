import React from 'react'
import ComponentB from './ComponentB'

function ComponentA({ count }) {
    return (
        <div>
            ComponentA
            <ComponentB count={count} />
        </div>
    )
}

export default ComponentA