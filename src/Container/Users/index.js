/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import icon5 from '../../assets/icon5.svg'





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



          <div className="bg-divsec flex  flex-col shadow-lg w-900 h-800  justify-center items-center z-10 border border-regcolor ">

             <h1 className=' font-bold text-5xl  text-black font-Poppins '> FILA DE ESPERA </h1>

              <div className="bg-[#90B4B8]  shadow-lg w-[800px] h-[700px] z-10 border border-regcolor rounded-lg  ">
                  <div className='bg-[#D9D9D9] w-[799px] flex flex-row items-center border-[1px] border-t-0 border-slate-950 rounded-lg h-[20px] justify-center' >
                      <h2 className='font-bold ml-10 mr-20 '> Nome </h2>
                      <h2 className='font-bold ml-10 mr-20 ' > Idade </h2>
                      <h2 className='font-bold ml-10 mr-20 ' > Tipo de Exame</h2>
                      <h2 className='font-bold ml-10 mr-10 ' > Senha </h2>
                  </div>

                  <div className='mt-2 '>

                  <input  placeholder='             Jão da quebrada                          45                                     Ultrassom                                   023

' className='bg-[#E8FCF5] w-800 h-10  rounded-xl mt-2  border-[1px]  border-slate-950'>
                  </input>

                         <input  placeholder='             Maria Auxiliadora                        90                                     Raio-X                                         024

' className='bg-[#E8FCF5] w-800 h-10  rounded-xl mt-2  border-[1px]  border-slate-950'>
                  </input>


                         <input  placeholder='             Martinho da  Vila                         55                                     Laboratorio                                025

' className='bg-[#E8FCF5] w-800 h-10  rounded-xl mt-2  border-[1px]  border-slate-950'>

                  </input>


                <input  placeholder='             Romeu e Juliete                        45                                     Audiometria                                   026

' className='bg-[#E8FCF5] w-800 h-10  rounded-xl mt-2  border-[1px]  border-slate-950'>
                  </input>



                  </div>

              </div>

         </div>

      </div>

);
}

export default User;
