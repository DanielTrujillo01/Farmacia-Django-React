export default function CajerosView() {
    const cajas = Array(6).fill({
      caja: "1", // Puedes poner el número dinámico
      cajero: "Nombre del cajero",
    });
  
    const handleCajaClick = (index) => {
      alert(`Haz hecho clic en la Caja ${index + 1}`);
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}
        <header className="bg-white p-4 flex justify-between items-center shadow">
          <span className="text-xl font-bold">🌿 Healthy</span>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold">Atrás</button>
        </header>
  
        {/* Main content */}
        <main className="flex-1 p-8">
          {/* Lista de cajas */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {cajas.map((caja, index) => (
              <div
                key={index}
                className="flex items-center border rounded-lg p-4 bg-white shadow hover:shadow-lg transition"
              >
                {/* Ícono de usuario */}
                <div className="w-1/4 flex justify-center items-center">
                  <div className="border rounded-full h-16 w-16 flex justify-center items-center text-2xl">
                    👤
                  </div>
                </div>
  
                {/* Info de la caja */}
                <div className="flex-1 ml-4">
                  {/* Botón Caja */}
                  <button
                    onClick={() => handleCajaClick(index)}
                    className="bg-teal-500 text-white font-bold px-4 py-1 rounded-lg inline-block mb-2 hover:bg-teal-600 transition"
                  >
                    Caja {caja.caja}
                  </button>
  
                  {/* Nombre del cajero */}
                  <div className="font-semibold">Cajero:</div>
                  <div>{caja.cajero}</div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Botón Añadir Caja */}
          <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition">
            Añadir Caja
          </button>
        </main>
      </div>
    );
  }
  