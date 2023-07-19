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
                {name: "Алексеев А.В", salary: 800, id: 1},
                {name: "Бродников В.А", salary: 3000, id: 2},
                {name: "Исаев И.К", salary: 5000, id: 3},
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
        
        if(!name || !salary)
            return;

        this.setState(({data}) => {
            return {
                data: data.concat({name, salary, id})
            }
        })
    }

    render(){
        console.log('app is rendered')
        return (
            <div className="app"> 
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm 
                    index = {this.state.data.length}
                    onAdd={this.AddItem}/>
            </div>
        )
    }
}

export default App;