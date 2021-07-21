import React from 'react'

const FormPage = () => {
    return (
        <div>
            <h2>Formularios</h2>

            <div className='container-sm card card-shadow p-1'>
                <form action="">
                <p>Formulario</p>
                
                    <label className='label label-grey' htmlFor="name">Nombre</label>
                    <input className='input input-grey' name='name' id='name' type="text" />

                    <label className='label label-grey' htmlFor="email">Email</label>
                    <input className='input input-grey' name='email' id='email' type="email" />

                    <label className='label label-grey' htmlFor="opcion">Select</label>
                    <select className='select select-grey' name="opcion" id="opcion">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>


                    <textarea className='textarea textarea-grey' name="" id="" cols="30" rows="10"></textarea>

                    <input className="input input-grey" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="label label-grey" htmlFor="flexRadioDefault1">
                        Default radio
                    </label>

                    <input type="checkbox" className="" id="exampleCheck1" />
                    <label className="" htmlFor="exampleCheck1">Check me out</label>

                    <label htmlFor="customRange1" className="">Example range</label>
                    <input type="range" className="" id="customRange1"></input>
                </form>
            </div>

            <div className='container-sm card card-shadow p-1 mt-5'>
                <form action="">
                <p>Formulario</p>
                    <input className='input input-shadow' name='name' id='name' type="text" placeholder='Nombre'/>

                    <input className='input input-shadow' name='email' id='email' type="email" placeholder='Email'/>

                    <select className='select select-shadow' name="opcion" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>

                    <textarea className='textarea textarea-shadow' name="" id="" cols="30" rows="10"></textarea>

                    <input type="checkbox" className="input" id="exampleCheck1" />
                    <label className="" htmlFor="exampleCheck1">Check me out</label>

                    <input className="input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="" htmlFor="flexRadioDefault1">
                        Default radio
                    </label>

                    <label htmlFor="customRange1" className="">Example range</label>
                    <input type="range" className="" id="customRange1"></input>
                </form>
            </div>
        </div>
    )
}

export default FormPage
