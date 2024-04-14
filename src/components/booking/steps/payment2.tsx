import axios from 'axios';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'react-feather';

import type { Transaction } from '@/components/forms/hooks/data';
import { FullWidthLoading } from '@/components/loading/full-width';

const Payment2Step: React.FC<{
  onNextStep: () => void;
  onPrevStep: () => void;
}> = ({ onNextStep }) => {
  const [loadingText, setLoadingText] = useState('');
  const { t } = useTranslation('common');
  // const mutation = useMutation(payWithFlexPay, {
  //   onSuccess: () => {
  //     onNextStep();
  //   },
  //   onError: () => {
  //     console.log('error');
  //     setLoadingText('');
  //   },
  // });
  const [transaction, setTransaction] = useState<Transaction>();
  const [data, setData] = useState('');
  const router = useRouter();

  const reference = router.query.ref;
  useEffect(() => {
    if (reference)
      setTransaction({
        id: Number.parseInt(reference as string, 10),
      } as Transaction);
    else {
      const transactionJson = JSON.parse(
        localStorage.getItem('transactions') || '[]',
      );
      if (transactionJson.length > 0) {
        setTransaction(transactionJson[transactionJson.length - 1]);
      }
    }
  }, [router.query.ref]);

  const ref = useRef<HTMLDivElement>(null);

  const getPaiementPage = async () => {
    setLoadingText('Nous preparons votre paiement...');
    try {
      const res = await axios.post('/api/create-payments/paiement', {
        reference: transaction?.id,
      });
      setData(res.data);
      // ref?.current?.setAttribute('innerHTML', res.data);
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setLoadingText('');
    }, 5000);
  };

  return (
    <div className="h-[70vh] p-0 md:p-10">
      {data && (
        <div className="absolute left-0 top-0 z-[800] flex h-full w-full flex-col items-center justify-center bg-primary-200">
          <button
            onClick={() => setData('')}
            className="ml-auto flex h-[30px] flex-row gap-[5px] rounded-[5px] border-DEFAULT border-blue px-3 text-red"
          >
            <ArrowLeft /> {t('booking.cancel')}
          </button>
          <div
            className="w-full grow"
            dangerouslySetInnerHTML={{ __html: data }}
            ref={ref}
          ></div>
        </div>
      )}
      <div className="flex flex-row justify-between">
        <h2 className="mb-6 text-[14px] uppercase text-blue">
          {t('booking.step')} 4/5 <span className="mx-4">|</span>{' '}
          {t('booking.payment')}
        </h2>
      </div>

      <p className="p-8 text-center text-[12px] font-bold text-blue md:text-[16px]">
        {loadingText && <FullWidthLoading text={loadingText} />}
      </p>

      <p className="text-md mb-2 text-center text-black md:mb-10">
        {t('booking.para1')}
        <br />
        {t('booking.para2')}
      </p>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
        <button
          className="mt-5 rounded-[10px] bg-red px-8 py-2 text-sm text-white"
          onClick={() => onNextStep()}
        >
          {t('booking.later')}
        </button>
        <button
          className="mt-5 rounded-[10px] bg-blue px-8 py-2 text-sm text-white"
          onClick={getPaiementPage}
        >
          {t('booking.pay')}
        </button>
      </div>
    </div>
  );
};

export default Payment2Step;
