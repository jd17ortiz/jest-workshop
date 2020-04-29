import Service from './service';

export default (id) => {
  let name = Service.getName(id);

  return `Say Hello to ${name}`;
}
