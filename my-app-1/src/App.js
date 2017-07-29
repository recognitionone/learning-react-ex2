import React, { Component } from 'react';
// import logo from './logo.svg';
import brain from './brain1.png';
import './App.css';


// function TodoList({smth}) {
//     console.log("hello " + smth);

//     const items = [];
//     for (let todo of smth) {
//         items.push(<li key={todo.id}>{todo.text}</li>);
//     }

//     return (
//             <ul>
//                 <li>TODO LIST!!</li>
//                 {items}
//             </ul>
//         );
// }

function TodoList({smth}) {
    return (
            <ul>
                {smth.map(todo =>
                    <li key={todo.id}>
                        {todo.isCompleted
                            ? <del>{todo.text}</del>
                            : todo.text}
                    </li>)}
            </ul>
        );
}



class App extends Component {

//this is MODEL, it represents the single source of truth 
// in the entirety of the program
// so every component that we create can have access to this data
  constructor(props) {
    super(props);

    this._nextTodoId = 1;
    this.state = {
      filter: { showCompleted: false },
      todos: [
        {id: this._nextTodoId++, text: "Heya!!", isCompleted: false},
        {id: this._nextTodoId++, text: "stuff", isCompleted: true},
        {id: this._nextTodoId++, text: "things", isCompleted: true},
        {id: this._nextTodoId++, text: "anything", isCompleted: false}
      ]
    };

    this._onShowCompletedChanged = this._onShowCompletedChanged.bind(this);


  }

  render() {
    const {filter, todos} = this.state;
    const filteredTodos = filter.showCompleted
        ? todos
        : todos.filter(todo => !todo.isCompleted);

   

    return (
      <div className="App">
        <div className="App-header">
          <img src={brain} className="App-brain" alt="logo" />
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <img src={brain} className="App-logo" alt="logo" />
          <h2>Ok, another todo list yeah!</h2>
            
        </div>

        <p className="App-intro">
          We can write here whatever we want!<br/>
          
        </p>
        <h2>Ok, what if we crate our todolist here?</h2>
        <label>
            Show Completed
        {/*proxyConsole.js:56 Warning: Failed form propType: 
        You provided a `checked` prop to a form field without an `onChange` handler. 
        This will render a read-only field. 
        If the field should be mutable use `defaultChecked`. 
        Otherwise, set either `onChange` or `readOnly`. 
        Check the render method of `App`.*/}
            <input type="checkbox" 
            checked={filter.showCompleted} 
            onChange={this._onShowCompletedChanged} />
        </label>
        <TodoList smth={filteredTodos} />
      </div>
    );
  }

    //ok, this one is to make checkbox checked or unchecked
   _onShowCompletedChanged(e) {
        this.setState({
            filter: {showCompleted: e.target.checked}
        });
    }

    //now we got to create a component that will loop trough that array 
    //of todos and print it to the screen
}

export default App;


