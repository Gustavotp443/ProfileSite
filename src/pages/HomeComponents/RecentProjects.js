import React, { useState } from 'react'
import { ProjectsWrapper, ProjectsHeader, ProjectsSlider, SliderBox, MaisProjetos, SliderText, SliderButton, SliderTop, LeftArrow, RightArrow, ButtonLink, SliderContainer, MobileIcon } from './RecentProjects.styles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const RecentProjects = ({ repos }) => {
    const [current, setCurrent] = useState(0);
    const length = repos.slice(-3).length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    let screenSize = window.screen.width


    return (
        <>
            <ProjectsWrapper>
                <ProjectsHeader>
                    <h2><span>Meus Projetos</span></h2>
                    <p>Projetos Recentes</p>
                </ProjectsHeader>
                <ProjectsSlider>
                    {screenSize > 580 &&
                        <LeftArrow>
                            <BsFillCaretLeftFill onClick={prevSlide} />
                        </LeftArrow>
                    }
                    <SliderContainer>
                        {repos.length > 0 &&
                            repos.slice(-3).map((repo, index) => (
                                <SliderBox key={index} className={index === current ? 'slide active' : 'slide'}>
                                    {index === current &&
                                        <div style={{ width: '100%', height: '100%' }}>
                                            <SliderTop>
                                                <h2>{repo.name}</h2>
                                            </SliderTop>
                                            <SliderText>
                                                <p>{repo.description}</p>
                                            </SliderText>
                                            <SliderButton>
                                                <button><a href={`${repo.html_url}`} rel="noopener noreferrer" target='_blank'>Ir para o projeto<br /><AiOutlineArrowRight /></a></button>
                                            </SliderButton>
                                        </div>
                                    }
                                </SliderBox>
                            ))}
                    </SliderContainer>
                    {screenSize > 580 &&
                        <RightArrow>
                            <BsFillCaretRightFill onClick={nextSlide} />
                        </RightArrow>
                    }
                </ProjectsSlider>
                {screenSize <= 580 &&
                    <MobileIcon>
                        <LeftArrow>
                            <BsFillCaretLeftFill onClick={prevSlide} />
                        </LeftArrow>
                        <RightArrow>
                            <BsFillCaretRightFill onClick={nextSlide} />
                        </RightArrow>
                    </MobileIcon>
                }
                <MaisProjetos>
                    <Link to={'/projects'}><ButtonLink>Ver mais Projetos</ButtonLink></Link>
                </MaisProjetos>
            </ProjectsWrapper>
        </>
    )
}

export default RecentProjects;