import "@fortawesome/fontawesome-free/css/all.min.css";

function SecondsCounter ({seconds}){
    const digits = String(seconds).padStart(6,"0").split("");
    return(
        <div className="counter">
        <span>
        <div 
        className="card">       
            <i className="fa fa-clock"></i>
        </div>
            {digits.map((digit, index) => (
                <div className="card" key={index}>
                    {digit}
                </div>
            
            ))}
        </span>
        </div>

    )
}

export default SecondsCounter