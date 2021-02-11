import react,{Component} from 'react'

class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome visitoe'
        }
    }

    render(){
        return <h1> THIS IS We {this.state.message} </h1>
    }
}
export default Message;