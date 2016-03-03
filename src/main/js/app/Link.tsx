import * as React from 'react';
import {linkClicked, LinkState} from './LinkState';

interface LinkProps {
  dispatch: Function;
  state: LinkState;
}

export class Link extends React.Component<LinkProps, {}> {

  onLinkClick = () => {
    let {dispatch, state: {uid}} = this.props;
    dispatch(linkClicked(uid));
  };

  render() {
    let {state: {href, counter}} = this.props;
    return (
      <span>
        <a className="link red"
           href={href}
           target="_blank"
           onClick={this.onLinkClick}>
          {href}
        </a>
        (Visit counter: {counter})
      </span>
    );
  }
}
