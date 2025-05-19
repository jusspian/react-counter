import "@fortawesome/fontawesome-free/css/all.min.css";

function SecondsCounter ({seconds}){
    const digits = String(seconds).padStart(6,"0").split("").join(' ');
    return(
        <div className="counter">
        
        <span>
            <i className="fa fa-clock"></i>
            {digits}
            
        </span>
        </div>
    )
}

export default SecondsCounter