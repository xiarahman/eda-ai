import React from 'react'
import Banner from './components/BannerSection.tsx'
import Content from './components/Content.tsx'
import { Flex} from 'antd'
import BottomContent from './components/BottomContent.tsx'
import FAQ from './components/FAQContent.tsx'
const Home = () => {
  return (
    <Flex vertical style={{ width:"100%"}}>
      <Banner/>
      <Content/>
      <FAQ/>
      <BottomContent/>
    </Flex>
  )
}
export default Home
