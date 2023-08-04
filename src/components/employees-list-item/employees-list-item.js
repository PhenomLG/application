import { Component } from 'react';
import './employees-list-item.scss';

class EmployeesListItem extends Component  {
    constructor(props){
        super(props);
        this.state = {
            salary: props.salary,
            error: false,
            isSalaryUpdating: false
        }
    }

    onInputSalaryChange = async (e) => {
        this.setState({isSalaryUpdating: true});
        let salary = e.target.value.match(/\d/ig);

        if(!this.state.isSalaryUpdating)
        {
            if(salary !== null)
            {
                salary = salary.join("");
                console.log(salary);
                this.setState({error: false});
            }
            else 
            {
                salary = "";
                console.log(salary);
                this.setState({error: true});
            }
            this.props.onInputSalaryChange(this.props.id, salary);

            this.setState(({salary}));
            setTimeout(() => this.setState(({isSalaryUpdating: false})), 20);
        }
    };

    render(){
        const {name, onDelete, onToggleProp, increase, promotion, error} = this.props;
        const {salary} = this.state;
        let liClasses = "list-group-item d-flex justify-content-between";

        if(increase)
            liClasses += " increase";
        if(promotion)
            liClasses += " like"
        if(error)
            liClasses += " list-group-item-input-error";

        return (
            <li className={liClasses}>
                <span 
                    className="list-group-item-label"
                    onClick={onToggleProp}
                    data-toggle="promotion">{name}</span>
                <input type="text" 
                       className="list-group-item-input" 
                       value={salary + "$"}
                       onChange={(e) => {this.onInputSalaryChange(e)}}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button" 
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>  
        )
    }
}
export default EmployeesListItem;