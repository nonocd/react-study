export type Result<T = any> = {
  code: string;
  msg: string;
  data: T;
};
