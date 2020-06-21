import { createGlobalState } from 'react-hooks-global-state';


export const tabs = [
  { id: 'talent', name: 'Talent Hunt' },
  { id: 'job', name: 'Job Hunt' },
  // { id: 'thank-you', name: 'Thank You' },
];

const initialState = {
  activeTab: tabs[0],
  loaded: false
};


export const { setGlobalState, useGlobalState } = createGlobalState(initialState);


