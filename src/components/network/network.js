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
import Cytoscape from 'cytoscape';
import fcose from 'cytoscape-fcose';

Cytoscape.use(fcose);

const Network = (props) => {

  let [x, setX] = useState(window.innerWidth / 2.5);
  let [sizeHeight, setSizeHeight] = useState(500);
  let [layout, setLayout] = useState({name: 'fcose', nodeSeparation: 300, idealEdgeLength: edge => 150, 
  nodeRepulsion: node => 18000,  edgeElasticity: edge => 0.01});

  // CHANGE THE STATE OF THE COLOR:
  let [changeNode, setChangeNode] = useState(false);
  let [GO_biological_process, setGO_biological_process] = useState("rgb(254,230,145)");
  let [DGE_infection_and_immunity, setDGE_infection_and_immunity] = useState("rgb(228,185,165)");
  let [Tandemly, setTandemly] = useState("rgb(155,95,55)");
  let [Regulatory, setRegulatory] = useState("rgb(240,2,127)");  // Regulatory clusters
  let [Conservation, setConservation] = useState("rgb(190,174,212)");
  let [DGE_general, setDGE_general] = useState("rgb(203,178,196)");
  let [PPI, setPPI] = useState("rgb(56,108,176)");
  let [Coexp, setCoexp] = useState("gb(165,185,178)"); // coexp clusters
  let [DGE_growth, setDGE_growth] = useState("rgb(215,181,181)");
  let [Domains, setDomains] = useState("rgb(136,167,167)");
  let [network, setnetwork] = useState("rgb(177,179,195)"); // coexp network features, need to be in small caps as Network is taken as a variable
  let [DGE_stress, setDGE_stress] = useState("rgb(253,192,134)");
  let [Pfam, setPfam] = useState("rgb(130,66,156)");
  let [Diurnal, setDiurnal] = useState("rgb(254,217,142)");
  let [Methlyated, setMethlyated] = useState("rgb(215,226,158)");
  let [TF_TG, setTF_TG] = useState("rgb(201,73,44)");
  let [Transmembrane, setTransmembrane] = useState("rgb(138,98,70)");
  let [GO_molecular_function, setGO_molecular_function] = useState("rgb(255,255,153)");
  let [Single, setSingle] = useState("rgb(211,55,65)");
  let [Aranet, setAranet] = useState("rgb(140,196,144)");
  let [DGE_light, setDGE_light] = useState("rgb(240,188,150)");
  let [GO_cellular_component, setGO_cellular_component] = useState("rgb(255,242,149)");
  let [Aranet2, setAranet2] = useState("rgb(127,201,127)");
  let [Homolog, setHomolog] = useState("rgb(175,196,162)");
  let [element, setelement] = useState("rgb(102,102,102)"); // Prob can caps but didnt since Elements can also refer to specific types of React objectd
  let [Phylostrata, setPhylostrata] = useState("rgb(166,44,147)");
  let [SPM, setSPM] = useState("rgb(220,38,85)");
  let [PPInetwork, setPPInetwork] = useState("rgb(93,87,166)");
  let [TWAS, setTWAS] = useState("rgb(173,93,39)");
  let [Families, setFamilies] = useState("rgb(120,100,86)");
  let [Disordered, setDisordered] = useState("rgb(253,205,138)");
  let [Orthogroups, setOrthogroups] = useState("rgb(96,137,171)");
  let [Regulatory2, setRegulatory2] = useState("rgb(230,20,106)");
  let [Biochemical, setBiochemical] = useState("rgb(152,190,161)");
  let [PTMs, setPTMs] = useState("rgb(203,23,137)");
  let [TPM, setTPM] = useState("rgb(191,91,23)");

  // Egde Color
  let [edgeFilter, setEdgeFilter] = useState(false);
  let [defaultEdge, setdefaultEdge] = useState("rgb(132,132,132)");
  let [between_grp8, setbetween_grp8] = useState("rgb(132,132,132)");
  let [between_grp6, setbetween_grp6] = useState("rgb(132,132,132)");
  let [between_grp7, setbetween_grp7] = useState("rgb(132,132,132)");
  let [between_grp5, setbetween_grp5] = useState("rgb(132,132,132)");
  let [between_grp4, setbetween_grp4] = useState("rgb(132,132,132)");
  let [between_grp3, setbetween_grp3] = useState("rgb(132,132,132)");
  let [between_grp2, setbetween_grp2] = useState("rgb(132,132,132)");
  let [between_grp1, setbetween_grp1] = useState("rgb(132,132,132)");

      const stylesheet = [
        {
          selector: 'node',
          style: {
            "border-color" : "rgb(204,204,204)",
            "background-opacity" : 1.0,
            "border-opacity" : 1.0,
            "font-size" : 12,
            "backgroundColor": "rgb(137,208,245)",
            "text-valign" : "center",
            "text-halign" : "center",
            "color" : "rgb(0,0,0)",
            "shape" : "roundrectangle",
            "text-opacity" : 1.0,
            "text-wrap": "wrap",
            "text-max-width": "100px",
            "border-width" : 0.0,
            "height" : 35.0,
            "font-family" : "SansSerif.plain",
            "font-weight" : "normal",
            "width" : 75.0,
            "content": "data(new_name)"
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
            backgroundColor: DGE_general
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
            backgroundColor: DGE_growth
          }
        }, {
          selector: "node[feat_category = 'Number of domains']",
          style : {
            backgroundColor: Domains
          }
        }, {
          selector: "node[feat_category = 'Coexp network features']",
          style : {
            backgroundColor: network
          }
        }, {
          selector: "node[feat_category = 'DGE_stress and stimulus']",
          style : {
            backgroundColor: DGE_stress
          }
        }, {
          selector: "node[feat_category = 'Pfam domains']",
          style : {
            backgroundColor: Pfam
          }
        }, {
          selector: "node[feat_category = 'Diurnal timepoints']",
          style : {
            backgroundColor: Diurnal
          }
        }, {
          selector: "node[feat_category = 'Gene body methlyated']",
          style : {
            backgroundColor: Methlyated
          }
        }, {
          selector: "node[feat_category = 'TF-TG properties']",
          style : {
            backgroundColor: TF_TG
          }
        }, {
          selector: "node[feat_category = 'Transmembrane helices']",
          style : {
            backgroundColor: Transmembrane
          }
        }, {
          selector: "node[feat_category = 'GO_molecular_function']",
          style : {
            backgroundColor: GO_molecular_function
          }
        }, {
          selector: "node[feat_category = 'Single copy']",
          style : {
            backgroundColor: Single
          }
        }, {
          selector: "node[feat_category = 'Aranet network features']",
          style : {
            backgroundColor: Aranet
          }
        }, {
          selector: "node[feat_category = 'DGE_light and circadian']",
          style : {
            backgroundColor: DGE_light
          }
        }, {
          selector: "node[feat_category = 'GO_cellular_component']",
          style : {
            backgroundColor: GO_cellular_component
          }
        }, {
          selector: "node[feat_category = 'Aranet clusters']",
          style : {
            backgroundColor: Aranet2
          }
        }, {
          selector: "node[feat_category = 'Homolog features']",
          style : {
            backgroundColor: Homolog
          }
        }, {
          selector: "node[feat_category = 'cis-regulatory element names']",
          style : {
            backgroundColor: element
          }
        }, {
          selector: "node[feat_category = 'Phylostrata']",
          style : {
            backgroundColor: Phylostrata
          }
        }, {
          selector: "node[feat_category = 'SPM features']",
          style : {
            backgroundColor: SPM
          }
        }, {
          selector: "node[feat_category = 'PPI network features']",
          style : {
            backgroundColor: PPInetwork
          }
        }, {
          selector: "node[feat_category = 'TWAS features']",
          style : {
            backgroundColor: TWAS
          }
        }, {
          selector: "node[feat_category = 'cis-regulatory element families']",
          style : {
            backgroundColor: Families
          }
        }, {
          selector: "node[feat_category = 'Disordered domains regions']",
          style : {
            backgroundColor: Disordered
          }
        }, {
          selector: "node[feat_category = 'Orthogroups']",
          style : {
            backgroundColor: Orthogroups
          }
        }, {
          selector: "node[feat_category = 'Regulatory network features']",
          style : {
            backgroundColor: Regulatory2
          }
        }, {
          selector: "node[feat_category = 'Biochemical features']",
          style : {
            backgroundColor: Biochemical
          }
        }, {
          selector: "node[feat_category = 'Protein PTMs']",
          style : {
            backgroundColor: PTMs
          }
        }, {
          selector: "node[feat_category = 'TPM features']",
          style : {
            backgroundColor: TPM
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
            "line-color" : defaultEdge,
            "width": "mapData(invert_ranks, 1, 27, 1, 10)",
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
            "line-color" : between_grp8
          }
        }, {
          "selector" : "edge[interaction = 'between_grp7']",
          style : {
            "line-color" : between_grp7
          }
        }, {
          "selector" : "edge[interaction = 'between_grp6']",
          style : {
            "line-color" : between_grp6
          }
        }, {
          "selector" : "edge[interaction = 'between_grp5']",
          style : {
            "line-color" : between_grp5
          }
        }, {
          "selector" : "edge[interaction = 'between_grp4']",
          style : {
            "line-color" : between_grp4
          }
        }, {
          "selector" : "edge[interaction = 'between_grp3']",
          style : {
            "line-color" : between_grp3
          }
        }, {
          "selector" : "edge[interaction = 'between_grp2']",
          style : {
            "line-color" : between_grp2
          }
        }, {
          "selector" : "edge[interaction = 'between_grp1']",
          style : {
            "line-color" : between_grp1
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
          return prevHeight + 100
      });
    }

    const decreaseHandler = () => {
      setSizeHeight(prevHeight => {
          return prevHeight - 100
      });
    }

    const changeNodeColorHandler = () => {
      setEdgeFilter(false);
      setChangeNode(!changeNode);
    }
    // Change Color.
    const updateGO_biological_process = (color) => {
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

    const updateConservation = (color) => {
      setConservation(color.hex)
    }

    const updateDGE_general = (color) => {
      setDGE_general(color.hex)
    }

    const updatePPI = (color) => {
      setPPI(color.hex)
    }

    const updateCoexp = (color) => {
      setCoexp(color.hex)
    }

    const updateDGE_growth = (color) => {
      setDGE_growth(color.hex)
    }

    const updateDomains = (color) => {
      setDomains(color.hex)
    }

    const updatenetwork = (color) => {
      setnetwork(color.hex)
    }

    const updateDGE_stress = (color) => {
      setDGE_stress(color.hex)
    }

    const updatePfam = (color) => {
      setPfam(color.hex)
    }

    const updateDiurnal = (color) => {
      setDiurnal(color.hex)
    }

    const updateMethlyated = (color) => {
      setMethlyated(color.hex)
    }

    const updateTF_TG = (color) => {
      setTF_TG(color.hex)
    }

    const updateTransmembrane = (color) => {
      setTransmembrane(color.hex)
    }

    const updateGO_molecular_function = (color) => {
      setGO_molecular_function(color.hex)
    }

    const updateSingle = (color) => {
      setSingle(color.hex)
    }

    const updateAranet = (color) => {
      setAranet(color.hex)
    }

    const updateDGE_light = (color) => {
      setDGE_light(color.hex)
    }

    const updateGO_cellular_component = (color) => {
      setGO_cellular_component(color.hex)
    }

    const updateAranet2 = (color) => {
      setAranet2(color.hex)
    }

    const updateHomolog = (color) => {
      setHomolog(color.hex)
    }

    const updateelement = (color) => {
      setelement(color.hex)
    }

    const updatePhylostrata = (color) => {
      setPhylostrata(color.hex)
    }

    const updateSPM = (color) => {
      setSPM(color.hex)
    }

    const updatePPInetwork = (color) => {
      setPPInetwork(color.hex)
    }

    const updateTWAS = (color) => {
      setTWAS(color.hex)
    }

    const updateFamilies = (color) => {
      setFamilies(color.hex)
    }

    const updateDisordered = (color) => {
      setDisordered(color.hex)
    }

    const updateOrthogroups = (color) => {
      setOrthogroups(color.hex)
    }

    const updateRegulatory2 = (color) => {
      setRegulatory2(color.hex)
    }

    const updateBiochemical = (color) => {
      setBiochemical(color.hex)
    }

    const updatePTMs = (color) => {
      setPTMs(color.hex)
    }

    const updateTPM = (color) => {
      setTPM(color.hex)
    }
    // ============================================================
    // Change Edge Color
    const showEdgeFilter = () => {
      setChangeNode(false);
      setEdgeFilter(!edgeFilter);
    }

    const update_defaultEdge = (color) => {
      setdefaultEdge(color.hex)
    }

    // ============================================================
    // Change Layout
    const change_layout = (new_layout) => {
      if (new_layout == 'fcose') {
        setLayout({name: 'fcose', nodeSeparation: 300, idealEdgeLength: edge => 150, 
        nodeRepulsion: node => 18000,  edgeElasticity: edge => 0.01})
      } else {
        setLayout({name: new_layout})
      }  
    }

    return(
      <Fragment>
        <div className={classes.buttondiv}>
          <AButton onClick={changeNodeColorHandler}>Change Node Color</AButton>
          <AButton onClick={showEdgeFilter}>Change Edge Color</AButton>
          {/*This needs to be the last button, otherwise the formatting looks weird, gaps between buttons become too big*/}
          <Menu menuButton={<MenuButton className={classes.dropbtn}>Change Layout</MenuButton>}>
              <MenuItem onClick={() => change_layout('random')}>Random</MenuItem>
              <MenuItem onClick={() => change_layout('breadthfirst')}>Breadthfirst</MenuItem>
              <MenuItem onClick={() => change_layout('circle')}>Circle </MenuItem>
              <MenuItem onClick={() => change_layout('concentric')}>Concentric</MenuItem>
              <MenuItem onClick={() => change_layout('fcose')}>Fcose</MenuItem>
              <MenuItem onClick={() => change_layout('grid')}>Grid</MenuItem>
          </Menu>

        </div>
        {changeNode && <div className={classes.colorContainer}>
          <div className={classes.colorContainerItem}>
            <p>GO_biological_process:</p>
            <CompactPicker color={GO_biological_process} onChangeComplete={updateGO_biological_process}/>
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
            <CompactPicker color={Conservation} onChangeComplete={updateConservation}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>DGE_general molecular function:</p>
            <CompactPicker color={DGE_general} onChangeComplete={updateDGE_general}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>PPI clusters:</p>
            <CompactPicker color={PPI} onChangeComplete={updatePPI}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Coexp network features:</p>
            <CompactPicker color={Coexp} onChangeComplete={updateCoexp}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>DGE_growth and development:</p>
            <CompactPicker color={DGE_growth} onChangeComplete={updateDGE_growth}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Number of domains:</p>
            <CompactPicker color={Domains} onChangeComplete={updateDomains}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Coexp network features:</p>
            <CompactPicker color={network} onChangeComplete={updatenetwork }/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>DGE_stress and stimulus:</p>
            <CompactPicker color={DGE_stress} onChangeComplete={updateDGE_stress}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Pfam domains:</p>
            <CompactPicker color={Pfam} onChangeComplete={updatePfam}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Diurnal timepoints:</p>
            <CompactPicker color={Diurnal} onChangeComplete={updateDiurnal}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Gene body methlyated:</p>
            <CompactPicker color={Methlyated} onChangeComplete={updateMethlyated}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>TF-TG properties:</p>
            <CompactPicker color={TF_TG} onChangeComplete={updateTF_TG}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Transmembrane helices:</p>
            <CompactPicker color={Transmembrane} onChangeComplete={updateTransmembrane}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>GO_molecular_function:</p>
            <CompactPicker color={GO_molecular_function} onChangeComplete={updateGO_molecular_function}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Single copy:</p>
            <CompactPicker color={Single} onChangeComplete={updateSingle}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Aranet network features:</p>
            <CompactPicker color={Aranet} onChangeComplete={updateAranet}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>DGE_light and circadian:</p>
            <CompactPicker color={DGE_light} onChangeComplete={updateDGE_light}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>GO_cellular_component:</p>
            <CompactPicker color={GO_cellular_component} onChangeComplete={updateGO_cellular_component}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Aranet clusters:</p>
            <CompactPicker color={Aranet2} onChangeComplete={updateAranet2}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Homolog features:</p>
            <CompactPicker color={Homolog} onChangeComplete={updateHomolog}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>cis-regulatory element names:</p>
            <CompactPicker color={element} onChangeComplete={updateelement}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Phylostrata:</p>
            <CompactPicker color={Phylostrata} onChangeComplete={updatePhylostrata}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>SPM features:</p>
            <CompactPicker color={SPM} onChangeComplete={updateSPM}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>PPI network features:</p>
            <CompactPicker color={PPInetwork} onChangeComplete={updatePPInetwork}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>TWAS features:</p>
            <CompactPicker color={TWAS} onChangeComplete={updateTWAS}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>cis-regulatory element families</p>
            <CompactPicker color={Families} onChangeComplete={updateFamilies}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Disordered domains regions:</p>
            <CompactPicker color={Disordered} onChangeComplete={updateDisordered}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Orthogroups:</p>
            <CompactPicker color={Orthogroups} onChangeComplete={updateOrthogroups}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Regulatory network features':</p>
            <CompactPicker color={Regulatory2} onChangeComplete={updateRegulatory2}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Biochemical features:</p>
            <CompactPicker color={Biochemical} onChangeComplete={updateBiochemical}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>Protein PTMs:</p>
            <CompactPicker color={PTMs} onChangeComplete={updatePTMs}/>
          </div>
          <div className={classes.colorContainerItem}>
            <p>TPM features:</p>
            <CompactPicker color={TPM} onChangeComplete={updateTPM}/>
          </div>
        </div>}
        <div className={classes.network}>
          <CytoscapeComponent 
              elements={props.elements} 
              style={ {  
                height: sizeHeight + 'px',
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
            <AButton className={classes.btn2} onClick={decreaseHandler}>↑</AButton>
            <AButton className={classes.btn} onClick={largehandler}>↓</AButton>
        </div>       
      </Fragment>   
    )
}
export default Network;