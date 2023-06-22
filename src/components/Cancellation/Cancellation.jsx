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
                   <p className='created'> Создано сегодня, 13:10 </p>
                   <p className='dota'>  Категория  “Dota 2” </p>
                </div>
                <p className="sit_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
    )
}

export default Cancellation;