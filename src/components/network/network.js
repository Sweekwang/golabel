import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';
import AButton from '../button/aButton';
import classes from './network.module.css';

const Network = (props) => {

  let [x, setX] = useState(window.innerWidth / 2.5);
  let [sizeHeight, setSizeHeight] = useState('500px');
  let [text, setText] = useState('Increase');

     const layout = {
        name: 'random'
      }

      const stylesheet = [
        {
          selector: 'node',
          style: {
            opacity: 0.8,
            label: 'data(label)',
            backgroundColor: 'blue',
          }
        },
        {
          selector: 'edge',
          style: {
            opacity: 0.5,
            lineColor: '#515E63'
          }
        },
        {
          selector: "node[source = 'go' ]", 
          style: {
            opacity: 0.8,
            label: 'data(label)',
            backgroundColor: 'purple'
          }
        },
        {
          selector: "node[source = 'ffi' ]", 
          style: {
            opacity: 0.8,
            label: 'data(label)',
            backgroundColor: 'red'
          }
        },
        {
          selector: "node[source = 'dge' ]", 
          style: {
            opacity: 0.8,
            label: 'data(label)',
            backgroundColor: 'black'
          }
        }
      ];
    
    const largehandler = () => {
      setSizeHeight(prevHeight => {
        if (prevHeight === '300px') {
          return '400px'
        } else if (prevHeight === '400px') {
          return '500px'
        } else if (prevHeight === '500px') {
          return '600px'
        } else if (prevHeight === '600px') {
          setText('Decrease')
          return '700px'
        } else {
          setText('Increase')
          return '300px'
          
        }
        
      });

    }

    return(
        <div className={classes.network}>
          <CytoscapeComponent 
              elements={props.elements} 
              style={ {  
                height: sizeHeight,
              } } 
              cy={cy =>
                cy.on('add', 'node', _evt => {
                    cy.layout(layout).run()
                    cy.fit()
                })
            }
              stylesheet={stylesheet}
              layout={layout} 
              pan={ { x: x, y: 80 } }
              zoom={0.8}
              minZoom={0.5}
              maxZoom={2}

              />
          <AButton className={classes.btn} onClick={largehandler}>{text} Frame Height</AButton>
          
        </div>    
        )
}
export default Network;