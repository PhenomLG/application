import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "Алексеев А.В", salary: 800, increase:false, promotion:false, id: 1},
                {name: "Бродников В.А", salary: 3000, increase:false, promotion:false, id: 2},
                {name: "Исаев И.К", salary: 5000, increase:false, promotion:false, id: 3},
            ]
        }
    }

    // Удаление элемента по id
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                // В данном случае data заменяется на другой массив,
                // но это было сделано без изменения объекта data напрямую 
                data: data.filter(el => el.id !== id)
            }
        })
    }

    // Свойства прилетают из точки вызова в форме
    AddItem = (name, salary, id, e) =>{    
        e.preventDefault();

        if(name.length < 3 || !salary)
            return;

        this.setState(({data}) => {
            return {
                data: data.concat({name, salary, id})
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(el => {
                if(el.id === id)
                    {
                       return {...el, [prop]: !el[prop]}
                    }
                return el;   
            })
        }))
    }


    render(){
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app"> 
                <AppInfo employees={employees}
                         increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeesAddForm 
                    index = {this.state.data.length}
                    onAdd={this.AddItem}/>
            </div>
        )
    }
}

export default App;