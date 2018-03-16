import React from 'react';

export default class Filtrate extends React.Component{
    render(){
        return(
            <div className="todo-select">
                <div className="todo-info">
                    <span>已完成{this.props.state.todolist.filter(item=>item.status === 'finished').length}项 共{this.props.state.todolist.length}项</span>
                </div>
                <div className="select-btn">
                    <span
                        className={this.props.state.opt === 'all' ? 'todo-all cur' : 'todo-all'}
                        onClick={()=>this.props.setOpt('all')}
                    >全  部</span>
                    <span
                        className={this.props.state.opt === 'finished' ? 'todo-finished cur' : 'todo-finished'}
                        onClick={()=>this.props.setOpt('finished')}
                    >已完成</span>
                    <span
                        className={this.props.state.opt === 'unfinished' ? 'todo-unfinished cur' : 'todo-unfinished'}
                        onClick={()=>this.props.setOpt('unfinished')}
                    >未完成</span>
                </div>
                <div className="todo-clear">
                    <span
                        onClick={()=>this.props.clearAll()}
                    >清空所有</span>
                </div>
            </div>
        )
    }
}