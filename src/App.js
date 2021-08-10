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
      <DocsPage />
      </div>
    </div>
  );
}

export default App;
