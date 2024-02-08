import { Alert, AppConstant } from '@alias';

export const permissionConfirm = (alertMessage, cb) => {
    Alert.alert(
        AppConstant.appName,
        alertMessage,
        [
            {
                text: "NOT NOW",
                onPress: () => {
                    if (cb) cb(false);
                },
                style: "cancel",
            },
            {
                text: "SETTINGS",
                onPress: () => {
                    if (cb) cb(true);
                },
            },
        ],
        { cancelable: false }
    );
}
 
export const confirm = (alertMessage, cb) => {
    Alert.alert(
        AppConstant.appName,
        alertMessage,
        [
            {
                text: "Yes",
                onPress: () => {
                    if (cb) cb(true);
                },
            },
            {
                text: "No",
                onPress: () => {
                    if (cb) cb(false);
                },
                style: "cancel",
            },
        ],
        { cancelable: false }
    );
}

export const showAlert = (alertMessage, cb) => {
    Alert.alert(
        AppConstant.appName,
        alertMessage,
        [
            {
                text: "OK",
                onPress: () => {
                    if (cb) cb(true);
                },
            },
        ],
        { cancelable: false }
    );
}