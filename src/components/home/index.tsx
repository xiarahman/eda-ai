import React from 'react'
import Banner from './components/BannerSection.tsx'
import CardsContent from './components/Content.tsx'
import { Flex} from 'antd'
import HomeCards from "./components/HomeCards.tsx"
import FAQ from './components/FAQContent.tsx'
import Work from './components/Work.tsx'
const Home = () => {
  return (
    <Flex vertical style={{ width:"100%"}}>
      <Banner/>
      <CardsContent/>
      <HomeCards />
      <Work/>
      <FAQ/>
    </Flex>
  )
}
export default Home
