import Head from 'next/head'
import Script from 'next/script'
import Header from '../../components/Header'
import Link from 'next/link'
import Layout from '../../components/layout'
import NavSide from '../../components/Nav_side'

import UserIntro from '../../components/UserIntro'
import { MainWrapper } from './userProfile_style'


export default  function UserProfile () {
    const userFirstName= 'Bojack'
    const introSentence = 'That went well'
    return (
        <>
        <Layout>
            <Header />
            <NavSide />
        </Layout>

        <MainWrapper>
            <UserIntro {...{userFirstName,introSentence }} />
        </MainWrapper>
        
        </>
    )
}
    