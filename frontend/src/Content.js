import * as React from 'react';
import { StructuralMenu } from './StructuralMenu';
import { Spinner } from 'evergreen-ui';

export const Content = ({ isLoading, content, isJsonFormat }) => {
  if (isLoading) {
    return <Spinner />;
  }
  if (isJsonFormat) {
    return <StructuralMenu menu={content} />;
  }
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
