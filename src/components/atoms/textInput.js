import React, { Component } from 'react'
import { Themes, StyleSheet, Typography, TouchableOpacity, TextInput, View, Text, Image } from '@alias';

const AppInput = props => {
    return (
        <View style={{ marginVertical: 10, paddingHorizontal: 10, paddingVertical: Platform.OS == 'ios' ? 5 : 0, borderColor: props.value ? '#0df7ff' : 'grey', borderWidth: props.value ? 1 : 0.5, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {props.passwordicon &&
                    <View style={{}}>
                        <Image
                            source={props.imagepassword}
                            resizeMode="contain"
                            style={{ height: 18, width: 18, marginVertical: 10, bottom: props.RePassword ? 2 : 0, marginRight: 10, }}
                        />
                    </View>}
                <TextInput
                    secureTextEntry={props.secureTextEntry}
                    placeholder={props.placeholder}
                    autoCorrect={false}
                    underlineColorAndroid={"transparent"}
                    placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : '#000'}
                    style={[styles.inputStyle1, { paddingHorizontal: 0, width: props.passwordicon ? '85%' : '90%' }]}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    keyboardType={props.keyboardType}
                    maxLength={props.maxLength}
                    returnKeyType={props.returnKeyType}
                    blurOnSubmit={props.blurOnSubmit || false}
                    onSubmitEditing={props.setFocus}
                    ref={props.getFocus}
                    editable={props.inputedit}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    selection={props.selection}
                />
                <TouchableOpacity
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                    onPress={props.onPress} style={{ paddingHorizontal: 0 }}>
                    <Image
                        source={props.imagePath}
                        resizeMode="contain"
                        style={[{ height: 20, width: 20, right: props.RePassword ? 0 : -10, resizeMode: 'contain' }, props.imageStyle]}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle1: { left: -2, height: 40, color: '#000', fontSize: 14, borderRadius: 3, },
    iconOfCss: { height: "100%", width: "100%", resizeMode: 'contain' },
})

export default AppInput;