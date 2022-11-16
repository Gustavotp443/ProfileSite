import React from 'react'
import { AboutContainer, AboutHeader, AboutText, TextTop, TextBot, AboutIcons } from './About.styles';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub, SiGit } from 'react-icons/si';
import { useState, useEffect } from 'react';
const About = () => {
    const [yearsOld, setYearsOld] = useState();


    const YearsOld = (YO) => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();
        YO = year - 2003;
        if ((month < 3 || month === 3) && day < 4) {
            YO--;
        }
        setYearsOld(YO < 0 ? 0 : YO);
    }
    useEffect(() => {
        YearsOld();
    }, [])
    return (
        <AboutContainer>
            <AboutHeader>
                <h1>Sobre</h1>
                <h2>Um pouco sobre mim</h2>
            </AboutHeader>
            <AboutText>
                <TextTop>
                    <p> Olá,me chamo Gustavo Teixeira Pardini, possuo atualmente {`${yearsOld}`} anos, nascido em Santo André-SP, sempre fui apaixonado muito na área de tecnologia,
                        e após experimentar diversos ramos no meio e outras linguagens de programação, acabei me identificando com o Desenvolvimento Web, o que acabou se transformando em uma nova paixão
                        e como objetivo me tornar cada dia melhor nessa área a qual resolvi seguir carreira. Observar como é a criação de um sistema desde o começo e o seu resultado final é muito satisfatório
                        e me motiva a querer continuar.
                    </p>
                </TextTop>
                <TextBot>
                    <p>Atualmente sou Desenvolvedor Web Front End e estou cursando o 4º semestre de Informática para Negócios na Faculdade de Tecnologia de São Bernardo do Campo. Meu principal objetivo é me tornar um
                        Desenvolvedor Full Stack. Atualmente desenvolvo minhas aplicações utilizando Javascript junto ao framework React JS, tenho conhecimentos sólidos em CSS, Styled-Components, desenvolvimento de interfaces, reponsividade, consumo de API's, Git, Github, entre outros.
                    </p>
                </TextBot>
            </AboutText>
            <AboutIcons>
                <SiHtml5 /><SiCss3 /><SiJavascript /><SiReact /><SiGithub /><SiGit />
            </AboutIcons>
        </AboutContainer>
    )
}

export default About