import React from 'react'
import ComponentC from './ComponentC'

function ComponentB({ count }) {
    return (
        <div>
            ComponentB
            <ComponentC count={count} />
        </div>
    )
}

export default ComponentB