import React from 'react'

const Basics = () => {
    const [value, setvalue] = React.useState(5)
    const [size, setSize] = React.useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }


    React.useEffect(() => {

        if (value > 0) {
            document.title = `New Messages(${value})`
        }

        window.addEventListener("resize", checkSize);

        return() => {
            window.removeEventListener("resize", checkSize)
        }

    },[value])

    console.log("component section")


    return (
        <div>
            <h1>{value}</h1>
            <h1>{size}</h1>
            <button
                onClick = {() => setvalue(value+1)}
            >+</button>
        </div>
    )
}

export default Basics



// useEffect(() => {
//     effect
//     return () => {
//         cleanup
//     }
// }, [input])