import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import {
  assignTransactions,
  fetchSchedules,
} from '@/components/forms/hooks/data';
import { FullWidthLoading } from '@/components/loading/full-width';
import { Meta } from '@/layout/Meta';
import DashboardPage from '@/templates/Dashboard';
import { AppConfig } from '@/utils/AppConfig';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

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

    if (transactions.length) {
      mutation.mutate(
        transactions.filter((d: any) => d?.id).map((d: any) => d.id),
      );
    }
  }, []);
  const [filterData, setFilterData] = useState<any>({});
  const { isLoading } = useQuery(['flights', { ...filterData }], () =>
    fetchSchedules(filterData),
  );

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {!token && <FullWidthLoading text="Connexion et chargement de donnes" />}
      {token && (
        <div>
          {isLoading && (
            <FullWidthLoading text={'Nous chargeons nos horaires'} />
          )}
          <DashboardPage
            data={filterData}
            date={filterData.originDate}
            setData={setFilterData}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
