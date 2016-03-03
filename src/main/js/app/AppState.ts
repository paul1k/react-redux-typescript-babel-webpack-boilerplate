import {reduceLinkState, LinkState} from './LinkState';

export interface AppState {
  links: LinkState[]
}

export const APP_ADD_LINK:string = 'AppStore.addLink';

export function appAddLink(href:string) {
  return {type: APP_ADD_LINK, payload: {href}};
}

export function reduceAppState(state, action):AppState {
  state = Object.assign({
    links: []
  }, state);

  switch (action.type) {

    case APP_ADD_LINK:
      state.links = state.links.concat({href: action.payload.href});
      break;
  }

  state.links = state.links.map(link => reduceLinkState(link, action));

  Object.freeze(state.links);
  return Object.freeze(state);
}
