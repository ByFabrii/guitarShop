export const About = () => {
  return (
    <>
        <h2 className="text-center">Acerca de</h2>

        <div className="row mt-5">
            {/* Sección "Quiénes Somos" */}
            <div className="col-md-6">
                <h3 className="text-secondary">Quiénes Somos</h3>
                <p className="lead ">
                    En GuitarLA, estamos comprometidos con ofrecer los mejores instrumentos musicales para músicos de todos los niveles. Con años de experiencia, nos hemos convertido en la tienda de confianza para guitarristas y músicos en general.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere est impedit quia ipsam iusto laudantium quis, libero laborum accusantium? Veniam incidunt, nisi error saepe quae necessitatibus nobis fugiat voluptatem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quis atque? Soluta molestias doloribus laboriosam eligendi deserunt, fuga tenetur. Necessitatibus ducimus voluptatum in dignissimos odit sapiente fuga ratione obcaecati repudiandae!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti iste unde totam et beatae mollitia quis nam nesciunt repellendus, dolores accusamus saepe nostrum magni natus blanditiis dolorem veniam laborum.
                </p>
                <p className="lead mt-5 text-end">Fabrizzio Carbonell ~ Propietario de GuitarLA.</p>
            </div>
            <div className="col-md-6">
                <img src="/img/store.jpg" alt="Nuestra Tienda" className="img-fluid rounded" />
            </div>
        </div>

        <hr className="my-5" />
    </>
  )
}
