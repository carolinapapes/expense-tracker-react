import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props) {
    return (
        <Card className='expenses'>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}></ExpenseItem>
        </Card>
    );
}
export default Expenses;
