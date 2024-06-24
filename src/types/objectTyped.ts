export type UsersType = {
  address?: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company?: {
    name: string;
    catchPhrase: string;
    bg: string;
  };
  email: string;
  id?: number;
  name: string;
  phone: string;
  username: string;
  website?: string;
};

export type UpdateObj = {
  name: string | undefined;
  username: string | undefined;
  phone: string | undefined;
  email: string | undefined;
};