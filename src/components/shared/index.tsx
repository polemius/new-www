import React from 'react'
import { Link } from 'gatsby'
import * as Styled from './index.styled'

interface MoreButtonProps {
  onClick?: (e: MouseEvent) => void
  href?: string
  text?: string
  isSubmit?: boolean
  disabled?: boolean
}

export const MoreButton: React.FC<MoreButtonProps> = ({ onClick, href, text, disabled, isSubmit, children }) => {
  const Btn = () => <button type={isSubmit ? 'submit' : 'button'} disabled={disabled} onClick={onClick}>{text || children}</button>
  return (
    <Styled.Button className={'column is-full has-text-centered'}>
      {href
        ? <Link to={href}><Btn/></Link>
        : <Btn/>
      }
    </Styled.Button>
  )
}

export const HideTablet = Styled.HideTablet
export const HideDesktop = Styled.HideDesktop
export const PageTitle = Styled.PageTitle
export const PageDescription = Styled.PageDescription
export const Section = Styled.Section
export const SectionBlack = Styled.SectionBlack
export const SectionInner = Styled.SectionInner
export const SectionTitle = Styled.SectionTitle
export const TextTitle = Styled.TextTitle
export const TextRegular = Styled.TextRegular
