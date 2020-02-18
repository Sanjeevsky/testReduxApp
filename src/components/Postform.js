import React, { Component } from 'react'

class Postform extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    };
    onSubmit(e){
        e.preventDefault();
        const post={
            title:this.state.title,
            body:this.state.body
        };
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Access-Control-Allow-Origin': 'true'
            },
            body:JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(res=>console.log(res));
    }
    render() {
        return (
            <div>
                <h3>Add Post</h3>
               <form onSubmit={this.onSubmit}> 
               <div>
                   <label> Title:</label>
                   <input type='text' onChange={this.onChange} name="title" value={this.state.title} />
                   </div>
                   <br/>
                   <div>
                   <label> Body:</label>
                   <br/>
                   <textarea onChange={this.onChange} name='body' value={this.state.body} />
                   <br/>
                   </div>
                 
                   <button type='submit'>Submit</button>
                   <br/>
                   
               </form>
            </div>
        )
    }
}
export default Postform;
