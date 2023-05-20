import Imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"

export function meta(){
  return[
    {title:"GuitarLA - Sobre Nosotros"},
    {description: "Venta de Guitarras, blog de música"}
  ]
}

export function links(){
  return[
    {
      rel:"stylesheet",
      href: styles
    },
    {
      rel:'preload',
      href: Imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={Imagen} alt="imagen sobre nosotros"/>
        <div>
          <p>Aenean facilisis ullamcorper velit, non feugiat arcu. Duis ut quam id felis luctus mollis. Nulla lobortis vestibulum augue, vel egestas risus dapibus eu. Donec sit amet bibendum mi. Duis ut facilisis sapien. Nunc at lectus sem. Phasellus dictum ligula vitae cursus fringilla. Quisque suscipit et lorem at pulvinar. Fusce eu mauris ac orci aliquam gravida nec vitae ex. Ut maximus scelerisque mauris sit amet porta. Praesent accumsan vulputate neque, at porttitor augue mollis sed. Maecenas felis enim, elementum nec auctor ut, feugiat quis nisl. Quisque mollis erat porttitor mauris posuere vehicula. Nunc volutpat purus id diam accumsan efficitur.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros