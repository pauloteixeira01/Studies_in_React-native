import React from 'react';
import { Text } from 'react-native';

export default props => {
    return (
        <>
            <Text>Membros da família</Text>
            {/* Refere-se aos filhos do componente */}
            {props.children} 
        </>
    )
}