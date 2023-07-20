import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete,onToggleProp, onInputSalaryChange}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                id = {id}
                {...itemProps}
                // Передаем метод и прокидываем id
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
                onInputSalaryChange = {onInputSalaryChange}
            /> 
        )
    });
    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList;