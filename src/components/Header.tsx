
interface HeaderProps{
text: string

}


export function Header ({text}:HeaderProps) {

return (<>
<div className="header-container">
{text}
</div>

</>)

}

