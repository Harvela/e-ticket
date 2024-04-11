import { Base } from '@/templates/Base';
import { locale } from 'dayjs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index = (props) => {
  console.log(props);
return <Base />;
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Index;
