import classes from './features.module.css';

import FeaturesController from '../../methods/features';
import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';
import AButton from '../../components/button/aButton';
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';

import MaterialTable, { MTableToolbar } from "@material-table/core";

const Features = () => {
    const [node,setNode] = useState([]);
    const [downloadList, setDownloadList] = useState([]);

    useEffect(() => {
        FeaturesController
            .retrieveFeaturesInformation()
            .then(res => {
                setNode(res);
            });
    }, []);

    const featureClicked = (e) => {
        const isCheck = e.target.checked;
        let feature = e.target.name;

        if(feature.includes("dge_")) {
            feature = feature.slice(4);
        } else if (feature.includes("go_")) {
            feature = feature.slice(3);
        }

        if (isCheck) {
            setDownloadList((prevState) => [...prevState, feature]);
        } else {
            setDownloadList((prevState) => prevState.filter(f => f !== feature));
        }
    };

    const downloadHandler = (e) => {
        e.preventDefault();

        downloadList.forEach(function (e) {
            let url = "";

            if (e.includes('GO')) {
                url = 'https://storage.cloud.google.com/go_model/GO' + e.split(':')[1]; 
            } else if (e.includes('MTAB')){
                url = 'https://storage.cloud.google.com/mtab_model/' + e; 
            } else if (e.includes('GEOD')){
                url = 'https://storage.cloud.google.com/geod_model/' + e; 
            } else if (e.includes('tti')){
                url = 'https://storage.cloud.google.com/tti_model/' + e;  
            } else if (e.includes('agi') || e.includes('cid') || e.includes('dit') || e.includes('gbm') || e.includes('hom') || e.includes('pid') ){
                url = 'https://storage.cloud.google.com/agi_model/' + e;  // agi, cid, dit, gbm, hom, pid.
            } else if (e.includes('cin') || e.includes('pep') || e.includes('pfa') || e.includes('ttr') ){
                url = 'https://storage.cloud.google.com/job_model/' + e;  // cin, pep, pfa, ttr
            }
            
            if (url !== "") {
                fetch(e.download)                  
                .then(res => res.blob())                  
                .then(blob => {     
                    console.log(e);       
                     saveAs(blob, e+".pkl");                
                });    
            }        
       });
    };

    const sort = () => {
        console.log('click')
        setNode((prevState) => {
            const dataToSort = [...prevState];
            dataToSort.sort((a,b) => a.category.toLowerCase() < b.category.toLowerCase() ? 1 : -1);
            return dataToSort;
        });
    }
    

    return(
        <MainLayout>
            <Layout className={classes.layout}>
                <h1>Abraidopsis Features</h1>
                <p>
                   The model can be downloaded by click on the checkbox and click on the download button. If 
                   you want to download a bundle of model. It is recommended to go <a href="./download">download</a>.
                   <i>(<b>Ensure that you have allowed mutiple files download</b>)</i>
                </p>
                <p><i>Only features with an out-of-nag (OOB) F1/R<sup>2</sup> score of &gt;= 0.4 will be shown in a network with their first neighbours.</i></p>
                <br/>
                <AButton onClick={downloadHandler}>
                    Download Files
                </AButton>
                <p className={classes.fileSelected}><b>File Selected: </b>
                    {(downloadList.length ===0) ? "None" : 
                    downloadList.map((value, index) => {
                        if (index === downloadList.length - 1) {
                            return (value)
                        } else {
                            return (value + ", ")
                        }
                    })
                    }
                
                </p>
                
                <form><MaterialTable
                    data = {node}
                    columns = {[
                        {field:"category",title:"Category",lookup:{"-":"-","Aranet clusters":"Aranet clusters","Aranet network features":"Aranet network features","Biochemical features":"Biochemical features","Coexp clusters":"Coexp clusters","Coexp network features":"Coexp network features","Conservation features":"Conservation features","DGE_general molecular function":"DGE_general molecular function","DGE_growth and development":"DGE_growth and development","DGE_infection and immunity":"DGE_infection and immunity","DGE_light and circadian":"DGE_light and circadian","DGE_stress and stimulus":"DGE_stress and stimulus","Disordered domains regions":"Disordered domains regions","Diurnal timepoints":"Diurnal timepoints","GO_molecular_function":"GO_molecular_function","Homolog features":"Homolog features","Number of domains":"Number of domains","Orthogroups":"Orthogroups","PPI clusters":"PPI clusters","PPI network features":"PPI network features","Pfam domains":"Pfam domains","Phylostrata":"Phylostrata","Protein PTMs":"Protein PTMs","Regulatory clusters":"Regulatory clusters","Regulatory network features":"Regulatory network features","SPM features":"SPM features","Single copy":"Single copy","TF-TG properties":"TF-TG properties","TPM features":"TPM features","TWAS features":"TWAS features","Tandemly duplicated":"Tandemly duplicated","Transmembrane helices":"Transmembrane helices","cis-regulatory element families":"cis-regulatory element families","cis-regulatory element names":"cis-regulatory element names"}},
                        {field:"feature",title:"Feature Name",filtering:false,render:rowData=>{
                            var name = rowData.feature;
                            if(name.includes("dge_")) {
                                name = name.slice(4);
                            } else if (name.includes("go_GO")) {
                                name = "GO:" + name.slice(6);
                            }
                            return <a href={"./goterm/" + name} rel="nofollow"><label for={name}>{name}</label></a>
                        }},
                        {field:"description",title:"Description",filtering:false},
                        {field:"",title:"Download",filtering:false,render:rowData=><input type="checkbox" id={rowData.feature} name={rowData.feature} value={rowData.feature} onClick={featureClicked}/>}
                    ]}
                    options={{
                        filtering:true,
                        headerStyle:{
                            fontWeight:"bold"
                        }
                    }}
                    title = ""
                /></form>
            </Layout>
        </MainLayout>
    );
};

export default Features;