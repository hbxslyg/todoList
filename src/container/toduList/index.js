import React from 'react';
import TodoItem from './TodoItem';
import Filtrate from './Filtrate';
import './css/todulist.less';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todolist: [],
            opt: 'all'
        }
    }

    // 设置opt状态
    setOpt(opt) {
        this.setState({
            ...this.state,
            opt
        })
    }

    // 修改status状态
    setStatus(id) {
        this.setState({
            ...this.state,
            todolist: this.state.todolist.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        status: item.status === 'finished' ? 'unfinished' : 'finished'
                    }
                }
                return item
            })
        })
    }

    // 修改status状态
    setTitle(id, title) {
        this.setState({
            ...this.state,
            todolist: this.state.todolist.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        title
                    }
                }
                return item
            })
        })
    }

    // 修改status状态
    delItem(id) {
        this.setState({
            ...this.state,
            todolist: this.state.todolist.filter(item => item.id !== id)
        })
    }

    // 删除所有
    clearAll() {
        this.setState({
            ...this.state,
            todolist: []
        })
    }

    //添加列表
    addTodo() {
        // console.log(this.state.todolist[this.state.todolist.length - 1].id)
        if (this.refs.addTodo.value.trim() === "") return;
        this.setState({
            ...this.state,
            todolist: [
                ...this.state.todolist,
                {
                    id: this.state.todolist.length === 0
                        ? 1
                        : this.state.todolist[this.state.todolist.length - 1].id + 1,
                    title: this.refs.addTodo.value,
                    status: 'unfinished'

                }
            ]
        });
        this.refs.addTodo.value = '';
    }

    render() {
        return (
            <div className="todolist">
                <div className="input-box">
                    <input
                        ref="addTodo"
                        type="text"
                        placeholder="请添加您的待办事项"
                        onKeyDown={(ev) => {
                            if (ev.keyCode === 13) this.addTodo()
                        }}
                    />
                    <button onClick={() => this.addTodo()}>添 加</button>
                </div>
                {
                    this.state.todolist.length === 0
                        ?
                        null
                        :
                        <div className="list">
                            {
                                this.state.todolist.map((item, index) => {
                                    if (this.state.opt === item.status) {
                                        return <TodoItem
                                            key={index}
                                            todo={item}
                                            setStatus={this.setStatus.bind(this)}
                                            setTitle={this.setTitle.bind(this)}
                                            delItem={this.delItem.bind(this)}
                                        />
                                    } else if (this.state.opt === 'all') {
                                        return <TodoItem
                                            key={index}
                                            todo={item}
                                            setStatus={this.setStatus.bind(this)}
                                            setTitle={this.setTitle.bind(this)}
                                            delItem={this.delItem.bind(this)}
                                        />
                                    }

                                })
                            }
                        </div>
                }
                {
                    this.state.todolist.length === 0
                        ?
                        null
                        :
                        <Filtrate
                            state={this.state}
                            setOpt={this.setOpt.bind(this)}
                            clearAll={this.clearAll.bind(this)}
                        />
                }

            </div>
        )
    }
}