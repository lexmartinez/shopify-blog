import React from 'react'
import { MainContainer } from './styles'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  PocketShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  PocketIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share'

const Share = ({ title, description }) => {
  const isBrowser = typeof window !== 'undefined'
  if (!isBrowser) {
    return null
  }
  const url = window.location.href
  const items = [
    { icon: EmailIcon, button: EmailShareButton, props: { subject: title, body: description } },
    {
      icon: FacebookIcon,
      button: FacebookShareButton,
      props: { quote: `${title} - ${description}` },
    },
    { icon: TwitterIcon, button: TwitterShareButton, props: { title } },
    { icon: WhatsappIcon, button: WhatsappShareButton, props: { title } },
    { icon: LinkedinIcon, button: LinkedinShareButton, props: { title, summary: description } },
    { icon: PocketIcon, button: PocketShareButton, props: { title } },
    { icon: RedditIcon, button: RedditShareButton, props: { title } },
  ]
  return (
    <MainContainer>
      {items.map(({ icon: Icon, button: Button, props = {} }) => (
        <Button url={url} {...props}>
          <Icon size={32} style={{ borderRadius: '50%', marginLeft: '0.5rem' }} />
        </Button>
      ))}
    </MainContainer>
  )
}

export default Share
