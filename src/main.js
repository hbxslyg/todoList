import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/toduList';
import './css/style.less'

ReactDOM.render(
    <div className="app">
        <div className="todo-bgtxt">TODOS</div>
        <App/>
    </div>
    ,
    document.getElementById('app')
);