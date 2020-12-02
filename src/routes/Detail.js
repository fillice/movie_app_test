import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const{location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        console.log(this.props);
        const{location}=this.props
        if(location.state){
            return (
                <div className="detail">
                    <img src={location.state.poster} alt={location.state.title}/>
                    <p>
                        {location.state.title}<br/>
                        {location.state.genres}<br/>
                        {location.state.year}<br/>
                        {location.state.summary}
                    </p>
                </div>
            );
        }else{
            return null;
        }        
    }
}

export default Detail;