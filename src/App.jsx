import ImageGalery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const App = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1045/1000/600/",
      thumbnail: "https://picsum.photos/id/1045/250/150/",
    },
    {
      original: "https://picsum.photos/id/1065/1000/600/",
      thumbnail: "https://picsum.photos/id/1065/250/150/",
    },
    {
      original: "https://picsum.photos/id/1070/1000/600/",
      thumbnail: "https://picsum.photos/id/1070/250/150/",
    },
  ];

  return (
    <div style={{ width: "45rem", height: "50rem" }}>
      <ImageGalery
        items={images}
        autoPlay={true}
        thumbnailPosition="left"
        showPlayButton={false}
        showBullets={true}
        slideDuration={600}
        swipingTransitionDuration={2000}
        lazyLoad={true}
      
      />
      
    </div>
  );
};
