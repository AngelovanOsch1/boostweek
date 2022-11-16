import React from 'react'
import '../footer/footer.scss'
import '../../img/logo.png'
import footerLogo from '../../img/logo.png'
import twitterLogo from '../../img/twitter.png'
import youtubeLogo from '../../img/youtube.png'
import instagramLogo from '../../img/instagram.png'
import discordLogo from '../../img/discord.png'
import twitchLogo from '../../img/twitch.png'

const Footer = () => {
  return (
    <footer>
        <div className='top-layer'>
            <div className='footer-field-one'>
                <div className='column-one'>
                    <h5>Home</h5>
                    <h5>About</h5>
                </div>
                <div className='column-two'>
                    <h5>Merch</h5>
                    <h5>PVP</h5>
                </div>
                <div className='column-three'>
                    <h5>Leaderboard</h5>
                    <h5>News</h5>
                </div>
            </div>
            <div className='footer-field-two'>
                <div className='circle'>
                    <img src={twitterLogo} alt="twiiterlogo" />
                </div>
                <div className='circle'>
                    <img src={youtubeLogo} alt="youtubelogo" />
                </div>
                <div className='circle'>
                    <img src={instagramLogo} alt="instagramlogo" />
                </div>
                <div className='circle'>
                    <img src={discordLogo} alt="discordlogo" />
                </div>
                <div className='circle'>
                    <img src={twitchLogo} alt="twitchlogo" />
                </div>
            </div>
            <img src={footerLogo} />
        </div>
        <div className='bottom-layer'>Copyright by 2020 BattleFit GO</div>
    </footer>
  )
}

export default Footer