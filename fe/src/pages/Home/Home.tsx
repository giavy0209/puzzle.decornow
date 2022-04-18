import { NextPage } from "next";
import { Banner, Layout } from 'components'
const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <div className="home">
                    <Banner dots={false} items={[{ img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' }]} />
                    <section className="ss_1">
                        <div className="container">
                            <iframe width="100%" style={{ aspectRatio: '16 / 9' }} src="https://www.youtube.com/embed/_0NrayhpdA0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="button">Bắt đầu thiết kế</div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Home