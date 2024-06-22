export enum Environment {
  Development = 'development',
  Production = 'production',
}

export const SERVER_URLS = {
  [Environment.Development]: 'https://jsonplaceholder.typicode.com',
  [Environment.Production]: 'https://jsonplaceholder.typicode.com',
};
export enum API_ENDPOINTS {
  GET_USERS = '/users',
}
