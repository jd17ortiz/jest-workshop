import Service from './request-async';

export default (userId) => {
  return Service.getName(userId);
}
