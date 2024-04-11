import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Base } from '@/templates/Base';

const Index = (props: any) => {
  console.log(props);
  return <Base />;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Index;
