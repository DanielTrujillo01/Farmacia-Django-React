export default function AdminDashboard() {
    const options = [
      { label: "Estadísticas", icon: "📈" },
      { label: "Cajeros", icon: "🧑‍💼" },
      { label: "Servicios", icon: "📁" },
      { label: "Usuarios", icon: "🆔" },
      { label: "Reseñas", icon: "📝" },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-white p-4 flex justify-between items-center">
          <span className="text-xl font-bold">🌿 Healthy</span>
        </header>
  
        <main className="flex-1 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-8">
            {options.map((opt, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-teal-500 text-white rounded-lg p-6 shadow-md hover:scale-105 transition transform"
              >
                <div className="text-5xl mb-4">{opt.icon}</div>
                <span className="text-lg font-bold">{opt.label}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
  
  