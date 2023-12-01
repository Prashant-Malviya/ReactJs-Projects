import Item from './Components/Item'
import './App.css'
import ItemDate from './Components/ItemDate'
import Card from './Components/Card'

function App() {
  const response = [
    {
      itemName : "SmartPhone",
      itemDate : "2",
      itemMonth : "December",
      itemYear : "2023"
    },
    {
      itemName : "SmartPhone1",
      itemDate : "21",
      itemMonth : "December1",
      itemYear : "2023"
    },
    {
      itemName : "SmartPhone13",
      itemDate : "214",
      itemMonth : "December13",
      itemYear : "20234"
    }
  ]

  return (
    <>
      
     <Card>
     <Item name = {response[0].itemName} />
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} />

      <Item name = {response[1].itemName} />
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear} />

      <Item name = {response[2].itemName} />
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear} />
     </Card>

    </>
  )
}

export default App
