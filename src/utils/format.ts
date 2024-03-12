import dayjs from 'dayjs';

export const getTimeOrDate = (timeOrDate: string, date: string) => {
  if (!timeOrDate) return '';
  if (timeOrDate.length < 10)
    return `${date} ${timeOrDate.substring(0, timeOrDate.lastIndexOf(':'))}`;
  return dayjs(timeOrDate).format('DD-MM-YYYY hh:mm');
};
