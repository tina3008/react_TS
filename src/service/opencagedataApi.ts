import axios from 'axios';

interface getUserInfoProps {
  latitude: number;
  longitude: number;
};

export const getUserInfo = async ({ latitude, longitude }: getUserInfoProps) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get(urlPosition, {
    params: {
      key: apiKey,
      language: 'en',
    },
  });
  return data;
};
