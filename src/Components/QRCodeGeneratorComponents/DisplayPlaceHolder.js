import { Component } from 'react';
import html2canvas from 'html2canvas';

class DisplayPlaceHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: '',
            update:'',
            popup: false
        }
    }

    componentDidUpdate = () => {
        if(this.state.update !== this.props.update){
        this.displayPicture();
        this.setState({update:this.props.update});
        }
    }

    handleHidePopup = () => {this.setState({popup:false})}


    displayPicture = () => {
        html2canvas(this.props.value).then(canvas => {
            this.setState({picture: canvas.toDataURL(),popup:true})
        })
        this.setState({picture:''})
    }

    


    render() {
        const {picture,popup} = this.state;
        return (
            popup ?
            <div className="popup">                      
            <img src={picture} className='pic' alt="QR"/>
            <span className="close" onClick={()=>this.handleHidePopup()}>
                X
            </span>  
            </div>
            : null
        )
    }
}

export default DisplayPlaceHolder
