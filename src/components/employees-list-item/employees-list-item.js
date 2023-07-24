import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component  {
    constructor(props){
        super(props);
        this.state = {
            salary: props.salary
        }
    }

    onInputSalaryChange = (e) => {
        const salary = e.target.value.match(/\d/ig).join("");
        this.setState(({salary}));
        this.props.onInputSalaryChange(this.props.id, salary);
    }



    render(){
        const {name, onDelete, onToggleProp, increase, promotion} = this.props;
        const {salary} = this.state;
        let liClasses = "list-group-item d-flex justify-content-between";
        if(increase)
            liClasses += " increase";
        if(promotion)
            liClasses += " like"
        return (
            <li className={liClasses}>
                <span 
                    className="list-group-item-label"
                    onClick={onToggleProp}
                    data-toggle="promotion">
                        {name} 
                </span>
                <input type="text" 
                       className="list-group-item-input" 
                       value={salary + "$"}
                       onChange={this.onInputSalaryChange}/>
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
// const EmployeesListItem = (props) => {
//         const {name, salary, onDelete, onToggleProp, increase, promotion} = props;
//         let liClasses = "list-group-item d-flex justify-content-between";
//         if(increase)
//             liClasses += " increase";
//         if(promotion)
//             liClasses += " like"
//         return (
//             <li className={liClasses}>
//                 <span 
//                     className="list-group-item-label"
//                     onClick={onToggleProp}
//                     data-toggle="promotion">
//                         {name} 
//                 </span>
//                 <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
//                 <div className='d-flex justify-content-center align-items-center'>
//                     <button type="button"
//                         className="btn-cookie btn-sm"
//                         onClick={onToggleProp}
//                         data-toggle="increase">
//                         <i className="fas fa-cookie"></i>
//                     </button>
    
//                     <button type="button" 
//                     className="btn-trash btn-sm "
//                     onClick={onDelete}>
//                         <i className="fas fa-trash"></i>
//                     </button>
//                     <i className="fas fa-star"></i>
//                 </div>
//             </li>  
//         )
// }
export default EmployeesListItem;