import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component{
    _maxId;
    constructor(props){
        super(props);
        this._maxId = Math.max(...props.data.map(el => el.id));
        this.state = {
            data: props.data,
            term: "",
            filter: "all"
        };
    }

    deleteItem = async (id) => {
        await this.props.db.deleteData(id)
        .then(async () => {
            this.setState(({data}) => {
                return {
                    // В данном случае data заменяется на другой массив,
                    // но это было сделано без изменения объекта data напрямую 
                    data: data.filter(el => el.id !== id)
                }
            });
        })
    }

        // Свойства прилетают из точки вызова в форме
    AddItem = async (name, salary, id) =>{   
            if(name.length < 3 || !salary)
                return null;
    
            const newItem = {name, salary, id};
            await this.props.db.postData(JSON.stringify(newItem))
                .then(result => {
                    this.setState(({data}) => {
                        return {
                            data: data.concat(result)
                        }
                    });
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

    searchEmp = (items, term) => {
         if(term.length === 0){
            return items;
         }

         return items.filter(item => {
            const lowerName = item.name.toLowerCase();
            return lowerName.indexOf(term.toLowerCase()) > -1
         })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onToggleFilter = (filter) =>{
        this.setState({filter});
    }

    filterEmp = (items, filter) => {
        switch(filter){
            case "promote":
                return items.filter(item => item.promotion);
            case "limit":
                return items.filter(item => item.salary >= 1000);
            default: return items; 
        }
    }

    onInputSalaryChange = (id, newSalary) =>{
        this.setState(({data}) => ({
            data: data.map(el => {
                if(el.id === id)
                {      
                    const patchedObj = {...el, salary: newSalary}
                    this.props.db.patchData(patchedObj, id)
                    return {...el, salary: newSalary};
                }
                return el;   
            })
        }));
    }

    render(){
        const {data, term} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(this.filterEmp(data, this.state.filter), term);

        return (
            <div className="app"> 
                <AppInfo employees={employees}
                         increased={increased}/>
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={this.state.filter}
                        onToggleFilter={this.onToggleFilter}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onInputSalaryChange = {this.onInputSalaryChange}
                    />
                <EmployeesAddForm 
                    index = {this._maxId}
                    onAdd={this.AddItem}/>
            </div>
        )
    }
}

export default App;