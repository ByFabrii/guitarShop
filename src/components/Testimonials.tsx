import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialsData = [
  {
    name: "Juan Pérez",
    title: "Cliente Satisfecho",
    content: "GuitarLA tiene los mejores productos y un servicio al cliente excelente. Recomiendo 100% esta tienda a todos los músicos.",
  },
  {
    name: "María López",
    title: "Guitarrista profesional",
    content: "Encontré la guitarra de mis sueños aquí. La calidad es impresionante y el precio inmejorable.",
  },
  // Puedes agregar más testimonios aquí
];

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Cambia cada 3 segundos
  };

  return (
    <>
      {/* Sección "Testimonios" */}
      <div className="row mt-5">
        <div className="col-md-12">
          <h3 className="text-secondary row">Testimonios</h3>
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index}>
                <Card sx={{ marginBottom: 1, marginTop: 2, height: 200}}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {testimonial.name}, <cite title="Source Title"><br />{testimonial.title}</cite>
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        "{testimonial.content}"
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
        
      </div>
    </>
  );
};
