import * as React from 'react';
import { UnorderedList, ListItem } from 'evergreen-ui';

export const StructuralMenu = ({ menu }) => {
  if (menu && menu.length > 0) {
    return (
      <UnorderedList size={300}>
        {menu.map((dish, index) => (
          <ListItem key={index}>
            {dish.name} | {dish.price}
          </ListItem>
        ))}
      </UnorderedList>
    );
  } else {
    return null;
  }
};
