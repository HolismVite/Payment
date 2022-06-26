import { List, Text } from '@List'

const filters = <>
    <Text
        column='UniqueCode'
        placeholder='Unique key'
    />
</>

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
        title='Transactions'
        entityType='Transaction'
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default Transactions