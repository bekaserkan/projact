// import React, { useState } from "react";
// import "./MyBattles.css";
// import { NavLink } from "react-router-dom";
// import dota from "../../img/dota.svg";
// import dust from "../../img/dust.svg";
// import tt10 from "../../img/tt10.svg";
// import canceled from "../../img/canceled.svg";
// import completed from "../../img/completed.svg";
// import expectation from "../../img/expectation.svg";

// export function Customer() {
//   const [isModalOpen1, setModalOpen1] = useState(false);
//   const [isModalOpen2, setModalOpen2] = useState(false);
//   const [isModalOpen3, setModalOpen3] = useState(false);

//   return (
//     <div className="customer">
//       <div
//         onMouseEnter={setModalOpen1(true)}
//         onMouseLeave={setModalOpen1(false)}
//         className="box_data"
//       >
//         <img className="img" src={dota} />
//         <p className="name">
//           Dota 2, Играем на SF, мид до 2 смертей или до падения т1
//         </p>
//         <p>Игра начинается: 19:25, 04.06.21 </p>
//         <p>Ставка: 1000 сом </p>
//         <div>
//           <p className="status">
//             <img src={canceled} /> Отменен
//           </p>
//         </div>
//         {isModalOpen1 && (
//           <div className="modal">
//             <NavLink className="history" to="">
//               Смотреть историю
//             </NavLink>
//           </div>
//         )}
//       </div>
//       <div
//         onMouseEnter={setModalOpen2(true)}
//         onMouseLeave={setModalOpen2(false)}
//         className="box_data"
//       >
//         <img className="img" src={dust} />
//         <p className="name"> 2x2, Dust2, играем только А плент, до 8 побед </p>
//         <p>Игра начинается: 20:00, 03.06.21 </p>
//         <p>Ставка: 500 сом </p>
//         <div>
//           <p className="status">
//             <img src={completed} /> Завершен
//           </p>
//         </div>
//         {isModalOpen2 && (
//           <div className="modal">
//             <NavLink className="history" to="">
//               Смотреть историю
//             </NavLink>
//           </div>
//         )}
//       </div>
//       <div
//         onMouseEnter={setModalOpen3(true)}
//         onMouseLeave={setModalOpen3(false)}
//         className="box_data"
//       >
//         <img className="img" src={tt10} />
//         <p className="name">
//           {" "}
//           ТТ10, химки перед фантаном, только бб, без голды и фугасов{" "}
//         </p>
//         <p>Игра начинается: 20:00, 03.06.21 </p>
//         <p>Ставка: 100 сом </p>
//         <div>
//           <p className="status">
//             <img src={expectation} /> В ожидании
//           </p>
//         </div>
//         {isModalOpen3 && (
//           <div className="modal">
//             <NavLink className="history" to="">
//               Смотреть историю
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
