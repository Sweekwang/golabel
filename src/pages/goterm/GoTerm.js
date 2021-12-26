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
  const [oob_f1, setoob_f1] = useState("-");
  const [network, setNetwork] = useState([]);

  const params = useParams();
  const goId = params.goId.replace(/\s+/g, '');
  window.scrollTo(0, 0);

  // Get data from database
  useEffect(() => {
    const data = { labels: goId };
    console.log(data);

    fetch('https://go-label-316405.oa.r.appspot.com/api/go', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
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
        setLabel(data.terms);
        setIsLoading(false);
        setLabelDescrtion(data.termsDescription[0]);
        setoob_f1(data.model.oob_f1);
        setNetwork(
          [
            { data: { id: '1', label: 'Node 1' }},
            { data: { id: '2', label: 'Node 2' }},
            { data: { id: '3', label: 'Node 3' }},
            { data: { id: '4', label: 'Node 4' }},
            { data: { id: '5', label: 'Node 5' }},
            { data: { id: '6', label: 'Node 6' }},
            { data: { id: '7', label: 'Node 7' }},
            { data: { id: '8', label: 'Node 8' }},
            { data: { id: '9', label: 'Node 9' }},
            { data: { id: '10', label: 'Node 10' }},
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
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        setLabel(['Error']);
        setScores(['Error']);
        setFeatures(['Error']);
      });
  }, [goId]);


  return (
    <MainLayout>
      {isLoading && <Loader />}
      {isError && <ErrorBar />}

      
      <Layout>
          <div className={classes.goDiv}>
            <p>Term:</p>
            <h1>{label}</h1>
            <p><b>Description</b>: {labelDescrtiopn}</p>
            <p><b>oob_f1</b>: {oob_f1}</p>
          </div>
          { (network !== null) &&

              <Fragment>
              <h2 className={classes.networkH2}>Network</h2>
                <Network 
                  elements={network} 
                  />
              </Fragment>
            
          }
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
          />
        );
      })}
    </MainLayout>
  );
};

export default GoTerm;
