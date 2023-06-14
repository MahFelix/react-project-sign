/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../../assets/logo2.png'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import icon5 from '../../assets/icon5.svg'
import icon6 from '../../assets/Logo-bg3.svg'




function App() {


  return (
      <div className="bg-grayx w-screen h-screen flex justify-center items-center">
        <>
        <img className='z-0 absolute top-1' src={icon1}></img>
        <img className='z-0 absolute right-1' src={icon3}></img>
        <img className='z-0 absolute left-1 bottom-1' src={icon2}></img>
        <img className='z-0 absolute bottom-1' src={icon5}></img>
        <img className='z-0 absolute left-20 top-1' src={icon4}></img>

        </>



          <div className="bg-divsec flex shadow-lg w-900 h-600 mt-20 justify- z-10 border border-regcolor ">

            <div className='absolute' >
              <img className='bg-butcolor w-450 h-600  ease-linear duration-75 animate-wiggle ' src={icon6} ></img>

            </div>
            <img className='w-20 h-20 mt-5 ml-2' src={logo}></img>


            <div className=" flex-col">
              <h1 className=" font-bold text-5xl  mb-10 mt-20 ml-20 font-Poppins text-blackp"> Login </h1>

              <label className="font-bold text-2xl font-Poppins text-blackp"> Nome de usuário </label>
              <input placeholder="Nome de usuário" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-2 font-Poppins"></input>

              <label className="font-bold text-2xl font-Poppins text-blackp">Senha </label>
              <input  type='password' placeholder="Senha" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-5 font-Poppins"></input>

              <div className=" flex ">
                  <input type='checkbox' className="mr-1"></input>
                  <h2 className="text-xs mr-2 font-Poppins"> me mantenha conectado </h2>
                  <h3 className="text-xs text-white font-Poppins hover:underline cursor-pointer"> não lembro minha senha </h3>
              </div>

              <button className=" bg-butcolor font-bold text-white mt-5 w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-2 font-Poppins active:opacity-70"> Entrar </button>

              <a className="font-bold mt-5 text-xs text-regcolor cursor-pointer font-Poppins hover:text-blue" > Não tenho conta </a>
            </div>

            <main className=" ml-[70px] flex justify-center items-center  flex-col flex-1 ">
                 <h1 className=" font-bold text-5xl cursor-pointer font-Poppins text-blackp flex"> Register</h1>

              <div className='mt-[10px]'>
                  <label className="font-bold text-2xl  font-Poppins text-blackp"> Nome de usuário </label>
                  <input placeholder="Nome de usuário" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-2 font-Poppins"></input>

                  <label className="font-bold text-2xl font-Poppins text-blackp"> E-mail </label>
                  <input type='email' placeholder="E-mail" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-5 font-Poppins"></input>

                  <label className="font-bold text-2xl font-Poppins text-blackp">Senha </label>
                  <input type='password' placeholder="Senha" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-5 font-Poppins"></input>

                  <label className="font-bold text-2xl font-Poppins text-blackp">Confirmar senha </label>
                  <input placeholder="Senha" className=" w-300 h-11 rounded-md pl-1 flex justify-center items-center mb-5"></input>

                  <button className=" bg-butcolor font-bold text-white mt-5 w-300 cursor-pointer h-11 rounded-md pl-1 flex justify-center items-center mb-2 font-Poppins active:opacity-70 "> Registrar </button>
             </div>

            </main>
         </div>

      </div>

);
}

export default App;
