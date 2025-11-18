import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Can add Header/Navbar here */}
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      {/* Can add Footer here */}
    </div>
  );
}
