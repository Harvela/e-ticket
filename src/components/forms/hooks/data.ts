import axiosParent from 'axios';
import dayjs from 'dayjs';

const axios = axiosParent.create({
  baseURL: 'http://localhost:1337',
  headers: {
    Authorization: `Bearer 9d1124311d38ba200a799bb71cb09758d35914009a4b2c1deca8aece1cfc7300ace841d8bb0b5cc8e01dc87efcecf0cb7bba3e8b0719dc61a38f0148a9791c5a596d47a40150c219666b2a0a425f1774bb079758c912e0cff5ef5d3fd66749644fbf4b1f1c9ec06e6d8eb9088b546a1e202576dd19fe350b61139e9134bf0a36`,
  },
});

const getDay = (day: number) => {
  switch (day.toString()) {
    case '1':
      return 'LUNDI';
    case '2':
      return 'MARDI';
    case '3':
      return 'MERCREDI';
    case '4':
      return 'JEUDI';
    case '5':
      return 'VENDREDI';
    case '6':
      return 'SAMEDI';
    case '7':
      return 'DIMANCHE';
    default:
      return 'LUNDI';
  }
};

interface Response<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

// get cities
interface Place {
  id: number;
  attributes: {
    name: string;
    province: string;
  };
  // Add other properties of a place as needed
}

export interface Transaction {
  id: number;
  attributes: {
    totalAmount: string;
  };
  // Add other properties of a place as needed
}

