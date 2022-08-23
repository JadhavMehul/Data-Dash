import Head from "next/head"

export default function Header(props) {
    return (
        <>
            <Head>
                <title>{props.PageTitle}</title>
                <meta name="description" content={props.PageDescription.substring(0,120) + "Read more..." } />


                <meta name="viewport" content={props.PageViewport} />
                <meta property="og:type" content={props.OGType} />
                <meta property="og:site_name" content={props.OGSiteName} />
                <meta property="og:image" itemProp="image primaryImageOfPage" content={props.OGImage} />
                <meta name="twitter:card" content={props.TwitterCard} />
                <meta name="twitter:title" property="og:title" itemProp="name" content={props.TwitterTitle} />
                <meta name="twitter:description" property="og:description" itemProp="description" content={props.TwitterDescription} />
            



                <link rel="icon" href={props.FavIcon} />

                {/* <!----------------Bootstrap Links----------------> */}

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"></link>
                

                {/* <!----------------Fontawesome Links----------------> */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Arimo&family=Montserrat&family=Roboto&family=Ubuntu&display=swap" rel="stylesheet" />
                
            </Head>
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossOrigin="anonymous" />
        </>
    )
}
