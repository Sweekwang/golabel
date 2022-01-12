import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';
import AButton from '../button/aButton';
import { ADropdownButton } from '../dropdownbutton/aDropdownButton';
import { Element } from '../dropdownbutton/Element';
import classes from './network.module.css';
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const Network = (props) => {

  let [x, setX] = useState(window.innerWidth / 2.5);
  let [sizeHeight, setSizeHeight] = useState('500px');
  let [text, setText] = useState('Increase');
  let [layout, setLayout] = useState({name: 'cose'});

      const stylesheet = [
        {
          selector: 'node',
          style: {
            "border-color" : "rgb(204,204,204)",
            "background-opacity" : 1.0,
            "border-opacity" : 1.0,
            "font-size" : 12,
            backgroundColor: "rgb(137,208,245)",
            "text-valign" : "center",
            "text-halign" : "center",
            "color" : "rgb(0,0,0)",
            "shape" : "roundrectangle",
            "text-opacity" : 1.0,
            "border-width" : 0.0,
            "height" : 35.0,
            "font-family" : "SansSerif.plain",
            "font-weight" : "normal",
            "width" : 75.0,
            content: "data(new_name)"
          }
        },
        {
          selector: "node[feat_category = 'GO_biological_process']",
          style : {
            backgroundColor: "rgb(254,230,145)",
          }
        }, {
          selector: "node[feat_category = 'DGE_infection and immunity']",
          style : {
            backgroundColor: "rgb(228,185,165)"
          }
        }, {
          selector: "node[feat_category = 'Tandemly duplicated']",
          style : {
            backgroundColor: "rgb(155,95,55)"
          }
        }, {
          selector: "node[feat_category = 'Regulatory clusters']",
          style : {
            backgroundColor: "rgb(240,2,127)"
          }
        }, {
          selector: "node[feat_category = 'Conservation features']",
          style : {
            backgroundColor: "rgb(190,174,212)"
          }
        }, {
          selector: "node[feat_category = 'DGE_general molecular function']",
          style : {
            backgroundColor: "rgb(203,178,196)"
          }
        }, {
          selector: "node[feat_category = 'PPI clusters']",
          style : {
            backgroundColor: "rgb(56,108,176)"
          }
        }, {
          selector: "node[feat_category = 'Coexp clusters']",
          style : {
            backgroundColor: "rgb(165,185,178)"
          }
        }, {
          selector: "node[feat_category = 'DGE_growth and development']",
          style : {
            backgroundColor: "rgb(215,181,181)"
          }
        }, {
          selector: "node[feat_category = 'Number of domains']",
          style : {
            backgroundColor: "rgb(136,167,167)"
          }
        }, {
          selector: "node[feat_category = 'Coexp network features']",
          style : {
            backgroundColor: "rgb(177,179,195)"
          }
        }, {
          selector: "node[feat_category = 'DGE_stress and stimulus']",
          style : {
            backgroundColor: "rgb(253,192,134)"
          }
        }, {
          selector: "node[feat_category = 'Pfam domains']",
          style : {
            backgroundColor: "rgb(130,66,156)"
          }
        }, {
          selector: "node[feat_category = 'Diurnal timepoints']",
          style : {
            backgroundColor: "rgb(254,217,142)"
          }
        }, {
          selector: "node[feat_category = 'Gene body methlyated']",
          style : {
            backgroundColor: "rgb(215,226,158)"
          }
        }, {
          selector: "node[feat_category = 'TF-TG properties']",
          style : {
            backgroundColor: "rgb(201,73,44)"
          }
        }, {
          selector: "node[feat_category = 'Transmembrane helices']",
          style : {
            backgroundColor: "rgb(138,98,70)"
          }
        }, {
          selector: "node[feat_category = 'GO_molecular_function']",
          style : {
            backgroundColor: "rgb(255,255,153)"
          }
        }, {
          selector: "node[feat_category = 'Single copy']",
          style : {
            backgroundColor: "rgb(211,55,65)"
          }
        }, {
          selector: "node[feat_category = 'Aranet network features']",
          style : {
            backgroundColor: "rgb(140,196,144)"
          }
        }, {
          selector: "node[feat_category = 'DGE_light and circadian']",
          style : {
            backgroundColor: "rgb(240,188,150)"
          }
        }, {
          selector: "node[feat_category = 'GO_cellular_component']",
          style : {
            backgroundColor: "rgb(255,242,149)"
          }
        }, {
          selector: "node[feat_category = 'Aranet clusters']",
          style : {
            backgroundColor: "rgb(127,201,127)"
          }
        }, {
          selector: "node[feat_category = 'Homolog features']",
          style : {
            backgroundColor: "rgb(175,196,162)"
          }
        }, {
          selector: "node[feat_category = 'cis-regulatory element names']",
          style : {
            backgroundColor: "rgb(102,102,102)"
          }
        }, {
          selector: "node[feat_category = 'Phylostrata']",
          style : {
            backgroundColor: "rgb(166,44,147)"
          }
        }, {
          selector: "node[feat_category = 'SPM features']",
          style : {
            backgroundColor: "rgb(220,38,85)"
          }
        }, {
          selector: "node[feat_category = 'PPI network features']",
          style : {
            backgroundColor: "rgb(93,87,166)"
          }
        }, {
          selector: "node[feat_category = 'TWAS features']",
          style : {
            backgroundColor: "rgb(173,93,39)"
          }
        }, {
          selector: "node[feat_category = 'cis-regulatory element families']",
          style : {
            backgroundColor: "rgb(120,100,86)"
          }
        }, {
          selector: "node[feat_category = 'Disordered domains regions']",
          style : {
            backgroundColor: "rgb(253,205,138)"
          }
        }, {
          selector: "node[feat_category = 'Orthogroups']",
          style : {
            backgroundColor: "rgb(96,137,171)"
          }
        }, {
          selector: "node[feat_category = 'Regulatory network features']",
          style : {
            backgroundColor: "rgb(230,20,106)"
          }
        }, {
          selector: "node[feat_category = 'Biochemical features']",
          style : {
            backgroundColor: "rgb(152,190,161)"
          }
        }, {
          selector: "node[feat_category = 'Protein PTMs']",
          style : {
            backgroundColor: "rgb(203,23,137)"
          }
        }, {
          selector: "node[feat_category = 'TPM features']",
          style : {
            backgroundColor: "rgb(191,91,23)"
          }
        }, {
          selector: "node[ id = '1365' ]",
          style : {
            "text-valign" : "center"
          }
        }, {
          selector: "node:selected",
          style : {
            backgroundColor: "rgb(255,255,0)"
          }
        }, {
          "selector" : "edge",
          style : {
            "line-color" : "rgb(132,132,132)",
            "width" : 2.0,
            "target-arrow-shape" : "none",
            "content" : "",
            "source-arrow-shape" : "none",
            "color" : "rgb(0,0,0)",
            "source-arrow-color" : "rgb(0,0,0)",
            "text-opacity" : 1.0,
            "opacity" : 1.0,
            "target-arrow-color" : "rgb(0,0,0)",
            "font-family" : "Dialog.plain",
            "font-weight" : "normal",
            "line-style" : "solid",
            "font-size" : 10
          }
        }, {
          "selector" : "edge[interaction = 'between_grp8']",
          style : {
            "line-color" : "rgb(153,102,255)"
          }
        }, {
          "selector" : "edge[interaction = 'between_grp7']",
          style : {
            "line-color" : "rgb(252,205,229)"
          }
        }, {
          "selector" : "edge[interaction = 'between_grp6']",
          style : {
            "line-color" : "rgb(179,222,105)"
          }
        }, {
          "selector" : "edge[interaction = 'between_grp5']",
          style : {
            "line-color" : "rgb(253,180,98)"
          }
        }, {
          "selector" : "edge[interaction = 'between_grp4']",
          style : {
            "line-color" : "rgb(128,177,211)"
          }
        }, {
          "selector" : "edge[interaction = 'between_grp3']",
          style : {
            "line-color" : "rgb(251,128,114)"
          }
        }, {
          "selector" : "edge[interaction = 'between_grp2']",
          style : {
            "line-color" : "rgb(190,186,218)"
          }
        }, {
          "selector" : "edge[interaction = 'between_grp1']",
          style : {
            "line-color" : "rgb(255,255,179)"
          }
        }, {
          "selector" : "edge:selected",
          style : {
            "line-color" : "rgb(255,0,0)"
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

    const change_layout = (new_layout) => {
      setLayout({name: new_layout})
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
          <div>
            <AButton className={classes.btn} onClick={largehandler}>{text} Frame Height</AButton>
            <AButton className={classes.btn} onClick={largehandler}>Edge Filter</AButton>
            <AButton className={classes.btn} onClick={largehandler}>Node Colour</AButton>
            <Menu menuButton={<MenuButton className={classes.dropbtn}>Change Layout</MenuButton>}>
              <MenuItem onClick={() => change_layout('random')}>Random</MenuItem>
              <MenuItem onClick={() => change_layout('breadthfirst')}>Breadthfirst</MenuItem>
              <MenuItem onClick={() => change_layout('circle')}>Circle </MenuItem>
              <MenuItem onClick={() => change_layout('concentric')}>Concentric</MenuItem>
              <MenuItem onClick={() => change_layout('cose')}>Cose</MenuItem>
              <MenuItem onClick={() => change_layout('grid')}>Grid</MenuItem>
            </Menu>
            
            
          </div>
        </div>    
        )
}
export default Network;

/*<ADropdownButton className={classes.btn} onClick={change_layout}>Layout</ADropdownButton>*/