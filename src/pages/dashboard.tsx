import { Meta } from '@/layout/Meta';
import { UserNavbar } from '@/navigation/UserNavbar';
import DashboardPage from '@/templates/Dashboard';
import { AppConfig } from '@/utils/AppConfig';

const Dashboard = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div
        style={{
          background:
            'linear-gradient(to bottom, rgb(255, 255, 255, 0), rgb(34, 58, 96, 0.2))',
        }}
      >
        <div className="px-6">
          <UserNavbar />
        </div>
        <DashboardPage />
      </div>
    </div>
  );
};

export default Dashboard;
