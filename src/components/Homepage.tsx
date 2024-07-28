import{ Header } from "./Header"
import{ EmployeeList} from "./EmployeeList"
import {EmployeePage} from "./EmployeePage"
import {SearchBar} from "./SearchBar"
import "../styles/homepage.css"


const avtr = "https://github.com/user-attachments/assets/ff1808e6-e144-47f0-b323-0ae224bb8e1b"

interface HomepageProps{


}


export function Homepage ({}: HomepageProps): JSX.Element {

return (
<>
<section>
  <div className="container">
<div className="col-one">
  <Header  text="Employee Directory"/>
  <SearchBar />
  <EmployeeList />
</div>
<div className="col-two">  
  <Header text="Employee "/>
<EmployeePage  name_="Gabriel Garcia" avatar={avtr} title="Systems Engineer" office_no="0000000" mobile="0000000" email="0000000"/>

</div>

  </div>
</section>



</>)

}