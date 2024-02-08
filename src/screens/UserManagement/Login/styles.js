import { Themes, StyleSheet, Typography} from  '@alias';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
        backgroundColor: Themes.BACKGROUND
    }, 
    mainContainer: {
        height: '80%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    upperHeadingText:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Themes.BACKGROUND,
        height: '20%'
    },

    BoldText:{
        fontSize: Typography.FONT_SIZE_24,
        color: Themes.WHITEBACKGROUND,
        ...Typography.FONT_REGULAR
    }
})

export default styles;