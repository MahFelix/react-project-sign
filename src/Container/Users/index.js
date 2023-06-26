/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from 'react-router-dom';
import React from 'react'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import icon5 from '../../assets/icon5.svg'
import trash from '../../assets/lixeira.svg'





function User() {


  return (
      <div className="bg-grayx w-screen h-screen flex justify-center items-center">
        <>
        <img className='z-0 absolute top-1' src={icon1}></img>
        <img className='z-0 absolute right-1' src={icon3}></img>
        <img className='z-0 absolute left-1 bottom-1' src={icon2}></img>
        <img className='z-0 absolute bottom-1' src={icon5}></img>
        <img className='z-0 absolute left-20 top-1' src={icon4}></img>

        </>

                        <Link to="/">
                       <button className="absolute left-0 bg-[red] font-bold text-white mt-5 w-[80px] cursor-pointer h-[60px] rounded-md pl-1 flex justify-center items-center mb-2 font-Poppins active:opacity-70 " > Voltar </button>
                       </Link>

          <div className="bg-divsec flex  flex-col shadow-lg w-900 h-800  justify-center items-center z-10 border border-regcolor ">

             <h1 className=' font-bold text-5xl  text-black font-Poppins '> FILA DE ESPERA </h1>

              <div className="bg-[#90B4B8]  shadow-lg w-[800px] h-[700px] z-10 border border-regcolor rounded-lg  ">
                  <div>
                      <ul className='bg-[#D9D9D9] w-[799px] flex flex-row items-center border-[1px] border-t-0 border-slate-950 rounded-lg h-[20px] justify-center '>
                        <li className='font-bold ml-10 mr-20 '> Nome</li>
                        <li className='font-bold ml-10 mr-20 ' > Idade </li>
                        <li className='font-bold ml-10 mr-20 ' > Tipo de Exame</li>
                        <li className='font-bold ml-10 mr-10 ' > Senha</li>
                      </ul>

                  </div>

                  <div className='mt-2 flex justify-evenly flex-col'>


                    <div type='text' placeholder=' Jão da quebrada 45 Ultrassom 023' className='bg-[#E8FCF5] w-800 h-10  rounded-xl mt-2  border-[1px] flex justify-around  items-center border-slate-950'>
                      <p className='mr-10'> Maria  </p>
                      <p className='mr-100 ml-10'> 90 </p>
                      <p className='mr-50'> Raio-X </p>
                      <p className='ml-100'> 024</p>
                      <button> <img src={trash}/></button>
                  </div>


                       <div type='text' placeholder=' Jão da quebrada 45 Ultrassom 023' className='bg-[#E8FCF5] w-800 h-10  rounded-xl mt-2  border-[1px] flex justify-around  items-center border-slate-950'>
                      <p className='mr-10'> João </p>
                      <p className='mr-100 ml-10'> 52 </p>
                      <p className='mr-50'> Ultrasson </p>
                      <p className='ml-100'> 025 </p>
                      <button> <img src={trash}/></button>
                  </div>



                       <div type='text' placeholder=' Jão da quebrada 45 Ultrassom 023' className='bg-[#E8FCF5] w-800 h-10  rounded-xl mt-2  border-[1px] flex justify-around items-center  border-slate-950'>
                      <p className='mr-10'> Thiago  </p>
                      <p className='mr-100 ml-10'> 100 </p>
                      <p className='mr-50'> Laboratorio </p>
                      <p className='ml-100'> 027</p>
                      <button> <img src={trash}/></button>
                  </div>



             <div type='text' placeholder=' Jão da quebrada 45 Ultrassom 023' className='bg-[#E8FCF5] w-800 h-10  rounded-xl mt-2  border-[1px] flex justify-around  items-center  border-slate-950'>
                      <p className='mr-10'> Pedro </p>
                      <p className='mr-100 ml-10'> 30 </p>
                      <p className='mr-50'> Video Faringo </p>
                      <p className='ml-100'> 030</p>
                      <button> <img src={trash}/></button>
                  </div>



                  </div>

              </div>

         </div>

      </div>

);
}

export default User;
