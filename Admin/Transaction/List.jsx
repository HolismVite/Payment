import { List } from '@List'

const headers = <>
    <th>Unique Code</th>
    <th>Successful?</th>
</>

const row = (item) => <>
    <td>{item.uniqueCode}</td>
    <td>{item.successful}</td>
</>

const Transactions = () => {
    return <List
        title='Transactions1'
        entityType='Transaction'
        headers={headers}
        row={row}
    />
}

export default Transactions