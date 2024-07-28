
interface EmployeeListItemProps{
avatar: string;
  name: string;
  title:  string;
}


export function EmployeeListItem({avatar,name,title}: EmployeeListItemProps):JSX.Element {
return (

  <section className="em-list">
  <div><img src={avatar} className="av-icon"></img></div>
  <div>
    <div>{name}</div>
      <small>{title}</small>
      </div>
  </section>
)


}