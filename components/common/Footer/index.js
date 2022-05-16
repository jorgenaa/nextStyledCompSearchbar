import React from 'react'
import Link from 'next/link';
import { AiFillFacebook } from "react-icons/ai"
import { StyledFooter, FooterContainer } from '../../styles/Footer.styled'

const Footer = () => {
  return (
    <StyledFooter>
        <FooterContainer>
            <ul>
                <li>
                    <p>&copy; Copyright 2022</p>
                </li>
                <li>
                    <span>Webdesign by</span>
                    <Link href="https://www.webtailor.no/">
                        <a>Webtailor&#8228;no</a>
                    </Link>
                </li>
            </ul>
        </FooterContainer>
        <FooterContainer>
            <ul>
                <li>
                    <h3>
                        Address&#58;
                    </h3>
                </li>
                <li>
                    <p>Karl Johans gate</p>
                    <p>Oslo 0000</p>
                    <p>Norway</p>
                </li>
                <li>
                    <Link href="https://www.facebook.com">
                        <a>
                            <AiFillFacebook style={{fontSize: "2rem"}} />
                        </a>
                    </Link>
                </li>
            </ul>
        </FooterContainer>
    </StyledFooter>
  )
}

export default Footer