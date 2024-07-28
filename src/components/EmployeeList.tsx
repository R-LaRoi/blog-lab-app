import { EmployeeListItem } from "./EmployeeListItem"

interface EmployeeProps{

}

const avtr = "https://github.com/user-attachments/assets/ff1808e6-e144-47f0-b323-0ae224bb8e1b"

export  function EmployeeList({}: EmployeeProps) :JSX.Element
 {

return (<>

<EmployeeListItem name="Rachel Stroy" title="Software Engineer"  avatar={avtr}/>
<EmployeeListItem name="Damon Turner" title="Security Systems Administrator" avatar={avtr} />
<EmployeeListItem name="Makho Nsibandze" title="Wealth Manager" avatar={avtr} />
<EmployeeListItem name="Lotanna Orakwe" title="Project Manager"  avatar={avtr}/>
<EmployeeListItem name="Shawn Lawrence" title="Senior Architect" avatar={avtr} />
<EmployeeListItem name="Marlon King" title="King" avatar={avtr} />
</>)

}