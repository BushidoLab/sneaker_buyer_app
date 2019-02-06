export const schema = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
  required: ['firstName', 'lastName'],
  properties: {
    title: {
      type: 'string',
      title: 'Product Title',
    },
    vendor: {
      type: 'string',
      title: 'Vendor',
    },
    productType: {
      type: 'string',
      title: 'Product Type',
    },
  },
};

export const uiSchema = {
  title: {
    'ui:autofocus': true,
    'ui:emptyValue': '',
  },
  vendor: {
    'ui:autofocus': true,
    'ui:emptyValue': '',
  },
  productType: {
    'ui:autofocus': true,
    'ui:emptyValue': '',
  },
};
