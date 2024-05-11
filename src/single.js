import Celulares from './data/celulares.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const celular = Celulares.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{celular.name}</h1>
        <hr></hr>
        <img src={celular.picture}></img>
        <p>{celular.description}</p>
    </>);
}

export default Single;