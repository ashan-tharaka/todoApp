import './App.css';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from "./components/TodoInput";
import {v4 as uuidv4} from "uuid";
import TodoList from "./components/TodoList";
class App extends Component{
    state={
        items:[],
        id:uuidv4(),
        item:'',
        editItem: false
    }
    handleSubmit=(e)=>{
        e.preventDefault();

        const newItem={
            id:this.state.id,
            title:this.state.Item,
        }
        console.log(newItem);
        const updatedItems=[...this.state.items,newItem]

        this.setState({
            items:updatedItems,
            item:'',
            id:uuidv4(),
            editItem: false
        })

    }
    clearList=()=>{
        this.setState(
            {
                items:[]

            }
        )
    }
    handleChange=e=>{
        this.setState(
            {
                item:e.target.value
            }
        );
    };
    handleDelete=id=>{
        const filterItems=this.state.items.filter(item=>
            item.id !==id);

        this.setState({
            items:filterItems,

        })


    }
    handleEdit=id=>{
        const filterItems=this.state.items.filter(item=>
            item.id !==id);
        const selectedItem=this.state.items.find(item=>item.id===id);

        this.setState({
            items:filterItems,
            item: selectedItem.title,
            editItem: true,
            id:id
        })

    }

  render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                <h1 className="text-capitalize text-center">MyTodo</h1>
                    <TodoInput
                    item={this.state.item}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    editItem={this.state.editItem}
                    />
                    <TodoList
                        items={this.state.items}
                        clearList={this.clearList}
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                    />


                    </div>


            </div>

        </div>
    )
  }
}
export default App;
