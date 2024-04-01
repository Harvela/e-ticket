import axios from 'axios';
import FormData from 'form-data';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const data = new FormData();
  data.append('merchant', 'HARV  ');
  data.append('reference', req.body.reference);
  data.append('amount', '5');
  data.append('currency', 'USD');
  data.append('description', 'data');
  data.append('callback_url', 'https://bot.harvely.com');
  data.append('approve_url', 'https://bot.harvely.com');
  data.append('cancel_url', 'https://bot.harvely.com');
  data.append('decline_url', 'https://bot.harvely.com');
  data.append(
    'authorization',
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzcwOTgzOTM2LCJzdWIiOiJiZDNiZDE4MGU0NWIxYjJiN2Q4ZjgyMDAyMDE0NDJhOCJ9.0ybpyrej9xObzqxPmXNGPmBH1ISNxOBxXh_AkQ2qPi0',
  );
  data.append(
    'token',
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzcwOTgzOTM2LCJzdWIiOiJiZDNiZDE4MGU0NWIxYjJiN2Q4ZjgyMDAyMDE0NDJhOCJ9.0ybpyrej9xObzqxPmXNGPmBH1ISNxOBxXh_AkQ2qPi0',
  );

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://cardpayment.flexpay.cd/v1/pay',
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzcwOTgzOTM2LCJzdWIiOiJiZDNiZDE4MGU0NWIxYjJiN2Q4ZjgyMDAyMDE0NDJhOCJ9.0ybpyrej9xObzqxPmXNGPmBH1ISNxOBxXh_AkQ2qPi0',
      authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzcwOTgzOTM2LCJzdWIiOiJiZDNiZDE4MGU0NWIxYjJiN2Q4ZjgyMDAyMDE0NDJhOCJ9.0ybpyrej9xObzqxPmXNGPmBH1ISNxOBxXh_AkQ2qPi0',
    },
    data,
  };

  axios
    .request(config)
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        error: 'Paiement failed',
      });
    });
}
