import TransactionsComp from './TransactionsComp'
import AddUserForm from './AddUserForm'

export default function Home() {

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Transactions-app</h1>
      <AddUserForm />
      <TransactionsComp />
    </div>
  )
}