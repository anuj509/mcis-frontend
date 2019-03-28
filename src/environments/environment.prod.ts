const baseUrl = 'http://localhost:8000/api';
export const environment = {
  production: true,
  addManufacturerURL: baseUrl+'/add-manufacturer',
  getManufacturersURL: baseUrl+'/get-manufacturers',
  addModelURL: baseUrl+'/add-model',
  viewInventoryURL: baseUrl+'/view-inventory',
  markAsSoldURL: baseUrl+'/mark-as-sold'
};
