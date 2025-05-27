// import '../../public/slide/rs-plugin/css/settings.css';
import Image from 'next/image';


const Banner = () => {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     // Delay to allow scripts to load
  //     setTimeout(() => {
  //       //ts-ignore
  //       if (window?.jQuery?.fn?.revolution) {
  //         //ts-ignore
  //         window.jQuery('.fullwidthbanner').revolution({
  //           delay: 5000,
  //           startwidth: 1170,
  //           startheight: 600,
  //           hideThumbs: 10,
  //           fullWidth: 'on',
  //           fullScreen: 'off',
  //           navigationType: 'bullet',
  //           navigationArrows: 'solo',
  //           navigationStyle: 'round',
  //           touchenabled: 'on',
  //           onHoverStop: 'on',
  //         });
  //       }
  //     }, 500);
  //   }
  // }, []);


  return (
    <section style={{ border: '2px solid red' }}>
      <div
        style={{
          position: 'relative',
          width: '60%',
          height: '300px',
          backgroundColor: '#ddd',
        }}
      >
        <Image
          src="/slide/images/slider/sweet_project_slider.jpg"
          alt="Slide"
          fill
          style={{ objectFit: 'cover' }}
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>

  );
};

export default Banner;