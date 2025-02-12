import React, { FC } from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { routeLinks } from '../../config/routing'

const Container = styled.div`
  border: 1px solid #d3d3d3;
  width: 100%;
  max-width: 550px;
  margin: 1rem;
  padding: 2em;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    box-shadow: 15px 15px 40px -25px rgba(170, 170, 170, 1);
  }

  @media screen and (max-width: 767px) {
    margin: 1rem 0;
  }
`

const Title = styled.h3`
  text-align: center;
  font-family: "SuisseIntl Black", sans-serif;
  font-style: normal;
  color: black;
`

const Image = styled.figure`
  margin-top: 1em;
  height: 300px;

  @media (max-width: 768px) {
    height: 150px;
  }

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

export interface SuccessStoryBoxProps {
  image: IGatsbyImageData
  title: string
  slug: string
  className?: string
}

const SuccessStoryBox: FC<SuccessStoryBoxProps> = props => {
  return (
    <Container className={props.className}>
      <Link to={routeLinks.projects + '/' + props.slug}>
        <Title>{props.title}</Title>
        <Image className='image'>
          <GatsbyImage imgStyle={{ objectFit: 'contain', height: '100%', width: '100%' }} image={getImage(props.image)!}
                       alt={props.title} />
        </Image>
      </Link>
    </Container>
  )
}

export default SuccessStoryBox
