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
    //node[0]
    //console.log(node);
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
                        {field:"category",title:"Category",
                        lookup:{
                            "Aranet, functional gene network clusters (agi)":"Aranet, functional gene network clusters (agi)",
                            "Aranet, functional gene network features (agn)":"Aranet, functional gene network features (agn)",
                            "Biochemical (pep)":"Biochemical (pep)",
                            "cis-regulatory element families (cif)":"cis-regulatory element families (cif)",
                            "cis-regulatory element names (cin)":"cis-regulatory element names (cin)",
                            "Conservation (con)":"Conservation (con)",
                            "DGE_general molecular function (dge)":"DGE_general molecular function (dge)",
                            "DGE_growth and development (dge)":"DGE_growth and development (dge)",
                            "DGE_infection and immunity (dge)":"DGE_infection and immunity (dge)",
                            "DGE_light and circadian (dge)":"DGE_light and circadian (dge)",
                            "DGE_stress and stimulus (dge)":"DGE_stress and stimulus (dge)",
                            "Epigenetics (gbm)":"Epigenetics (gbm)",
                            "Evolution (ntd)":"Evolution (ntd)",
                            "Gene coexpression clusters (cid)":"Gene coexpression clusters (cid)",
                            "Gene coexpression network features (coe)":"Gene coexpression network features (coe)",
                            "Gene expression (spm)":"Gene expression (spm)",
                            "Gene expression (tpm)":"Gene expression (tpm)",
                            "Gene expression, diurnal amplitude (dia)":"Gene expression, diurnal amplitude (dia)",
                            "Gene expression, diurnal timepoint (dit)":"Gene expression, diurnal timepoint (dit)",
                            "Gene family (ort)":"Gene family (ort)",
                            "Gene regulatory network clusters (tti)":"Gene regulatory network clusters (tti)",
                            "Gene regulatory network features (ttr)":"Gene regulatory network features (ttr)",
                            "Genome wide association (gwa)":"Genome wide association (gwa)",
                            "Genomic information (sin)":"Genomic information (sin)",
                            "Genomic information (tan)":"Genomic information (tan)",
                            "GO_BP terms, experimental annotation (go)":"GO_BP terms, experimental annotation (go)",
                            "GO_CC terms, experimental annotation (go)":"GO_CC terms, experimental annotation (go)",
                            "GO_MF terms, experimental annotation (go)":"GO_MF terms, experimental annotation (go)",
                            "Homologs in other speceies (hom)":"Homologs in other speceies (hom)",
                            "Phylostrata (phy)":"Phylostrata (phy)",
                            "Protein domain (mob)":"Protein domain (mob)",
                            "Protein domain (num)":"Protein domain (num)",
                            "Protein domain (pfa)":"Protein domain (pfa)",
                            "Protein domain (tmh)":"Protein domain (tmh)",
                            "Protein post-translation modifications (ptm)":"Protein post-translation modifications (ptm)",
                            "Protein protein interaction, PPI network clusters (pid)":"Protein protein interaction, PPI network clusters (pid)",
                            "Protein protein interaction, PPI network features (ppi)":"Protein protein interaction, PPI network features (ppi)",
                            "Transcription factor-target gene features (ttf)":"Transcription factor-target gene features (ttf)",
                            "Transcriptome wide association (twa)":"Transcriptome wide association (twa)",
                            }
                        },
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