function Tarjeta ({titulo, descripcion}) {
    return (
        <>
            <div className="max-w-sm p=4 m=2 bg-whiten  shadow-md rounded-lg">
                <h2 className="text-lg font-semibold">{titulo}</h2>
                <p className="mt-1 text-gray-600">{descripcion}</p>
            </div>
        </>
    )
}

export default Tarjeta