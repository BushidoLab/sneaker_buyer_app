export const schema = {
    title: 'Search StockXByString',
    description: 'Search StockX by any shoe name.',
    type: 'object',
    // required: ['firstName', 'lastName'],
    properties: {
      queryString: {
        type: 'string',
        title: 'Shoe Name',
      },
    },
  };
  
  export const uiSchema = {
    queryString: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
    }
  };
  