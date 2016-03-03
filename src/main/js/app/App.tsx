import * as React from 'react';
import {AppState, appAddLink} from './AppState';
import {Link} from './Link';

interface AppProps {
  dispatch: Function;
  state: AppState;
}

export class App extends React.Component<AppProps, any> {
  state = {
    href: 'http://google.com'
  };

  onAddLinkClick = e => {
    let {href} = this.state;
    if (href) {
      this.props.dispatch(appAddLink(href));
    }
  };
  
  onInputChange = e => {
    this.setState({href: e.target.value})
  };
  
  render() {
    let {dispatch, state: {links}} = this.props;
    return (
      <div>
        <ul>
          {links.map((link, i) =>
            <li key={i}>
              <Link dispatch={dispatch}
                    state={link}/>
            </li>
          )}
        </ul>
        <input type="text"
               value={this.state.href}
               onChange={this.onInputChange}/>
        <button onClick={this.onAddLinkClick}>Add link</button>
      </div>
    );
  }
}
