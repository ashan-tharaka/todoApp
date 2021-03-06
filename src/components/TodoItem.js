import React,{Component} from "react";
import './TodoItem.css';

export default class TodoItem extends Component
{

    render() {
        const {title,handleEdit,handleDelete,handleCopy}=this.props;

        return (
            <li className="list-group-item  d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                       <span className="mx-2 text-success" onClick={handleEdit}>
                           <i className="fas fa-pen"/>

                       </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                           <i className="fas fa-trash" />

                       </span>
                    <span className="mx-2 text-warning" onClick={handleCopy} >
                           <i className="fas fa-copy"/>

                       </span>

                </div>

            </li>
        );
    }
}
