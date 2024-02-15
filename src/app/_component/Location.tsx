
interface data {
    id: string;
    name: string;
    parent: string | null;
    active: boolean;
}

export default function Location (props: { locations: data[]; parent: null | string; toggleActive: (id:string)=> void }) {

    const children = props.locations.filter((loc) => loc.parent === props.parent)
    console.log(children);

    if (children.length === 0)
        return null;
    else
        return (<ul className="pl-8 py-1">
            {
                children.map((loc,i)=>{
                    return <li key={i}>
                        <span onClick={()=>{props.toggleActive(loc.id)}} className="cursor-pointer">
                            {
                               (loc.active && props.locations.filter((parent) => parent.parent === loc.id).length !== 0) ? '↓ ' : '→ '
                            }
                        </span>
                        {loc.name}
                        {
                            loc.active ?
                                <Location locations={props.locations} parent={loc.id} toggleActive={props.toggleActive}/>
                            :
                                <></>
                        }
                    </li>
                })
            }
        </ul>)
}
