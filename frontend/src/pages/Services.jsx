import Button from "../components/Button"

export default function ServicioEditor() {
  const servicios = ["Servicio 1", "Servicio 2", "Servicio 3", "Servicio 4", "Servicio 5", "Servicio 6"];

  return (
    <div className="bg-white rounded-lg p-6 shadow w-full max-w-4xl mx-auto">
      <div className="flex items-center mb-4">
        <span className="text-xl font-bold">🌿 Healthy</span>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {servicios.map((servicio, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <Button className="w-full">{servicio}</Button>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full mt-2">Prioridad</span>
            <Button className="absolute bottom-0 right-0 bg-gray-300 text-xs px-2 py-1 mt-1">Editar</Button>
          </div>
        ))}
      </div>
      <div className="border-t pt-4 flex justify-between items-center">
        <Button className="flex-1 mr-4">Servicio Seleccionado</Button>
        <div className="flex flex-col bg-teal-200 text-white font-bold rounded-lg p-4 w-48">
          <span>Fecha:</span>
          <span>Hora:</span>
        </div>
      </div>
    </div>
  );
}
