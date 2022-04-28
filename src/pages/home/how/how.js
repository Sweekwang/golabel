import classes from './how.module.css';

import FeaturesSummaryController from '../../../methods/featuresSummary';
import Layout from '../../../components/layout/componentLayout/Layout';
import Header from '../../../components/header/header';
import Like from '../../../assets/like.svg';
import Search from '../../../assets/search.png';
import Learning from '../../../assets/learning.png';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import MaterialTable, { MTableToolbar } from "@material-table/core";

const How = () => {
    const [node,setNode] = useState([]);

    useEffect(() => {
        FeaturesSummaryController
            .retrieveFeaturesInformation()
            .then(res => {
                setNode(res);
            });
    }, []);

    //console.log(node);

    return(
        <Layout className={classes.how} id="how">
            <div className={classes.summaryTable}>
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
            </div>

            <div className={classes.header}>
                <Header src = {Like} className={classes.headerIcon}>Made with Love</Header>
                <h3>How to use ?</h3>
                <p>A database to explore biological relationships between <i>Arabidopsis thailiana</i> genetic characteristics. Search using any 
                    feature given in the list of features (link below).</p>
            </div>
            <div className={classes.howItems}>
                <div className={classes.box}>
                    <h3>
                        <img src={Search} alt="info"/> <br/>
                        Search.</h3>
                    <p>
                        Search by Gene Ontology (GO) terms (e.g GO:0006950) and other <i>A. thailiana</i> feature names above. GO terms (prefix is 'go_') and 
                        Differential gene expression (DGE) features (prefix is 'dge_') need to be searched without their prefix.&nbsp; 
                        <Link to="./golabel/features">Click here</Link> to find out the list of abraidopsis features. Examples of search terms, one per feature category, is given in the table&nbsp;
                        here. For all features, please click on the link given for the full list. When a feature is searched in the database, the results&nbsp;
                        show trained machine learning model scores, and network and feature information.<br/><br/>
                        The Out-of-bag (OOB) score (model score) is rounded to 2 decimal places, categorical variables are scored using OOB F1 while&nbsp;
                        continuous variables are scored using OOB R<sup>2</sup>.
                    </p>
                </div>

                <div className={classes.box}>
                    <h3>
                        <img src={Learning} alt="info"/><br/>
                        Learn.
                    </h3>
                    <p>
                        The network shows the local neighbours of the node (feature). Nodes are coloured according&nbsp;
                        to their feature categories, edge weight is proportional to the strength of correlation between the nodes, and edge colour is determined&nbsp;
                        by direction of correlation (red for positive correlation and blue for negative correlation) to the search term&nbsp;
                        (feature that you have searched for).<br/><br/>
                        The feature information shows feature category, name, description and feature importance information, which is given by the&nbsp;
                        randon forest model, and shows how strong a feature&nbsp; 
                        is in predicting the search term. It also shows the feature rank score (FRS), which is calculated by converted
                        feature importance values into ranks, and calculating Spearman's correlation from these ranks. Hence, the interpretation of FRS values is&nbsp; 
                        the same as interpreting Spearman's. Its values range from -1 (perfectly negative correlation) to 1 (perfectly positive correlation), with 0&nbsp;
                        meaning no correation. Feature importance values and FRS scores have been rounded to two decimal places.
                    </p>
                </div>
            </div>
        </Layout>
    )
};

export default How;