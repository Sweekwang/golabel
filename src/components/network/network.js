import React, { Fragment, useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import AButton from '../button/aButton';
import classes from './network.module.css';
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { CompactPicker } from 'react-color';

const Network = (props) => {

  let [x, setX] = useState(window.innerWidth / 2.5);
  let [sizeHeight, setSizeHeight] = useState('500px');
  let [text, setText] = useState('Increase');
  let [changeNode, setChangeNode] = useState(false);
  let [layout, setLayout] = useState({name: 'cose'});

  let [GO_biological_process, setGO_biological_process] = useState("rgb(228,185,165)");
  let [DGE_infection_and_immunity, setDGE_infection_and_immunity] = useState("rgb(228,185,165)");
  let [Tandemly, setTandemly] = useState("rgb(155,95,55)");
  let [Regulatory, setRegulatory] = useState("rgb(240,2,127)");
  let [Conservation, setDGE_general] = useState("rgb(190,174,212)");
  let [molecular, setmolecular] = useState("rgb(203,178,196)");
  let [PPI, setPPI] = useState("rgb(56,108,176)");
  let [Coexp, setCoexp] = useState("gb(165,185,178)");
  let [DGE_growth, setDGE_growth] = useState("#ffffff");
  let [domains, setdomains] = useState("#ffffff");
  let [network, setnetwork] = useState("#ffffff");
  let [DGE_stress, setDGE_stress] = useState("#ffffff");
  let [Pfam, setPfam] = useState("#ffffff");
  let [Diurnal, setDiurnal] = useState("#ffffff");
  let [methlyated, setmethlyated] = useState("#ffffff");
  let [TF_TG, setTF_TG] = useState("#ffffff");
  let [Transmembrane, setTransmembrane] = useState("#ffffff");
  let [GO_molecular_function, setGO_molecular_function] = useState("#ffffff");
  let [Single, setSingle] = useState("#ffffff");
  let [Aranet, setAranet] = useState("#ffffff");
  let [DGE_light, setDGE_light] = useState();
  let [GO_cellular_component, setGO_cellular_component] = useState("#ffffff");
  let [Aranet2, setAranet2] = useState("#ffffff");
  let [Homolog, setHomolog] = useState("#ffffff");
  let [element, setelement] = useState("#ffffff");
  let [Phylostrata, setPhylostrata] = useState("#ffffff");
  let [SPM, setSPM] = useState("#ffffff");
  let [PPInetwork, setPPInetwork] = useState("#ffffff");
  let [TWAS, setTWAS] = useState("#ffffff");
  let [families, setfamilies] = useState("#ffffff");
  let [Disordered, setDisordered] = useState("#ffffff");
  let [Orthogroups, setOrthogroups] = useState("#ffffff");
  let [Regulatory2, setRegulatory2] = useState("#ffffff");
  let [Biochemical, setBiochemical] = useState("#ffffff");
  let [PTMs, setPTMs] = useState("#ffffff");
  let [TPM, setTPM] = useState("#ffffff");

      const stylesheet = [
        {
          selector: 'node',
          style: {
            "border-color" : "rgb(204,204,204)",
            "background-opacity" : 1.0,
            "border-opacity" : 1.0,
            "font-size" : 12,
            backgroundColor: GO_biological_process,
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
            backgroundColor: GO_biological_process,
          }
        }, {
          selector: "node[feat_category = 'DGE_infection and immunity']",
          style : {
            backgroundColor: DGE_infection_and_immunity
          }
        }, {
          selector: "node[feat_category = 'Tandemly duplicated']",
          style : {
            backgroundColor: Tandemly
          }
        }, {
          selector: "node[feat_category = 'Regulatory clusters']",
          style : {
            backgroundColor: Regulatory
          }
        }, {
          selector: "node[feat_category = 'Conservation features']",
          style : {
            backgroundColor: Conservation
          }
        }, {
          selector: "node[feat_category = 'DGE_general molecular function']",
          style : {
            backgroundColor: molecular
          }
        }, {
          selector: "node[feat_category = 'PPI clusters']",
          style : {
            backgroundColor: PPI
          }
        }, {
          selector: "node[feat_category = 'Coexp clusters']",
          style : {
            backgroundColor: Coexp
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

    const changeNodeColorHandler = () => {
      setChangeNode(!changeNode)
    }
    // Change Color.
    const updateColor = (color) => { // TODO: TO DELETE THIS FUNCTION ONCE EVERYTHING IS DONE.
      setGO_biological_process(color.hex)
    }

    const updateGO_biological_proces = (color) => {
      setGO_biological_process(color.hex)
    }

    const updateDGE_infection_and_immunity= (color) => {
      setDGE_infection_and_immunity(color.hex)
    }

    const updateTandemly= (color) => {
      setTandemly(color.hex)
    }

    const updateRegulatory = (color) => {
      setRegulatory(color.hex)
    }
    
    // ============================================================
    // Change Layout
    const change_layout = (new_layout) => {
      setLayout({name: new_layout})
    }

    return(
      <Fragment>
        <div className={classes.buttondiv}>
          <AButton onClick={changeNodeColorHandler}>Change Node Color</AButton>
          <AButton>Change Edge Color</AButton>
          {/*This needs to be the last button, otherwise the formatting looks weird, gaps between buttons become too big*/}
          <Menu menuButton={<MenuButton className={classes.dropbtn}>Change Layout</MenuButton>}>
              <MenuItem onClick={() => change_layout('random')}>Random</MenuItem>
              <MenuItem onClick={() => change_layout('breadthfirst')}>Breadthfirst</MenuItem>
              <MenuItem onClick={() => change_layout('circle')}>Circle </MenuItem>
              <MenuItem onClick={() => change_layout('concentric')}>Concentric</MenuItem>
              <MenuItem onClick={() => change_layout('cose')}>Cose</MenuItem>
              <MenuItem onClick={() => change_layout('grid')}>Grid</MenuItem>
          </Menu>

        </div>
        {changeNode && <div className={classes.colorContainer}>
          <div className={classes.colorContainerItem}>
            <p>GO_biological_process:</p>
            <CompactPicker color={GO_biological_process} onChangeComplete={updateGO_biological_proces}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>DGE_infection and immunity:</p>
            <CompactPicker color={DGE_infection_and_immunity} onChangeComplete={updateDGE_infection_and_immunity}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Tandemly duplicated:</p>
            <CompactPicker color={Tandemly} onChangeComplete={updateTandemly}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Regulatory clusters:</p>
            <CompactPicker color={Regulatory} onChangeComplete={updateRegulatory}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Conservation features:</p>
            <CompactPicker color={Conservation} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>DGE_general molecular function:</p>
            <CompactPicker color={molecular} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>PPI clusters:</p>
            <CompactPicker color={PPI} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Coexp network features:</p>
            <CompactPicker color={Coexp} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>DGE_growth and development:</p>
            <CompactPicker color={DGE_growth} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Number of domains:</p>
            <CompactPicker color={domains} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Coexp network features:</p>
            <CompactPicker color={network} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>DGE_stress and stimulus:</p>
            <CompactPicker color={DGE_stress} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Pfam domains:</p>
            <CompactPicker color={Pfam} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Diurnal timepoints:</p>
            <CompactPicker color={Diurnal} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Gene body methlyated:</p>
            <CompactPicker color={methlyated} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>TF-TG properties:</p>
            <CompactPicker color={TF_TG} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Transmembrane helices:</p>
            <CompactPicker color={Transmembrane} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>GO_molecular_function:</p>
            <CompactPicker color={GO_molecular_function} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Single copy:</p>
            <CompactPicker color={Single} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Aranet network features:</p>
            <CompactPicker color={Aranet} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>DGE_light and circadian:</p>
            <CompactPicker color={DGE_light} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>GO_cellular_component:</p>
            <CompactPicker color={GO_cellular_component} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Aranet clusters:</p>
            <CompactPicker color={Aranet2} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Homolog features:</p>
            <CompactPicker color={Homolog} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>cis-regulatory element names:</p>
            <CompactPicker color={element} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Phylostrata:</p>
            <CompactPicker color={Phylostrata} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>SPM features:</p>
            <CompactPicker color={SPM} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>PPI network features:</p>
            <CompactPicker color={PPInetwork} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>TWAS features:</p>
            <CompactPicker color={TWAS} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>cis-regulatory element families</p>
            <CompactPicker color={families} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Disordered domains regions:</p>
            <CompactPicker color={Disordered} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Orthogroups:</p>
            <CompactPicker color={Orthogroups} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Regulatory network features':</p>
            <CompactPicker color={Regulatory2} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Biochemical features:</p>
            <CompactPicker color={Biochemical} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Protein PTMs:</p>
            <CompactPicker color={PTMs} onChangeComplete={updateColor}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>TPM features:</p>
            <CompactPicker color={TPM} onChangeComplete={updateColor}/>
          </div>
        </div>}
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
      </Fragment>   
    )
}
export default Network;