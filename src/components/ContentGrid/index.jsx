import React, { useRef } from 'react'
import Slider from 'react-slick'
import { getImage } from 'gatsby-plugin-image'
import ContentHeader from '@components/ContentHeader'
import { contentSettings } from '@config'
import { tagCase } from '@utils/format'
import {
  ModuleContainer,
  ContentRow,
  ContentCol,
  LinkContainer,
  CardContainer,
  ImageContainer,
  Image,
  Headline,
  PostMetadata,
  MetadataField,
  ArrowContainer,
  TagsMetadataField,
  TagMetadata,
  Tag,
  PaginationButton,
  RightArrow,
} from './styles'
import LeftArrow from '@assets/arrow-left.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
  swipe: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const ContentGrid = props => {
  const { suffix } = contentSettings
  const slider = useRef(null)

  const next = () => {
    slider?.current?.slickNext && slider?.current?.slickNext()
  }
  const previous = () => {
    slider?.current?.slickPrev && slider?.current?.slickPrev()
  }
  return (
    <ModuleContainer>
      {!!props?.title && (
        <ContentHeader title={props?.title} target={props?.target} bottom={'1rem'} />
      )}
      <ContentRow>
        <ContentCol>
          <ArrowContainer>
            <PaginationButton className={'left'} onClick={previous}>
              <LeftArrow />
            </PaginationButton>
            <PaginationButton className={'right'} onClick={next}>
              <RightArrow />
            </PaginationButton>
          </ArrowContainer>
        </ContentCol>
      </ContentRow>
      <ContentRow>
        <ContentCol>
          <Slider {...carouselSettings} ref={slider}>
            {(props?.items || []).map((item, index) => {
              const image = getImage(item?.image)
              return (
                <CardContainer key={index}>
                  <LinkContainer to={item?.url} fade>
                    <ImageContainer>
                      <Image image={image} />
                    </ImageContainer>
                  </LinkContainer>
                  <PostMetadata>
                    <MetadataField>{`${item?.date} - ${item?.time} ${
                      suffix[item?.type]
                    }`}</MetadataField>
                  </PostMetadata>
                  <LinkContainer to={item?.url} fade>
                    <Headline>{item?.title}</Headline>
                  </LinkContainer>
                  <TagMetadata>
                    <TagsMetadataField>
                      {(item?.tags || []).map(tag => {
                        return (
                          <LinkContainer to={`/tags/${tag}`}>
                            <Tag>{`#${tagCase(tag)}`}</Tag>
                          </LinkContainer>
                        )
                      })}
                    </TagsMetadataField>
                  </TagMetadata>
                </CardContainer>
              )
            })}
          </Slider>
        </ContentCol>
      </ContentRow>
    </ModuleContainer>
  )
}

export default ContentGrid
