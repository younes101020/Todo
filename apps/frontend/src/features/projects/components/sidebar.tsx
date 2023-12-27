const Sidebar = () => {
  return (
    <aside className="w-2/12 bg-slate-800 h-screen flex flex-col items-center text-white p-6 fixed top-0 left-0">
      <h1 className="text-2xl font-medium">Projet(s) 🧑‍💻</h1>
      <ul className="inline-block mt-4 *:truncate">
        <li>Marathon</li>
        <li>you are the best</li>
        <li>Anniversaire fgh</li>
        <li className="flex justify-center rounded border-dashed border-2 mt-2">
          +
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
