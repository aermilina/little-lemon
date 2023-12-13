export default function getTimesApi(payload){
 
    if (payload.getDate() === 13 ){
        
        return ["12:00","14:00"]
    }

    return ["20:00","22:00"]

}