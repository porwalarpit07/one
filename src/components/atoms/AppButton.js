import React, { Component } from 'react'
import { TouchableOpacity, Text, Themes } from '@alias'

const Button = (props) => {
    return (
        <TouchableOpacity onPress={()=>props.onpress()} style={{ marginVertical: 25, height: 52, width: '95%', borderRadius: 15, backgroundColor: Themes.BACKGROUND, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 24 }}>{props.title ? props.title : 'Continue'}</Text>
        </TouchableOpacity>
    )
}
export default Button