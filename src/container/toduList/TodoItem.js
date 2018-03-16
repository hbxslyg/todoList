import React from 'react';

export default class TodoItem extends React.Component{
    constructor(){
        super();
        this.state={
            edid:false
        }
    }
    setEdid(edid){
        this.setState({
            edid
        })
    }
    componentDidUpdate (){
        // this.refs.input.focus()
        if (this.state.edid === true){
            this.refs.input.select();
        }
    }
    show(){
        if(this.state.edid){
            return(
                <div className="item">
                    <input
                        type="text"
                        ref = 'input'
                        onBlur={(ev)=>{
                            this.props.setTitle(this.props.todo.id,ev.target.value);
                            this.setEdid(false);
                        }}
                        defaultValue={this.props.todo.title}
                    />
                </div>
                )
        }else {
            return(
                <div className="item">
                    <input
                        type="checkbox"
                        checked={this.props.todo.status==='finished'}
                        onChange={(ev)=>{this.props.setStatus(this.props.todo.id)}}
                    />
                    <span
                        className={this.props.todo.status === 'finished' ? 'content finished' : 'content'}
                        onDoubleClick={()=>{this.setEdid(true)}}
                    >{this.props.todo.title}</span>
                    <span
                        className="del"
                        onClick={()=>this.props.delItem(this.props.todo.id)}
                    >×</span>
                </div>
            )
        }
    }
    render(){
        return this.show()
    }
}