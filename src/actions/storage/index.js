import { AsyncStorage } from 'react-native';

export function storeData(key, value) {
    return new Promise((reslove, reject) => {
        AsyncStorage.setItem(key, value)
            .then(() => {
                reslove()
            }).catch((errorF) => {
                reject(error)
            })
    })

};

export function retrieveData(key) {
    return new Promise((reslove, reject) => {
        AsyncStorage.getItem(key)
            .then((value) => {
                reslove(value) 
            })
            .catch((error) => {
                reject(error)
            })
    })
};