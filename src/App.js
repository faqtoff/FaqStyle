import BannerFullScreen from "./FaqStyle/Banner/BannerFullScreen";
import DocsPage from "./Pages/DocsPage";

function App() {
  return (
    <div className='full-container'>
      <div className="main-container">
      <BannerFullScreen className='banner-img'> 
        <h1 className='fs-banner-info__title'>FaqStyle <span className='color-gray-500'>by <a href="https://www.faqtoff.com.ar" target='_blank'>@FaqToff</a></span></h1>
        <a className="btn btn-rounded" href="#main">Empezar</a>
      </BannerFullScreen>
      <div className="container-fluid" id='main'>
        <h2>Hola Mundo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint! Eum, officiis, quae doloribus expedita qui beatae eaque explicabo earum, reiciendis ipsum libero perspiciatis quo nesciunt facere quas illo labore?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium laudantium earum quas eius, officiis ipsum nostrum natus cum repudiandae vitae dolore facere nulla animi enim veritatis dolores! Cum, error molestias.</p>
      </div>
      <DocsPage />
      </div>
    </div>
  );
}

export default App;
