import React from "react";
import "./Cancellation.css"
import callcellation from "../../img/cancellation.svg"

function Cancellation () {
    return (
        <div className="cancellation">
            <div className="container">
                <img className="call_name" src={callcellation}/>
                <div className='text_block'>
                   <h3>Dota 2, Играем на SF, мид до 2 смертей или до падения т1</h3>
                   <p className=''> Создано сегодня, 13:10 </p>
                   <p className=''>  Категория  “Dota 2” </p>
                </div>
            </div>
        </div>
    )
}

export default Cancellation;