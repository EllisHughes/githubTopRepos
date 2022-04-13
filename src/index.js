import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GithubComponent from './githubComponent';

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        height: '100vh',
        margin: '0',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GithubComponent />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
