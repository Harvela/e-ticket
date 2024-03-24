import dayjs from 'dayjs';

export const getTimeOrDate = (timeOrDate: string, date: string) => {
  console.log(timeOrDate, date, 'all');
  if (!timeOrDate) return '';
  if ((timeOrDate.split('.')?.[0]?.length || 0) < 10)
    return `${date} ${timeOrDate.split(':')[0]}:${timeOrDate.split(':')[1]}`;
  return dayjs(timeOrDate).format('DD-MM-YYYY hh:mm');
};
