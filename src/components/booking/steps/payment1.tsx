import React from 'react';

const Payment1Step: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div>
      <div className="mb-4 flex flex-row items-center justify-between lg:mb-0">
        <h2 className="text-[14px] font-bold text-blue lg:mb-6">PAIEMENT</h2>
        <div className="flex flex-row items-center gap-4 text-blue lg:gap-12">
          <p className="text-[12px] font-bold lg:text-[14px]">
            TOTAL : <span className="ml-2">200 USD</span>
          </p>
          <button
            className="rounded-[10px] bg-blue px-4 py-1 text-sm text-white lg:px-8"
            onClick={onNextStep}
          >
            PAYER
          </button>
        </div>
      </div>
      <table className="w-full lg:w-[50%]">
        <thead className="text-blue">
          <tr className="flex flex-row items-center justify-between">
            <th className=" py-4 text-left text-[14px] font-bold text-blue">
              Libelle
            </th>
            <th className="py-4 text-left text-[14px] font-bold text-blue">
              Prix Unitaire
            </th>
            <th className="py-4 text-left text-[14px] font-bold text-blue">
              Prix Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="py-4 pl-5 text-sm font-semibold text-blue"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Payment1Step;
