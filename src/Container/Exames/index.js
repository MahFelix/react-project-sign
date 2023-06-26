/* eslint-disable jsx-a11y/alt-text */

import { Link } from 'react-router-dom';
import React from 'react'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import icon5 from '../../assets/icon5.svg'




function Exame() {


  return (
      <div className="bg-grayx w-screen h-screen flex justify-center items-center">
        <>
        <img className='z-0 absolute top-1' src={icon1}></img>
        <img className='z-0 absolute right-1' src={icon3}></img>
        <img className='z-0 absolute left-1 bottom-1' src={icon2}></img>
        <img className='z-0 absolute bottom-1' src={icon5}></img>
        <img className='z-0 absolute left-20 top-1' src={icon4}></img>

        </>

          <Link to="/Users">
                  <button className=" absolute right-0 bg-[red] font-bold text-white mt-5 w-[80px] cursor-pointer h-[60px] rounded-md pl-1 flex justify-center items-center mb-2 font-Poppins active:opacity-70 " > Avançar </button>
         </Link>

      <div className="bg-divsec flex  flex-col shadow-lg w-900 h-500  items-center justify-center z-10 border border-regcolor ">

             <h1 className=' font-bold text-5xl items-center justify-center text-black font-Poppins'> CADASTRO DE EXAMES </h1>

              <div className="bg-[#90B4B8] flex shadow-lg w-[870px] h-[320px] mt-20 z-10 border border-regcolor items-center justify-center gap-20">


              <div className='flex flex-col justify-beetwen'>

                  <label className="font-bold text-2xl  font-Poppins text-blackp"> Nome </label>
                  <input placeholder=" Digite seu nome" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-2 font-Poppins"></input>

                  <label className="font-bold text-2xl font-Poppins text-blackp"> Sobrenome </label>
                  <input placeholder="Digite seu sobrenome" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-5 font-Poppins"></input>

                  <label className="font-bold text-2xl font-Poppins text-blackp"> Idade </label>
                  <input placeholder="Digite sua idade" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-5 font-Poppins"></input>

             </div>


             <div className='flex-row flex gap-5'>

                <div>
                  <label className="font-bold text-2xl  font-Poppins text-blackp"> Tipo de Exame</label>
                  <select placeholder="Nome de usuário" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-2 font-Poppins">
                    <>
                    <option>
                        Selecione o tipo de exame
                  </option>

                  <option>
                        Ultrassom
                  </option>

                   <option>
                        Raio-X
                  </option>

                   <option>
                        Laboratorio
                  </option>

                   <option>
                        Audiometria
                  </option>

                   <option>
                        Video-Faringo
                  </option>

                   <option>
                        Endoscopia
                  </option>

                   <option>
                        VENG
                  </option>

                   <option>
                        Cirurgicos
                  </option>
</>
                  </select>


                  <label className="font-bold text-2xl font-Poppins text-blackp"> Convênio </label>
                  <input placeholder="Digite seu convênio" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-5 font-Poppins"></input>

                  <label className="font-bold text-2xl font-Poppins text-blackp"> Número de contato </label>
                  <input type='tel' placeholder="(XX) X XXXX-XXXX" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-5 font-Poppins"></input>
               </div>

               <div className='flex justify-center items-center'>


                  <button className=" bg-butcolor font-bold text-white mt-5 w-[80px] cursor-pointer h-[60px] rounded-md pl-1 flex justify-center items-center mb-2 font-Poppins active:opacity-70 " > GERAR SENHA </button>



              </div>

             </div>


              </div>




      </div>




        </div>


);
}

export default Exame;
