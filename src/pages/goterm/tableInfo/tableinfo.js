import { useState, Fragment, useEffect } from 'react';
import ReactPDF, { Page, Text, View, Document, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer';

import classes from '../GoTerm.module.css';
import Tooltips from '../../../components/tooltips/tooltips';
import Layout from '../../../components/layout/componentLayout/Layout';
import { typographyClasses } from '@mui/material';

const TableInfo = (props) => {
  // Props:
  //      - label
  //      - index
  //      - features
  //      - featuresType
  //      - featuresDescription
  //      - scores
  //      - FRS
  let index = props.indexes;
  let [selectedFeaturesLength, setselectedFeaturesLength] = useState(25);
  let selectedFeatures = Object.values(props.features)[index];
  let selectedFeaturesType = Object.values(props.featuresType)[index];
  let selectedFeaturesDescription = Object.values(props.featuresDescription)[
    index
  ];
  let selectedScores = Object.values(props.scores)[index];
  let selectedFRS = Object.values(props.FRS)[index];

  const updateLength = (size) => {
    setselectedFeaturesLength(size)
  };

  function naiveRound(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    var new_p = Math.round(num * p) / p;
    if (new_p < 0.01) {
      new_p = '< 0.01';
    }
    return new_p
  }

  // Rounding function written by JN
  function jnRound(num) {
    if (num == '-') {
      var new_value = 'Not in network';
    }
    else {
      var new_value = Math.round((Number(num) + Number.EPSILON) * 100) / 100;
    }
    return new_value
  }

  // Preprocesses feature name so that urls will work when name is clicked on
  function preprocess(one_feature) {
    if (one_feature.startsWith('go_')) {
      var preprocessed = one_feature.split('_')[1];
    }
    else if (one_feature.startsWith('dge_')) {
      var preprocessed = one_feature.split('dge_')[1];
    }
    else {
      var preprocessed = one_feature.replace(/\s+/g, '_');
      preprocessed = encodeURIComponent(preprocessed);
    }
    return preprocessed;
  }

  // Similar function as the above, but modified just to make the displayed feature name look nice
  function preprocess_disp(one_feature) {
    if (one_feature.startsWith('go_')) {
      var preprocessed = one_feature.split('_')[1];
    }
    else if (one_feature.startsWith('dge_')) {
      var preprocessed = one_feature.split('dge_')[1];
    }
    else {
      var preprocessed = one_feature.replace(/\s+/g, '_');
    }
    return preprocessed;
  }


  // PDF Generator
  const [renderPdfLink, setRenderPdfLink] = useState(false);
  useEffect(()=> {
    setRenderPdfLink(true);
   },[]);

  //// Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      padding: 50,
      flexWrap: 'wrap'
    },
    logo: {
      padding: '0 0 18 0'
    },
    tableContainer: {
      flexDirection: 'row',
    },
    rowHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: '10',
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: '#D9DDDC'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: '10',
      borderLeftStyle: 'solid',
      borderLeftColor: 'black',
      borderLeftWidth: 1,
      borderRightStyle: 'solid',
      borderRightColor: 'black',
      borderRightWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: 'black',
      borderBottomWidth: 1
    },
    rowText: {
      borderRightStyle: 'solid',
      borderRightColor: 'black',
      borderRightWidth: 1,
      height: '100%'
    },
    no: {
      width: '6%',
      padding: '2, 4'
    },
    type: {
      width: '25%',
      padding: '2 7',
    },
    id: {
      width: '15%',
      padding: '2 7',
    },
    description: {
      width: '30%',
      padding: '2 7',
    },
    feature: {
      width: '13.4%',
      padding: '2 7',
      height: '100%'
    },
    frs: {
      width: '14.2%',
      padding: '2 7',
      height: '100%'
    },
  });

  // Checking FRS
  //console.log("FRS");
  //console.log(selectedFRS);

  //// Create Document Component
  const MyDocument = () => (
    <Document >
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.logo}>
          <Text style={{fontSize: '16px'}}>Go Tools</Text>
          <Text style={{fontSize: '8px'}}><link src="https://www.plant.tools/">by plant.tools</link></Text>
        </View>

        <View tyle={styles.tableContainer}>
          <View style={styles.rowHeader} >
            <Text style={[styles.no,styles.rowText]}>No</Text>
            <Text style={[styles.type,styles.rowText]}>Category</Text>
            <Text style={[styles.id,styles.rowText]}>Name</Text>
            <Text style={[styles.description,styles.rowText]}>Description</Text>
            <Text style={[styles.feature,styles.rowText]}>Feature Importance</Text>
            <Text style={[styles.frs]}>Feature Rank Score (FRS)</Text>
          </View>
        </View>

        <View tyle={styles.tableContainer}>
          {Array.from({ length: selectedFeaturesLength }, (_, i) => i).map(
              (index2) => (
              <View style={styles.row} >
                <Text style={[styles.no,styles.rowText]}>{index2 + 1}</Text>
                <Text style={[styles.type,styles.rowText]}>{selectedFeaturesType[index2]}</Text>
                <Text style={[styles.id,styles.rowText]}>{preprocess(selectedFeatures[index2])}</Text>
                <Text style={[styles.description,styles.rowText]}>{selectedFeaturesDescription[index2]}</Text>
                <Text style={[styles.feature,styles.rowText]}>{naiveRound(selectedScores[index2], 2)}</Text>
                <Text style={[styles.frs]}>{jnRound(selectedFRS[index2])}</Text>
              </View>
              )
            )}
        </View>
        
      </Page>
    </Document>
  );

  return (
    <Fragment>
      <Layout>
        <h2 className={classes.featureH2}>Feature importance:</h2> 
        <div className={classes.section2}>
        <div className="dropdown">
          <p>Number of Rows: </p>
          <button className="dropbtn">{selectedFeaturesLength}
            <i class="arrow down"></i>
          </button>

        <div className="dropdown-content">
          {Array.from({ length: 105 }, (_, i) => i).map(
            (index2) => {
              if (index2 % 5 == 0)
              {
                return <p onClick={() => updateLength(index2)}>{index2}</p>
              }
                
          }
          )}
  
          </div>
        </div>

        {renderPdfLink ? <PDFDownloadLink document={<MyDocument />} fileName="feature_importance.pdf">
          <button class="dropbtn"> Download </button> {/*Probably a hack to modify formatting*/}
        </PDFDownloadLink> : null}
        </div>
      </Layout>

      <Layout className={classes.goTable}>
        <table>
          <tr>
            <th>No</th>
            <th className={classes.category}>
              Category<Tooltips>Category of feature</Tooltips>
            </th>
            <th>
              Name<Tooltips>Name of feature</Tooltips>
            </th>
            <th className={classes.fi}>
              Description<Tooltips>Detailed description of feature</Tooltips>
            </th>
            <th>
              Feature importance <Tooltips>Prediction importance</Tooltips>
            </th>
            <th className={classes.frs}>
              Feature rank score (FRS) <Tooltips>Extent of prediction influence</Tooltips>
            </th>
          </tr>

          {Array.from({ length: selectedFeaturesLength }, (_, i) => i).map(
            (index2) => (
              <tr>
                <td>{index2 + 1}</td>
                <td>{selectedFeaturesType[index2]}</td>
                <td><a target='_blank' rel = 'noreferrer' href={`/golabel/goterm/${preprocess(selectedFeatures[index2])}`}>{preprocess_disp(selectedFeatures[index2])}</a></td>
                <td>
                  {selectedFeaturesDescription[index2]}
                </td>
                <td>{naiveRound(selectedScores[index2], 2)}</td>
                <td>{jnRound(selectedFRS[index2])}</td>
              </tr>
            )
          )}
        </table>
      </Layout>
    </Fragment>
  );
};

export default TableInfo;
