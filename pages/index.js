import Header from "../components/Header";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import data from "../data"

export default function Home() {
  return (
    <div>
      <Header
        PageTitle="Data Dash | Home"
        PageDescription={data.meta.PageDescription} 
        PageViewport={data.meta.PageViewport} 
        OGType={data.meta.OGType} 
        OGSiteName={data.meta.OGSiteName} 
        OGImage={data.meta.OGImage} 
        TwitterCard={data.meta.TwitterCard} 
        TwitterTitle={data.meta.TwitterTitle} 
        TwitterDescription={data.meta.TwitterDescription} 
        FavIcon={data.meta.FavIcon}
      />

      <Navbar />

      <Banner />
      
    </div>
  )
}
