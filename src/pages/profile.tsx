import { Meta } from '@/layout/Meta';
import { UserNavbar } from '@/navigation/UserNavbar';
import ProfilePage from '@/templates/Profile';
import { AppConfig } from '@/utils/AppConfig';

const Profile = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div
        style={{
          background:
            'linear-gradient(to bottom, rgb(255, 255, 255, 0), rgb(34, 58, 96, 0.2))',
        }}
        className="h-screen"
      >
        <div className="px-6">
          <UserNavbar />
        </div>
        <ProfilePage />
      </div>
    </div>
  );
};

export default Profile;
