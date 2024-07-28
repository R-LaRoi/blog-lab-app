

interface EmployeePageProps{
name_: string ; 
avatar: string;
title: string;
office_no: string;
mobile: string;
email: string;

}

export function EmployeePage ({avatar, title, office_no,mobile,email, name_}: EmployeePageProps){

  return(
    <div>
    <div className="em-list">
   <div><img src={avatar} alt="" className="avtr" /></div>
<div className="pg-text">
<div>{name_}</div>
<small>{title}</small>

</div>
    </div>

    <div className="em-info">
      <div>Call Office</div>
      <small>{office_no}</small>
    </div>
        <div className="em-info">
    <div>Call Mobile</div>
      <small>{mobile}</small>
    </div>
    
       <div className="em-info">
    <div>Call Email</div>
      <small>{email}</small>
    </div>
    </div>
  )
}