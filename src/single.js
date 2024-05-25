import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Celulares from './data/celulares.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const celular = Celulares.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1 className='AsideStyle'>{celular.name}</h1>
        <hr></hr>
        <img src={celular.picture}></img>
        <h3 className='AsideStyle'>{celular.description}</h3>
    </>);
}

export default Single;