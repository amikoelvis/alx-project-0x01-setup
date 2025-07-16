export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface GeoProps {
  lat: string;
  lng: string;
}

export interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
}

export interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface GeoData {
  lat: string;
  lng: string;
}

export interface AddressData {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoData;
}

export interface CompanyData {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserData {
  id?: number; // optional because new users won’t have an ID yet
  name: string;
  username: string;
  email: string;
  address: AddressData;
  phone: string;
  website: string;
  company: CompanyData;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
