import React from 'react'
import { ContainerSection } from './Container.style'

const Container = ({ children }) => {
    return (
        <ContainerSection>{children}</ContainerSection>
    )
}

export default Container