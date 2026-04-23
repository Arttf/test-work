import AppSidebar from './ui/Sidebar';

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <AppSidebar />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Номера заданий</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded">Задание 1</div>
            <div className="bg-blue-500 text-white p-4 rounded">Задание 2</div>
            <div className="bg-blue-500 text-white p-4 rounded">Задание 3</div>
            <div className="bg-blue-500 text-white p-4 rounded">Задание 4</div>
            <div className="bg-blue-500 text-white p-4 rounded">Задание 5</div>
            <div className="bg-blue-500 text-white p-4 rounded">Задание 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
