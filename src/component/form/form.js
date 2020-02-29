/* eslint-disable no-undef */
// import './resty.scss';

import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url:'',
    };
  }

   handelClick = async e =>{
     e.preventDefault();
     let raw = await fetch(this.state.url);
     let APIdata = await raw.json();
     this.props.update(APIdata);
   };

   callingAPI = e =>{
     let url = e.target.value;
     this.setState({url});
   };
   render(){
     return(
       <form onSubmit={this.handelClick}>
         <input type='text' className="useInput" name='url' placeholder='Type the URL  for the API' onChange={this.callingAPI} /><br/>
         <label>GET
           <input className='radio'type='radio' name='GET'  required/>
         </label>
         <label>POST
           <input className='radio' type='radio' name='POST' />
         </label>
         <label> PUT
           <input className='radio' type='radio' name='PUT' />
         </label>
         <label>DELETE
           <input className='radio' type='radio' name='DELETE' />
         </label>
         <button className='go' type='submit'>Go!</button>
       </form>
     );
   }
}


export default Form;