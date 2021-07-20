import React from 'react'
import ModalButtonWrapper from './ModalButtonWrapper'

const ModalPage = () => {
    return (
        <div className='container'>
            <h2><strong>Modal</strong></h2>
            <h3>React Component</h3>
            <ModalButtonWrapper buttonText='Modal'>
                <h3>Esto es un Modal!</h3>
                <p>Este modal es flexible. Es decir, su tamaño dependera del tamaño de su contenido.</p>
            </ModalButtonWrapper>
            <div className='d-flex flex-col'>
                <code>import ModalButtonWrapper from './ModalButtonWrapper'</code>
                <code>
                    &lt;ModalButtonWrapper buttonText='Modal'&gt;
                </code>
                <code>
                    &lt;h3&gt;Esto es un Modal!&lt;/h3&gt;
                </code>
                <code>
                    &lt;p&gt;Este modal es flexible. Es decir, su tamaño dependera del tamaño de su contenido.&lt;/p&gt;
                </code>
                <code>
                    &lt;/ModalButtonWrapper&gt;
                </code>
            </div>

            <hr />
            <h4>Modal dentro de un modal</h4>
            <ModalButtonWrapper buttonText='Modal'>
                <ModalButtonWrapper buttonText='Otro Modal'><h3>Esto es un Modal!</h3>
                <p>Este modal es flexible. Es decir, su tamaño dependera del tamaño de su contenido.</p></ModalButtonWrapper>
            </ModalButtonWrapper>
            <div className='d-flex flex-col'>
                <code>import ModalButtonWrapper from './ModalButtonWrapper'</code>
                <code>
                    &lt;ModalButtonWrapper buttonText='Modal'&gt;
                </code>
                <code>
                    &lt;ModalButtonWrapper buttonText='Modal'&gt;
                </code>
                    <code>
                        &lt;h3&gt;Esto es un Modal!&lt;/h3&gt;
                    </code>
                    <code>
                        &lt;p&gt;Este modal es flexible. Es decir, su tamaño dependera del tamaño de su contenido.&lt;/p&gt;
                    </code>
                    <code>
                        &lt;/ModalButtonWrapper&gt;
                    </code>
                <code>
                    &lt;/ModalButtonWrapper&gt;
                </code>
            </div>

            <hr />
            <h4>Estilos al boton del modal</h4>
            <ModalButtonWrapper buttonText='Modal' className='btn'>
                <h3>Esto es un Modal!</h3>
                <p>Este modal es flexible. Es decir, su tamaño dependera del tamaño de su contenido.</p>
            </ModalButtonWrapper>
            <div className='d-flex flex-col'>
                <code>import ModalButtonWrapper from './ModalButtonWrapper'</code>
                <code>
                    &lt;ModalButtonWrapper buttonText='Modal' className='btn'&gt;
                </code>
                <code>
                    &lt;h3&gt;Esto es un Modal!&lt;/h3&gt;
                </code>
                <code>
                    &lt;p&gt;Este modal es flexible. Es decir, su tamaño dependera del tamaño de su contenido.&lt;/p&gt;
                </code>
                <code>
                    &lt;/ModalButtonWrapper&gt;
                </code>
            </div>

        </div>
    )
}

export default ModalPage
