import classes from './features.module.css';

import FeaturesController from '../../methods/features';
import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';
import AButton from '../../components/button/aButton';
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import Loader from '../../components/Loader/loader';

const Features = () => {
    const [node,setNode] = useState([]);
    const [downloadList, setDownloadList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        FeaturesController
            .retrieveFeaturesInformation()
            .then(res => {
                setNode(res);
                setIsLoading(false);
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
        setIsLoading(true);
        setNode((prevState) => {
            const dataToSort = [...prevState];
            dataToSort.sort((a,b) => a.category.toLowerCase() < b.category.toLowerCase() ? 1 : -1);
            return dataToSort;
        });
    }
    

    return(
        <MainLayout>
            {isLoading && <Loader/>}
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
                
                <form>
                    <div className={[classes.row,classes.header].join(' ')}>
                        <p className={classes.column1} onClick={sort}>Category</p>
                        <label className={classes.column2}>Feature Name</label>
                        <p className={classes.column3}>Description</p>
                        <p className={classes.column4}>Download</p>
                    </div>
                    {node.map((currentNode) => {
                        var name = currentNode.feature;

                        if(name.includes("dge_")) {
                            name = name.slice(4);
                        } else if (name.includes("go_GO")) {
                            name = "GO:" + name.slice(6);
                        }

                       return(
                        <div className={classes.row}>
                            <p className={classes.column1}>{currentNode.category}</p>
                            <a className={classes.column2} href= {"./goterm/" + name} rel="nofollow"> 
                                <label 
                                    for={name}
                                    >{name}</label>
                            </a>

                            <p className={classes.column3}>{currentNode.description}</p>
                            <p className={classes.column4}>
                                 <input 
                                type="checkbox" 
                                id={currentNode.feature} 
                                name={currentNode.feature} 
                                value={currentNode.feature}
                                onClick={featureClicked}/>
                            </p>

                        </div>
                       )
                    })}
                </form>

            </Layout>
        </MainLayout>
    );
};

export default Features;