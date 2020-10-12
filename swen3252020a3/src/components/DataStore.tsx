import React,{Component} from 'react'
interface Props{

}
interface State{

}

class DataStore extends Component<Props,State>{
    private static array:any = new Array();

    static addResponse = (resp:any) =>{
        DataStore.array[DataStore.array.length] = resp;
    }

    static getResponses = () =>{
        return DataStore.array;
    }
}

export default DataStore;