interface Media {
  id: number;
  attributes: {
    url: string;
    mime: string;
    name: string;
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
}

interface Company {
  id: number;
  attributes: {
    name: string;
    logo: { data: Media };
  };
  // Add other properties of a place as needed
}

interface Plane {
  id: number;
  attributes: {
    code: string;
    model: string;
    placeCount: number;
    company: { data: Company };
  };
  // Add other properties of a place as needed
}

export interface Flight {
  id: string;
  attributes: {
    place_arrival: { data: Place };
    place_depart: { data: Place };
    plane: { data: Plane };
    time_arrival: Date;
    time_depart: Date;
    totalPrice: number;
  };
}

interface Passenger {
  id: number;
  attributes: {
    name: string;
    email: string;
  };
  // Add other properties of a passenger as needed
}

// interface Reservation {
//   id: number;
//   attributes: {
//     passengerId: number;
//     flightId: number;
//   };
//   // Add other properties of a reservation as needed
// }

export const fetchPlaces = async (name: string) => {
  const response = await axios.get('/api/places', {
    params: { name },
  });
  return response.data as {
    data: Place[];
    meta: any;
  };
};

export const fetchCompanies = async (name: string) => {
  const response = await axios.get('/api/companies', {
    params: { name },
  });
  return response.data as {
    data: Company[];
    meta: any;
  };
};

// get flight and filter them by destination and origin as well as by date origin and date destination

interface FlightSearchParams {
  place_depart?: string;
  place_arrival?: string;
  date?: string;
  ids?: number[];
  company?: string;
  rawDate?: string;
  plane?: string;
}

export const countReservation = async (data: { id: string }) => {
  const response = await axios.get('/api/reservation/count', {
    params: {
      schedule: data.id,
    },
  });
  return response.data;
};

interface CreateReservationProps {
  passengers: any[];
  schedules: any[];
  dates: any[];
  totalPrice: string;
}

export const createReservation = async (data: CreateReservationProps) => {
  // create passengers.
  try {
    const result = await axios.post('/api/reservation/full', data);

    return result;
  } catch (err) {
    return err;
    // console.log(err);
  }
};

export const fetchFlights = async ({
  place_depart,
  place_arrival,
  date,
  company,
  ids,
  plane,
}: FlightSearchParams) => {
  const where = {} as any;
  if (ids) {
    ids.forEach((id, index) => {
      where[`filters[id][$in][${index}]`] = id;
    });
  }
  if (date) {
    where[`filters[time_depart][$gt]`] = dayjs(date)
      .set('h', 0)
      .set('minute', 0)
      .toISOString();
    where[`filters[time_depart][$lt]`] = dayjs(date)
      .set('h', 23)
      .set('minute', 59)
      .toISOString();
  }
  if (place_depart) {
    where[`filters[place_depart][id][$eq]`] = place_depart;
  }
  if (place_arrival) {
    where[`filters[place_arrival][id][$eq]`] = place_arrival;
  }
  if (company) {
    where[`filters[plane][company][id][$eq]`] = place_arrival;
  }
  if (plane) {
    where[`filters[schedule][id][$eq]`] = plane;
  }
  const response = await axios.get('/api/flights', {
    params: {
      'populate[plane][populate][0]': 'company',
      'populate[plane][populate][1]': 'company.logo',
      'populate[place_arrival][populate]': '*',
      'populate[place_depart][populate]': '*',
      ...where,
    },
  });
  return response.data as Response<Flight>;
};

export const fetchSchedules = async ({
  place_depart,
  place_arrival,
  date,
  company,
  ids,
  rawDate,
}: FlightSearchParams) => {
  const where = {} as any;

  if (ids) {
    ids.forEach((id, index) => {
      where[`filters[id][$in][${index}]`] = id;
    });
  }
  if (date) {
    where[`filters[day][$eq]`] = getDay(new Date(date).getDay());
  }
  if (rawDate) {
    where[`filters[day][$eq]`] = rawDate;
  }
  if (place_depart) {
    where[`filters[place_depart][id][$eq]`] = place_depart;
  }
  if (place_arrival) {
    where[`filters[place_arrival][id][$eq]`] = place_arrival;
  }
  if (company) {
    where[`filters[plane][company][id][$eq]`] = place_arrival;
  }
  const response = await axios.get('/api/schedules', {
    params: {
      'populate[plane][populate][0]': 'company',
      'populate[plane][populate][1]': 'company.logo',
      'populate[place_arrival][populate]': '*',
      'populate[place_depart][populate]': '*',
      ...where,
    },
  });
  return response.data as Response<Flight>;
};

// fetch flights and their prices
export const fetchFlightById = async (flightId: number) => {
  const response = await axios.get(`/api/flights/${flightId}`);
  return response.data as Flight;
};

// add card paiment by flex pay

export const payWithFlexPay = async (transactionId: number) => {
  const response = await axios.post('/api/transactions/pay', { transactionId });
  console.log(response);
  return response;
};

// create reservation with code and everything

const fetchPassengerByEmail = async (email: string) => {
  const response = await axios.get('/api/passengers', {
    params: { email },
  });
  return response.data as Passenger[];
};

const createPassenger = async (passengerData: Passenger) => {
  const response = await axios.post('/api/passengers', passengerData);
  return response.data as Passenger;
};

export const createPassengerWithCheck = async (passengerData: Passenger) => {
  // const { email } = passengerData;
  const existingPassengers = await fetchPassengerByEmail('');

  if (existingPassengers.length > 0) {
    return existingPassengers[0];
  }

  return createPassenger(passengerData);
};

export const login = async (data: any) => {
  const response = await axios.post('/api/auth/local', {
    ...data,
  });
  return response.data;
};

export const registerUser = async (data: any) => {
  const response = await axios.post('/api/auth/local/register', {
    ...data,
  });
  return response.data;
};

export const getReservations = async () => {
  const response = await axios.get('/api/reservation/all', {
    params: { token: `Bearer ${window.localStorage.getItem('token')}` },
  });
  return response.data;
};

export const assignTransactions = async (transactionIds: number[]) => {
  const response = await axios.post('/api/transactions/assign', {
    transactionIds,
  });
  return response.data;
};

// export const createReservation = async (
//   reservationData: Reservation,
// ): Promise<Reservation> => {
//   try {
//     const response = await axios.post('/api/reservations', reservationData);
//     return response.data as Reservation;
//   } catch (error) {
//     // Handle errors here if necessary
//     console.error('Error creating reservation:', error);
//     throw error;
//   }
// };

// generate reservation report

// fetch flight schedules ( with filters)

// export const fetchFlightSchedules = async ({
//   origin,
//   destination,
//   originDate,
//   returnDate,
// }: FlightSearchParams) => {
//   const response = await axios.get('/api/schedules', {
//     params: { origin, destination, originDate, returnDate },
//   });
//   return response.data;
// };
