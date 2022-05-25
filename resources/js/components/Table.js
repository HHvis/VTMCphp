import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import ExpenseDataList from "./ExpenseSummary/ExpenseDataList";


export default function Table() {
    let urlList = {
        link: '#',
        home: '/home'
      }

  return (
    <div className="container">
    <h2><a href={urlList.home}><BsFillArrowLeftSquareFill color="#adb5bd"/></a></h2>
    <h3 className='text-center display-6'>Išlaidų suvestinė</h3>
    <ExpenseDataList />
    </div>
  )
}
