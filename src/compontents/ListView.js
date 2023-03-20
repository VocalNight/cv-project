export default function ListView({ info, onEdit }) {
    return(
        <div>
          <div>{info.position ? info.position : info.school} --- {info.from} - {info.to}
          -- <button onClick={() =>onEdit(info)}>Edit</button></div>  
        </div>
    )
}
