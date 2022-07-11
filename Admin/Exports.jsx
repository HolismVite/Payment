import PaymentIcon from '@mui/icons-material/Payment';
import Transactions from './Transaction/List'

const PaymentRoutes = [
    {
        path: "/transactions",
        component: Transactions
    }
]

const PaymentMenu = [
    {
        title: "Payment",
        icon: PaymentIcon,
        children: [
            {
                title: "Transactions",
                url: "/transactions"
            }
        ]
    }
]

export { PaymentMenu }
export { PaymentRoutes }