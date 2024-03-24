import { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchCompanies } from '../forms/hooks/data';
import type { SelectProps } from '../forms/select';
import Select from '../forms/select';

interface PlaceInputProps extends SelectProps {}

export const CompanyInput: React.FC<PlaceInputProps> = (props) => {
  const [search] = useState('');
  const { data } = useQuery(['companies', { search }], () =>
    fetchCompanies(search),
  );
  console.log(data?.data[0]?.attributes);
  // return react select
  return (
    <Select
      {...props}
      options={
        data?.data?.map((item) => ({
          label: item.attributes.name,
          value: item.id.toString(),
        })) || []
      }
    />
  );
};
