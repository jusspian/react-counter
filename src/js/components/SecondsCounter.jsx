import "@fortawesome/fontawesome-free/css/all.min.css";

function SecondsCounter ({seconds}){
    const cronoaspect = String(seconds).padStart(6, '0').split('').join(' ');
    return(
        <div className="counter">
        <i className="fa fa-clock"></i>
        <span>{cronoaspect}</span>
        </div>
    )
}

export default SecondsCounter