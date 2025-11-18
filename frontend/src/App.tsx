import { Outlet } from 'react-router-dom';
import { ErrorBoundaryWithReset } from '@/core/components/ErrorBoundary';

export function App() {
  return (
    <ErrorBoundaryWithReset>
      <Outlet />
    </ErrorBoundaryWithReset>
  );
}
