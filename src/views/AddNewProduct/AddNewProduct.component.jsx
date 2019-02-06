import React, { Component } from 'react';
import SchemaForm from 'jsonschema-form-for-material-ui';
import { uiSchema, schema } from './AddNewProduct.schema';

export default class AddNewProduct extends Component {
  render() {
    return <SchemaForm schema={schema} uiSchema={uiSchema} />;
  }
}
