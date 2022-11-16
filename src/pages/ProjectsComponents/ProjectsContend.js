import React from 'react'
import { ProjectsText, BoxContainer, ProjectsSlide, ProjectTopWrapper, ProjectMain, MainText, Main, Box } from './ProjectsContend.style'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AiOutlineDoubleRight } from 'react-icons/ai';
const ProjectContend = ({ repos }) => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    infinite: true,
                    initialSlide: 1,
                }
            }
        ]
    };
    return (

        <>
            <ProjectTopWrapper>
                <ProjectsText>
                    <h1>Projetos</h1>
                </ProjectsText>
                <ProjectsSlide>
                    <div><h2>Em breve</h2></div>
                </ProjectsSlide>
            </ProjectTopWrapper>
            <ProjectMain>
                <MainText>
                    <h1>Repositórios</h1>
                    <h2>Github</h2>
                </MainText>
                <Main>
                    <Slider {...settings}>
                        {repos.length > 0 &&
                            repos.map((repo, index) => (
                                <BoxContainer key={index}>
                                    <Box>
                                        <h1>{repo.name}</h1>
                                        <div>
                                            <p>{repo.created_at.slice(0, 10)}</p>
                                            <a href={`${repo.html_url}`} rel="noopener noreferrer" target='_blank'><AiOutlineDoubleRight /></a>
                                        </div>
                                    </Box>
                                </BoxContainer>
                            ))
                        }
                    </Slider>
                </Main>
            </ProjectMain>
        </>
    )
}

export default ProjectContend