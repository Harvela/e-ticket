import React from 'react';

const Payment1Step: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="mb-6 text-[14px] font-bold text-blue">PAIEMENT</h2>
        <div className="flex flex-row items-center gap-12 text-blue">
          <p className="text-[14px] font-bold">
            TOTAL : <span className="ml-2">200 USD</span>
          </p>
          <button
            className="rounded-[10px] bg-blue px-8 py-1 text-sm text-white"
            onClick={onNextStep}
          >
            PAYER
          </button>
        </div>
      </div>
      <table className="w-[50%]">
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
