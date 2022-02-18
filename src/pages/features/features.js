import classes from './features.module.css';

import FeaturesController from '../../methods/features';
import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';
import AButton from '../../components/button/aButton';
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { Link } from "react-router-dom";

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

    //node[0]
    //console.log(node);
    return(
        <MainLayout>
            <Layout className={classes.layout}>
                <h1>Abraidopsis Features</h1>
                <p>
                   To download models, please
                   go to <a className={classes.addHyperlink} href="./download">Download</a>. Pickled 
                   models can be opened using the python joblib library
                   (<a className={classes.addHyperlink} href="https://scikit-learn.org/stable/modules/model_persistence.html">https://scikit-learn.org/stable/modules/model_persistence.html</a>).
                </p>
                <br/>

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
                            "GO_biological_process terms, experimental annotation (go)":"GO_biological_process terms, experimental annotation (go)",
                            "GO_cellular_component terms, experimental annotation (go)":"GO_cellular_component terms, experimental annotation (go)",
                            "GO_molecular_function terms, experimental annotation (go)":"GO_molecular_function terms, experimental annotation (go)",
                            "Homologs in other species (hom)":"Homologs in other species (hom)",
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
                            var disp_name = name;
                            if(name.includes("dge_")) {
                                name = name.slice(4);
                            } else if (name.includes("go_GO")) {
                                name = "GO:" + name.slice(6);
                            } else if (name.includes("_")){
                                name = name.replace(/\s+/g, '_');
                                disp_name = name;
                                name = encodeURIComponent(encodeURIComponent(name));
                            }
                            {/*console.log(name)*/}
                            return <Link to={"/golabel/goterm/" + name}>{disp_name}</Link>
                        }},
                        {field:"description",title:"Description",filtering:false}
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
