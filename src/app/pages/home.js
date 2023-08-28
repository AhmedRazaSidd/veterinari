import React from 'react'
import Banner from '../Components/template/pages/home/Banner'
import Dedicate from '../Components/template/pages/home/Dedicate'
import Oupartner from '../Components/template/Comp/sliders/Ourpartner'
import Professionals from '../Components/template/pages/home/Professionals'
import NearBy from '../Components/template/pages/home/NearBy'
import FindVet from '../Components/template/pages/home/FindVet'
import TrustedCompanion from '../Components/template/pages/home/TrustedCompanion '
import AreYou from '../Components/template/pages/home/AreYou'

const home = () => {
  return (
    <>
      <div className='bg-theme-grey home-page'>
        <Banner />
        <Dedicate />
        <Oupartner />
        <Professionals />
        <NearBy/>
        <FindVet/>
        <TrustedCompanion/>
        <AreYou/>
      </div>
    </>
  )
}

export default home