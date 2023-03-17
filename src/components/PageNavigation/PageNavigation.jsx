import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageNavigationStyle } from '../PageNavigation/PageNavigationStyle.styled';


export function PageNavigation() {
  return (<PageNavigationStyle>
     <NavLink to="/">Main</NavLink>
     <NavLink to="/contacts">Contacts</NavLink>
    </PageNavigationStyle>
    
  );
}
