import NavbarAside from "./FaqStyle/Navbar/NavbarAside";
import home from './assets/icons/home.svg'
import componentes from "./assets/icons/stacked-files.svg"
import FaqFooter from "./FaqStyle/FaqFooter/FaqFooter";
import BannerFullScreen from "./FaqStyle/Banner/BannerFullScreen";
import ButtonPage from "./FaqStyle/Button/ButtonPage";
import ModalPage from "./FaqStyle/Modal/ModalPage";
import CardPage from "./FaqStyle/Card/CardPage";
import ProgresBarPage from "./FaqStyle/Progressbar/ProgresBarPage";
import FormPage from "./FaqStyle/Forms/FormPage";
import AlertPage from "./FaqStyle/Alert/AlertPage";
import NavbarPage from "./FaqStyle/Navbar/NavbarPage";

function App() {
  return (
    <>
    <div className="full-container">
      <NavbarAside> 
        <span className='m-2'>FaqStyle</span>
        <a className='m-2' href="#home"><img src={home} alt="Inicio" />Inicio</a>
        <a href="#works"><img src={componentes} alt="works" />Componentes</a>
        <ul className='mt-0'>
          <li className='m-2'><a href="#works">Acordion</a></li>
          <li className='m-2'><a href="#works">Alerts </a></li>
          <li className='m-2'><a href="#works">Badge</a></li>
          <li className='m-2'><a href="#works">Breadcrumb</a></li>
          <li className='m-2'><a href="#works">Buttons</a></li>
          <li className='m-2'><a href="#works">Buttons Group</a></li>
          <li className='m-2'><a href="#works">Card</a></li>
          <li className='m-2'><a href="#works">Carousel</a></li>
          <li className='m-2'><a href="#works">Collapse</a></li>
          <li className='m-2'><a href="#works">Dropdowns</a></li>
          <li className='m-2'><a href="#works">List Group</a></li>
          <li className='m-2'><a href="#works">Modal</a></li>
          <li className='m-2'><a href="#works">Navs y Tabs</a></li>
          <li className='m-2'><a href="#works">Navbar</a></li>
          <li className='m-2'><a href="#works">Offcanvas</a></li>
          <li className='m-2'><a href="#works">Pagination</a></li>
          <li className='m-2'><a href="#works">Popovers</a></li>
          <li className='m-2'><a href="#works">Progress</a></li>
          <li className='m-2'><a href="#works">Scrollspy</a></li>
          <li className='m-2'><a href="#works">Spinners</a></li>
          <li className='m-2'><a href="#works">Toasts</a></li>
          <li className='m-2'><a href="#works">Tooltips</a></li>
        </ul>
      </NavbarAside>
      <div className="main-container">
        <BannerFullScreen className='bg-gray-500' backGroundImg=''> 
          <h1 className='fs-banner-info__title'>FaqStyle <span>by @FaqToff</span></h1>
            <div className="btn-social-desk">
              <a className="btn-social bg-linkedin" href="https://www.linkedin.com/in/faqtoff" target="blank"></a>
              <a className="btn-social bg-github" href="https://github.com/faqtoff" target="blank"></a>
              <a className="btn-social bg-twitter" href="#" target="blank"></a>
              <a className="btn-social bg-instagram" href="https://www.instagram.com/faqtoff/" target="blank"></a>
            </div>
            <a className="btn btn-rounded btn-faqBtn" href="#contact">Empezar</a>
        </BannerFullScreen>

        <FormPage />

        <AlertPage />
        <ButtonPage />
        <CardPage />
        <ModalPage />
        <NavbarPage />
        <ProgresBarPage />
        <FaqFooter />
      </div>
    </div>
    </>
  );
}

export default App;
