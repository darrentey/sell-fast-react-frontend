export function PostData (type, userData){
    
    let BaseUrl = 'http://127.0.0.1:5000/';

    return new Promise((resolve, reject) => {

        fetch(BaseUrl+type,{
            method: 'GET',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        });
    });

}