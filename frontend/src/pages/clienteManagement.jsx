export default function ClientManagement() {
    const clients = Array(10).fill({
      nombre: "Nombre",
      apellido: "Apellido",
      identificacion: "Identificación",
      prioridad: "Prioridad",
    });
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-white p-4 flex justify-between items-center">
          <span className="text-xl font-bold">🌿 Healthy</span>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold">Atrás</button>
        </header>
  
        <main className="flex-1 p-8 flex gap-8">
          {/* Tabla de clientes */}
          <div className="flex-1 bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Buscar"
                className="border rounded px-4 py-2 flex-1 mr-4"
              />
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold">
                Seleccionar
              </button>
            </div>
  
            <table className="w-full text-left">
              <thead className="border-b">
                <tr>
                  <th></th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Identificación</th>
                  <th>Prioridad</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <tr key={index} className="border-b">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{client.nombre}</td>
                    <td>{client.apellido}</td>
                    <td>{client.identificacion}</td>
                    <td>{client.prioridad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Formulario de edición */}
          <div className="w-1/3 bg-white rounded-lg shadow p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500 rounded-l-[50px]"></div>
            <h2 className="text-2xl font-bold mb-6 relative z-10">Datos</h2>
            <div className="space-y-4 relative z-10">
              <div>
                <label className="block mb-1">Nombre</label>
                <input type="text" className="border rounded px-4 py-2 w-full" placeholder="Agregar texto" />
              </div>
              <div>
                <label className="block mb-1">Apellido</label>
                <input type="text" className="border rounded px-4 py-2 w-full" placeholder="Agregar texto" />
              </div>
              <div>
                <label className="block mb-1">Prioridad</label>
                <input type="text" className="border rounded px-4 py-2 w-full" placeholder="Agregar texto" />
              </div>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold mt-4">Editar</button>
            </div>
          </div>
        </main>
      </div>
    );
  }
  