import { useEffect, useState, Fragment} from 'react';
import { useParams } from 'react-router-dom';

import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';
import Loader from '../../components/Loader/loader';
import ErrorBar from '../../components/errorbar/Errorbar';
import TableInfo from './tableInfo/tableinfo';
import Network from '../../components/network/network';
import classes from './GoTerm.module.css'

const GoTerm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [label, setLabel] = useState([]);
  const [labelDescrtiopn, setLabelDescrtion] = useState("-");
  const [featuresType, setFeaturesType] = useState([]);
  const [features, setFeatures] = useState([]);
  const [featuresDescription, setFeaturesDescription] = useState([]);
  const [scores, setScores] = useState([]);
  const [FRS, setFRS] = useState([]);
  const [oob_f1, setoob_f1] = useState("-");
  const [network, setNetwork] = useState([]);

  const params = useParams();
  // Probably didn't need to replace an empty string by _ here, to get it to parse
  // search terms with spaces probably, since doing it in home.js is sufficient, but just did it so
  // that its less confusing

  // This code block is to ensure proper URL decoding when page is refreshed in browser 
  var goId = params.goId.replace(/\s+/g, '_');
  //console.log(goId);
  if (goId.includes('%_')) {
   // Do nothing 
  } else {
    goId = decodeURI(goId);
  };
  //console.log('after goterm decoding');
  console.log(goId);
  window.scrollTo(0, 0);

  // Get data from database
  useEffect(() => {
    const data = { labels: goId };
    //console.log(data);

    fetch('https://go-label-316405.oa.r.appspot.com/api/v2/go', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
    })
      .then((response) => {
        console.log(!response.ok);
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then((data) => {
        setFeaturesType(data.featuresTypes);
        setFeatures(data.features);
        setFeaturesDescription(data.featuresDesciption);
        setScores(data.scores);
        setFRS(data.FRS);
        setLabel([goId]);
        setIsLoading(false);
        setLabelDescrtion(data.termsDescription[0]);
        setoob_f1(data.model.oob_f1);

        // Checking FRS
        //console.log("FRS");
        //console.log(FRS);

        const network = [...data.network.start, ...data.network.end];
        console.log("Network")
        console.log(network);
        setNetwork(network)

      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        setLabel(['Error']);
        setScores(['Error']);
        setFeatures(['Error']);
        setNetwork([]);
      });
  }, [goId]);

useEffect(() => {
  setNetwork(
    [
      { data: { id: '1', label: 'Node 1' }},
      { data: { id: '2', label: 'Node 2'}},
      { data: { id: '3', label: 'Node 3' }},
      { data: { id: '4', label: 'GO: 4', source: 'go'  }},
      { data: { id: '5', label: 'GO: 5', source: 'go'  }},
      { data: { id: '6', label: 'dge 6', source: 'dge'  }},
      { data: { id: '7', label: 'dge 7', source: 'dge'  }},
      { data: { id: '8', label: 'dge 8', source: 'dge'  }},
      { data: { id: '9', label: 'ffi 9', source: 'ffi'  }},
      { data: { id: '10', label: 'ffi 10', source: 'ffi'  }},
      { data: { source: '1', target: '2', label: 'Edge from Node1 to Node2' } },
      { data: { source: '1', target: '3', label: 'Edge from Node1 to Node2' } },
      { data: { source: '2', target: '3', label: 'Edge from Node1 to Node2' } },
      { data: { source: '3', target: '1', label: 'Edge from Node1 to Node2' } },
      { data: { source: '3', target: '6', label: 'Edge from Node1 to Node2' } },
      { data: { source: '3', target: '2', label: 'Edge from Node1 to Node2' } },
      { data: { source: '3', target: '6', label: 'Edge from Node1 to Node2' } },
      { data: { source: '6', target: '4', label: 'Edge from Node1 to Node2' } },
      { data: { source: '6', target: '5', label: 'Edge from Node1 to Node2' } },
      { data: { source: '6', target: '8', label: 'Edge from Node1 to Node2' } },
      { data: { source: '6', target: '9', label: 'Edge from Node1 to Node2' } },
      { data: { source: '6', target: '10', label: 'Edge from Node1 to Node2' } },
      { data: { source: '6', target: '3', label: 'Edge from Node1 to Node2' } },
      { data: { source: '6', target: '7', label: 'Edge from Node1 to Node2' } },
      { data: { source: '6', target: '1', label: 'Edge from Node1 to Node2' } }
   ]
  )
},[])

// Sets condition to determine if OOB F1 or R^2 is displayed
if (goId.startsWith('GO:') || goId.startsWith('E-GEOD') || goId.startsWith('E-MTAB') || goId.startsWith('dit_') 
  || goId.startsWith('sin_') || goId.startsWith('tan_') || goId.startsWith('pid_') || goId.startsWith('cid_')
  || goId.startsWith('tti_') || goId.startsWith('agi_') || goId.startsWith('hom_') || goId.startsWith('gbm_')) {
    var metric = true;
  } else{
    var metric = false;
  }

  return (
    <MainLayout>
      {isLoading && <Loader />}
      {isError && <ErrorBar />}
      <Layout>
          <div className={classes.goDiv}>
            <p>Term:</p>
            <h1>{goId}</h1>
            <p><b>Description</b>: {labelDescrtiopn}</p>
            <p>
              {metric ? <b>Out-of-bag (OOB) F1</b> : <b>Out-of-bag (OOB) R<sup>2</sup></b>}
              : {oob_f1} 
            </p>
          </div>
          <Fragment>
              <div>
                <h2 className={classes.networkH2}>Network</h2>
                <p className={classes.networkP}>Click on node to display selected node attributes in the bottom left corner of the window</p>
              </div>
          { (network.length > 0) ?
                <Network 
                  elements={network} 
                  />: <p>Features is not found in network as it did not meet the OOB F1/R<sup>2</sup> threshold of &gt;= 0.4 to be included in the network</p>
          }
          </Fragment> 
      </Layout>

      {(isError === false) && Array.from({ length: label.length }, (_, i) => i).map((index) => {

        return (
          <TableInfo
            indexes = {index}
            label = {label}
            features = {features}
            featuresType = {featuresType}
            featuresDescription = {featuresDescription}
            scores = {scores}
            FRS = {FRS}
          />
        );
      })}
    </MainLayout>
  );
};

export default GoTerm;
