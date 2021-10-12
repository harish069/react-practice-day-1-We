function Student({ data }) {
    console.log(data)
    return (
        <div>
            <h1>Name: {data}</h1>
            <h3>Batch: FTWEB10</h3>
        </div>
    )
}

export default Student;