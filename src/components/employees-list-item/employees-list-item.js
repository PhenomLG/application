import './employees-list-item.css';


const EmployeesListItem = (props) => {

        const {name, salary, onDelete, onToggleProp, increase, promotion} = props;


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
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
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


// const EmployeesListItem = ({name, salary, increase}) => {
//     let liClasses = "list-group-item d-flex justify-content-between";
//     if(increase)
//         liClasses += " increase";
//     return (
//         <li className={liClasses}>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button" className="btn-cookie btn-sm ">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button" className="btn-trash btn-sm ">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>  
//     )
// }

export default EmployeesListItem;