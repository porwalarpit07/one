import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchData, saveData } from '../../../appRedux/actions/action';
import { setUser, setUserAnswer, setUserData } from '../../appRedux/Reducers/slice';
import { ImagePath } from '@alias';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import  VideoPlayer  from "react-native-video-player";

const Assessment = (props) => {
    const dispatch = useDispatch()
    const [questionIndex, setQuestionIndex] = useState(0)
    const [optionIndex, setOptionIndex] = useState(0)
    const [questionOptions, setQuestionOptions] = useState([])
    const [selectAnsInd, setSelectedAns] = useState()
    const [isSelected, setIsSelected] = useState(false)
    const [resData, setResData] = useState([])
    const [answerId, setAnswerID] = useState()
    const [tempansArr, setTempAnsArr] = useState([])
    const user = useSelector((state) => state.user.user);
    const userData = useSelector((state) => state.user.userData)
    const userAnswers = useSelector((state) => state.user.userAnswer)

    const [video, setVideo] = useState()

    useEffect(() => {
        // showDcoument()
        getDataFromApi()
        // console.log("userAnswers=========", userAnswers);
    }, [])


    const showDcoument = (url) => {
        let fileName = `https://static-content-for-text.s3.amazonaws.com/convertedVideos/56f2372f-486b-4c37-afb3-5e085e70feb9_6267_output.mp4`
        let extension = fileName.split('.').pop();
        // let localFile = `${RNFS.DocumentDirectoryPath}/file.${extension}`;
        let localFile = RNFS.DocumentDirectoryPath + '/test1.mp4';
        let options = {
            fromUrl: fileName,
            toFile: localFile
        };

        RNFS.downloadFile(options).promise
            .then((localFile) => {
                console.log("localfile=========", localFile);
                FileViewer.open(localFile, {
                    onDismiss: () => Alert.alert('hhh')
                    // setVideo(localFile)
                }

                ).catch(error => {
                    console.log("No App available to open file", error)
                });
                // Helper.globalLoader.hideLoader()
            })
            .then(() => {
                // Helper.globalLoader.hideLoader()
                console.log("load false");
            })
            .catch(error => {
                // Helper.globalLoader.hideLoader()
                console.log("Unable to download file")
            });
    }

    const getDataFromApi = () => {
        return fetch('http://trainerapp.southeastasia.cloudapp.azure.com/sync/GetTrainingTests', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "calenderId": "CbdsHj1SaL79YVUYKqHogg==\n",
                "prgId": "mgD6U2zIOlV3B2eWGe5jQA==\n",
                "testTypeId": "rdAVXr94spUY0dmhVlIVDA==\n"
            })
        }).then(response => response.json())
            .then(Json => {
                setResData(Json[questionIndex].Questions)
                dispatch(setUser({ name: Json[0].Questions }))
                dispatch(setUserData({ name: Json[0].Questions[0].Answers }))
            }).catch(error => {
                console.log(error);
            })
    }

    const onClickNext = () => {
        if (questionIndex == 0 || questionIndex < 19) {
            setIsSelected(false)
            setQuestionIndex(questionIndex + 1)
            setOptionIndex(optionIndex + 1)
        } else {
            setQuestionIndex(0)
        }
    }

    const onClickProvious = () => {
        if (questionIndex == 0 || questionIndex < 20) {
            setQuestionIndex(questionIndex - 1)
        } else {
            setQuestionIndex(0)
        }
    }

    const selectAns = (index, title, id) => {
        setIsSelected(!isSelected)
        setAnswerID(id)
        let temArr = []
        temArr.push({ "Answer": title, 'question': user?.name[questionIndex]?.Question })
        tempansArr.concat(temArr)
        dispatch(setUserAnswer({ name: temArr }))
    }

    const onClickSubmit = () => {
        console.log('==========userAnswersuserAnswers', userAnswers);
        Alert.alert('test successfully submited')
    }


    const Item = ({ title, index, item }) => (
        <TouchableOpacity onPress={() => selectAns(index, title, item.AnswerId)} style={{ padding: 20, margin: 5, width: '95%', backgroundColor: answerId == item.AnswerId ? 'green' : 'grey' }}>
            <Text style={{ color: '#00000' }} >{title}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView>
            <View>
                <View style={{ padding: 25, width: '100%', backgroundColor: '#FFFFFF', borderBottomWidth: 2, borderBottomColor: '#00000', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#00000' }}>{`Review Pre-Test`}</Text>
                    <Image source={ImagePath.close}
                        style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                </View>
                <View style={{ padding: 25, width: '100%', backgroundColor: '#FFFFFF', borderBottomWidth: 2, borderBottomColor: 'grey', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20, color: '#00000' }}>{`Question:` + questionIndex + `/20`}</Text>
                </View>
            </View>

            <Text>{user?.name[questionIndex].Question}</Text>

            {/* <View style={{ height: 400, width: 500 }}>
                <VideoPlayer
                    video={showDcoument}
                    videoWidth={1600}
                    videoHeight={900}
                    autoplay={true}
                    resizeMode={'cover'}
                    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                /> 
                </View> */}
            <FlatList
                data={resData[questionIndex]?.Answers}
                renderItem={({ item, index }) => <Item title={item.Answer} index={index} item={item} />}
                keyExtractor={item => item.id}
            />

            <View>
                {questionIndex == 19 ?
                    <TouchableOpacity onPress={() => questionIndex == 20 ? null : onClickSubmit()} style={{ height: 45, width: '40%', backgroundColor: 'rgb(10, 24, 103)', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>{`Submit`}</Text>
                    </TouchableOpacity>
                    :
                    <View style={{ padding: 25, width: '100%', backgroundColor: '#FFFFFF', borderBottomWidth: 2, borderBottomColor: '#00000', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => questionIndex == 20 ? null : onClickProvious()} style={{ height: 45, width: '40%', backgroundColor: 'rgb(10, 24, 103)', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: '#FFFFFF' }}>{`Previous`}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => questionIndex == 20 ? null : onClickNext()} style={{ height: 45, width: '40%', backgroundColor: 'rgb(10, 24, 103)', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: '#FFFFFF' }}>{`Next`}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>

        </ScrollView>
    );
};
export default Assessment;