import { Component } from 'react';

import nextId from 'react-id-generator'

import './employees-add-form.scss';

class EmployeesAddForm extends Component{
    _id = nextId();
    constructor(props){
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
        this._id = props.index;
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onAddItem = (e) => {
        e.preventDefault();
        const result = this.props.onAdd(this.state.name, this.state.salary, ++this._id);
        if(result !== null)
            this.setState(() => ({name: "", salary: ""})); 
    }

    render(){
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onReset={this.handleFormReset}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name = "name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name = "salary"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onAddItem}>
                            Добавить</button>
                </form>
            </div>   
        )
    }
}

export default EmployeesAddForm;