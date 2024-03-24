import { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchPlaces } from '../forms/hooks/data';
import type { SelectProps } from '../forms/select';
import Select from '../forms/select';

interface PlaceInputProps extends SelectProps {
  excludedOptions?: string[];
}

export const PlaceInput: React.FC<PlaceInputProps> = (props) => {
  const [search] = useState('');
  const { data } = useQuery(['places', { search }], () => fetchPlaces(search));

  // return react select
  return (
    <Select
      {...props}
      options={[
        { label: 'Selectionner', value: '' },
        ...(data?.data
          ?.filter((d) => !props.excludedOptions?.includes(d.id.toString()))
          .map((item) => ({
            label: item.attributes.name,
            value: item.id.toString(),
          })) || []),
      ]}
    />
  );
};
