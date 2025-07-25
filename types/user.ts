export type Gender = "male" | "female";
export type Nationality = "US" | string;

export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Address {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface LoginInfo {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface DateInfo {
  date: string;
  age: number;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IdInfo {
  name: string;
  value: string;
}

export interface User {
  readonly gender: Gender;
  readonly name: UserName;
  readonly location: Address;
  readonly email: string;
  readonly login: LoginInfo;
  readonly dob: DateInfo;
  readonly registered: DateInfo;
  readonly phone: string;
  readonly cell: string;
  readonly id: IdInfo;
  readonly picture: Picture;
  readonly nat: Nationality;
}
