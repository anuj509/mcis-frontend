const baseUrl = 'https://mini-car-inventory.herokuapp.com/api';

export const environment = {
  production: false,
  addManufacturerURL: baseUrl+'/add-manufacturer',
  getManufacturersURL: baseUrl+'/get-manufacturers',
  addModelURL: baseUrl+'/add-model',
};