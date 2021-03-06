import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const{items,clearList,handleDelete, handleEdit,handleCopy}=this.props
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center text-primary" >todo list</h3>
                    {items.map(item=>{
                        return(
                            <TodoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)} handleCopy={()=>handleCopy(item.id)}/>

                        )
                    })
                    }
                    <button type="button" className="btn btn-danger mt-3 btn-block text-capitalize" onClick={clearList}>clear list</button>
                </ul>
            </div>
        )
    }
}
