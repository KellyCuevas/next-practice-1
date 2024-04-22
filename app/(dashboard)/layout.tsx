import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
