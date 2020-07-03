import HomeScreen from '../screens/home';
import {Contacts, Contact} from '../screens/contact';
import {BottomTab} from '../components';
import {Profil} from '../screens/profil';

export const stackRoutes = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
  },
  {
    name: 'BottomTab',
    component: BottomTab,
  },
  {
    name: 'Contact',
    component: Contact,
  },
  {
    name: 'Profil',
    component: Profil,
  },
];

export const bottomRoutes = [
  {
    name: 'Contacts',
    icon: 'book', // users
    component: Contacts,
  },
  {
    name: 'My Profil',
    icon: 'user',
    component: Profil,
  },
];
