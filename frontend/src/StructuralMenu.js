import * as React from 'react';
import { UnorderedList, ListItem } from 'evergreen-ui';

export function StructuralMenu(props) {
  console.log(props, 'props');
  if (props.menu && props.menu.length > 0) {
    return (
      <UnorderedList size={300}>
        {props.menu.map((dish, index) => (
          <ListItem key={index}>
            {dish.name} | {dish.price}
          </ListItem>
        ))}
      </UnorderedList>
    );
  } else {
    return '';
  }
}
