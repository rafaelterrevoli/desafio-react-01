import Header from './components/Header'
import Mycard from './components/Mycard'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <>
      <Header/>
      <div class="row">
        <Mycard nombre='Roky' descripcion='Cachorro juguetón y cariñoso. ¡Dale un hogar, será tu mejor amigo y compañero!' imagen='./src/assets/img/perro4.png' color='success' raza='Husky'/>
        <Mycard nombre='Tom' descripcion='Cachorro juguetón y cariñoso. ¡Dale un hogar, será tu mejor amigo y compañero!' imagen='./src/assets/img/perro3.png' color='primary' raza='Bobtail'/>
        <Mycard nombre='Tomas' descripcion='Cachorro juguetón y cariñoso. ¡Dale un hogar, será tu mejor amigo y compañero!' imagen='./src/assets/img/perro2.png' color='danger' raza='Shar Pei' />
        <Mycard nombre='Sam' descripcion='Cachorro juguetón y cariñoso. ¡Dale un hogar, será tu mejor amigo y compañero!' imagen='./src/assets/img/perro1.png' color='warning' raza='Beagle'/>
      </div>
      <Footer/>
    </>
  )
}