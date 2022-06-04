import './App.css';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from "./components/TodoInput";
import {v4 as uuidv4} from "uuid";
import TodoList from "./components/TodoList";
import './App.css';

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
            title:this.state.item,
        }
        console.log(newItem);


        if(newItem.title===""){
            alert("can't add empty todos");
        }
        else{
            const updatedItems=[...this.state.items,newItem]

            this.setState({
                items:updatedItems,
                item:'',
                id:uuidv4(),
                editItem: false
            })
        }


    }
    clearList=()=>{
        if(this.state.items.length===0){
            alert("List is already cleared");

        }
        else
        {
            this.setState(
                {
                    items:[]

                }
            )
            alert("List is Cleaning");

        }

    }
    handleChange=(e)=>{
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
    handleCopy=id=>{
        const selectedItem=this.state.items.find(item=>item.id===id);
        navigator.clipboard.writeText(selectedItem.title);

    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h1 className="text-capitalize text-center">MyTodo</h1>
                        <br/>

                        <div className="text-center">
                            <img src="https://beorgapp.com/images/presskit/appicon.png" alt={"appicon"} height="25%" width="15%"/>

                        </div>

                        <br/>
                        <br/>

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
                            handleCopy={this.handleCopy}
                        />


                    </div>


                </div>

            </div>
        )
    }
}
export default App;
