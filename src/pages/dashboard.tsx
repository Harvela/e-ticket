import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { assignTransactions } from '@/components/forms/hooks/data';
import { FullWidthLoading } from '@/components/loading/full-width';
import { Meta } from '@/layout/Meta';
import { UserNavbar } from '@/navigation/UserNavbar';
import DashboardPage from '@/templates/Dashboard';
import { AppConfig } from '@/utils/AppConfig';

const Dashboard = () => {
  // const { data } = useQuery(['reservations'], () => getReservations());
  const [token, setToken] = useState('');
  const navigation = useRouter();

  useEffect(() => {
    const t = window.localStorage.getItem('token') as string;
    if (!t) navigation.push('/login');
    else setToken(t);
  }, []);

  const mutation = useMutation(assignTransactions, {
    onSuccess: () => {
      localStorage.setItem('transactions', JSON.stringify([]));
    },
  });

  useEffect(() => {
    const transactions = JSON.parse(
      localStorage.getItem('transactions') || '[]',
    );

    console.log(transactions);

    if (transactions.length) {
      mutation.mutate(
        transactions.filter((d: any) => d?.id).map((d: any) => d.id),
      );
    }
  }, []);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {!token && <FullWidthLoading text="Connexion et chargement de donnes" />}
      {token && (
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
      )}
    </div>
  );
};

export default Dashboard;
