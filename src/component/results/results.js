/* eslint-disable no-unused-vars */
import React from 'react';
import ReactJson from 'react-json-view';
import Form from '../form/form';

function Results (props){
  if (props.response.Headers) {
    return (
      <section className="json">
       
        {/* {JSON.stringify(props.response ,null , '\t')} */}
        <ReactJson src={props.response}/>
   

      </section>
    );
  }else return <section></section>;
}
export default Results;