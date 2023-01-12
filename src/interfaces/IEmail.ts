export interface IEmail {
  id?: number | string;
  address: string;
  isUnsubscribed: boolean;
}

export interface IBodyEmail {
  address: string;
}
