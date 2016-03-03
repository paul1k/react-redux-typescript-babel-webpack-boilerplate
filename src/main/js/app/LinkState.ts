import * as _ from 'lodash';

export interface LinkState {
  uid: string,
  href: string,
  counter: number
}

export const LINK_CLICKED = 'Link.clicked';

export function linkClicked(linkUid) {
  return {type: LINK_CLICKED, payload: {linkUid}};
}

export function reduceLinkState(state, action):LinkState {
  state = Object.assign({
    uid: _.uniqueId(),
    counter: 0
  }, state);

  if (action.payload && action.payload.linkUid == state.uid) {
    switch (action.type) {

      case LINK_CLICKED:
        state.counter++;
        break;
    }
  }

  return Object.freeze(state);
}
