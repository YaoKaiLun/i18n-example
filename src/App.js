import React, { Component } from 'react'
import {_, _c, _p} from './lib/i18n'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> intl-example</h1>
        <ul>
          <li>
            <p>普通字符串：</p>
            <p>{_('你好世界！')}</p>
          </li>
          <li>
            <p>插值：</p>
            <p>{_('%s，你好', ['凯伦'])}</p>
          </li>
          <li>
            <p>带上下文：</p>
            <p><i>表示颜色：</i>{_c('表示颜色', '黄色')}</p>
            <p><i>表示色情：</i>{_c('表示色情', '黄色')}</p>
          </li>
          <li>
            <p>单复数：</p>
            <p><i>单数：</i>{_p('1 次', '%d 次', 1, [1])}</p>
            <p><i>复数：</i>{_p('1 次', '%d 次', 2, [2])}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
