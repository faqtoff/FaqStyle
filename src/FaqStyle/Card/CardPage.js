import React from 'react'
import './Card.css'

const CardPage = () => {
    return (
        <div className='container'>
            <h2><strong>Cards</strong></h2>
            <p>Las tarjetas se adaptan al tamaño del padre. Ocupan todo el espacio disponible:</p>

            <div className="card">
                <p>Contenido</p>
            </div>
            <code>
                &lt;div className="card"&gt;<br />
                &lt;p&gt;Contenido &lt;/p&gt;<br />
                &lt;/div&gt;
            </code>


            <div className="card card-shadow">
                <p>Contenido</p>
            </div>
            <code>
                &lt;div className="card card-shadow"&gt;<br />
                &lt;p&gt;Contenido &lt;/p&gt;<br />
                &lt;/div&gt;
            </code>

            <div className="card card-border">
                <span>Curso</span>
                <h1>Html y Css</h1>
                <p>Aprende a crear estructuras de sitios webs con HTML5 y CSS3. Podras hacer paginas responsive, para que en todos los dispositivos se vea increible, de cero a profesional, sin dificultades</p>
                <p>Por Nati Guida, desarrolladora en Mercado Libre</p>
            </div>
            <code>
                &lt;div className="card card-border"&gt;<br />
                &lt;p&gt;Contenido &lt;/p&gt;<br />
                &lt;/div&gt;
            </code>

            <div className="container-sm card card-shadow">
                <p>Contenido</p>
            </div>
            <code>
                &lt;div className="container-sm card card-shadow"&gt;<br />
                &lt;p&gt;Contenido &lt;/p&gt;<br />
                &lt;/div&gt;
            </code>

            <div className="container-sm">
            <div className="card card-shadow">
                <p>Contenido</p>
            </div>
            </div>
            <code>
                &lt;div className="card card-shadow"&gt; <br />
                    &lt;div className="card card-shadow"&gt;<br />
                        &lt;p&gt;Contenido &lt;/p&gt;<br />
                    &lt;/div&gt;<br />
                &lt;/div&gt;<br />
            </code>

            <h3>Colores</h3>
            <div className="card bg-teal">
                <p>Contenido</p>
            </div>
            <code>
                &lt;div className="card bg-teal"&gt;<br />
                &lt;p&gt;Contenido &lt;/p&gt;<br />
                &lt;/div&gt;
            </code>

            <div className="card card-shadow bg-teal">
                <p>Contenido</p>
            </div>
            <code>
                &lt;div className="card card-shadow bg-teal"&gt;<br />
                &lt;p&gt;Contenido &lt;/p&gt;<br />
                &lt;/div&gt;
            </code>

        </div>
    )
}

export default CardPage
