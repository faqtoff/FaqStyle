import React from 'react'

const FormPage = () => {
    return (
        <div>
            <h2>Formularios</h2>

            <div className='container-sm card card-shadow p-1'>
                <p>Formulario</p>
                <form action="">
                    <label className='label' htmlFor="name">Nombre</label>
                    <input className='input' name='name' id='name' type="text" />

                    <label className='label' htmlFor="name">Email</label>
                    <input className='input' name='email' id='email' type="email" />

                    <textarea className='textarea' name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div>

            <div className='container-sm'>
                <p>Formulario</p>
                <form action="">
                    <input className='input-shadow' name='name' id='name' type="text" placeholder='Nombre'/>
                    <input className='input-shadow' name='email' id='email' type="email" placeholder='Email'/>

                    <textarea className='textarea-shadow' name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div>
        </div>
    )
}

export default FormPage
