export interface ISubmission {
  id?: number | string;
  from: string;
  to: string[];
  subject: string;
  text: string;
  html?: string;
}

export interface IBodySubmission {
  subject: string;
  text: string;
  html?: string;
}
