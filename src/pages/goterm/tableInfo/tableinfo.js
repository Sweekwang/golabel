import { useState, Fragment, useEffect } from 'react';
import ReactPDF, { Page, Text, View, Document, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer';

import classes from '../GoTerm.module.css';
import Tooltips from '../../../components/tooltips/tooltips';
import Layout from '../../../components/layout/componentLayout/Layout';

const TableInfo = (props) => {
  // Props:
  //        - label
  //      - index
  //      - features
  //      - featuresType
  //      - featuresDescription
  //      - scores
  let index = props.indexes;
  let [selectedFeaturesLength, setselectedFeaturesLength] = useState(25);
  let selectedFeatures = Object.values(props.features)[index];
  let selectedFeaturesType = Object.values(props.featuresType)[index];
  let selectedFeaturesDescription = Object.values(props.featuresDescription)[
    index
  ];
  let selectedScores = Object.values(props.scores)[index];

  const updateLength = (size) => {
    setselectedFeaturesLength(size)
  };

  function naiveRound(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
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
      padding: 60,
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
      width: '8%',
      padding: '2, 4'
    },
    type: {
      width: '25%',
      padding: '2 12',
    },
    id: {
      width: '20.8%',
      padding: '2 12',
    },
    description: {
      width: '32%',
      padding: '2 12',
    },
    feature: {
      width: '14.2%',
      padding: '2 8',
      height: '100%'
    }
  });

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
            <Text style={[styles.type,styles.rowText]}>Type</Text>
            <Text style={[styles.id,styles.rowText]}>ID</Text>
            <Text style={[styles.description,styles.rowText]}>Description</Text>
            <Text style={[styles.feature]}>Feature Importance</Text>
          </View>
        </View>

        <View tyle={styles.tableContainer}>
          {Array.from({ length: selectedFeaturesLength }, (_, i) => i).map(
              (index2) => (
              <View style={styles.row} >
                <Text style={[styles.no,styles.rowText]}>{index2 + 1}</Text>
                <Text style={[styles.type,styles.rowText]}>{selectedFeaturesType[index2]}</Text>
                <Text style={[styles.id,styles.rowText]}>{selectedFeatures[index2]}</Text>
                <Text style={[styles.description,styles.rowText]}>{selectedFeaturesDescription[index2]}</Text>
                <Text style={[styles.feature]}>{naiveRound(selectedScores[index2], 4)}</Text>
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

        {renderPdfLink ? <PDFDownloadLink document={<MyDocument />} fileName="gotool.pdf">
          <button> Download </button> 
        </PDFDownloadLink> : null}
        </div>
      </Layout>

      <Layout className={classes.goTable}>
        <table>
          <tr>
            <th>No</th>
            <th>
              Type<Tooltips>Feature ID</Tooltips>
            </th>
            <th>
              ID<Tooltips>Feature ID</Tooltips>
            </th>
            <th>
              Description<Tooltips>Feature ID</Tooltips>
            </th>
            <th>
              Feature importance <Tooltips>Helper Text</Tooltips>
            </th>
          </tr>

          {Array.from({ length: selectedFeaturesLength }, (_, i) => i).map(
            (index2) => (
              <tr>
                <td>{index2 + 1}</td>
                <td>{selectedFeaturesType[index2]}</td>
                <td><a target='_blank' rel = 'noreferrer' href={`/golabel/goterm/${selectedFeatures[index2]}`}>{selectedFeatures[index2]}</a></td>
                <td className={classes.capitalize}>
                  {selectedFeaturesDescription[index2]}
                </td>
                <td>{naiveRound(selectedScores[index2], 4)}</td>
              </tr>
            )
          )}
        </table>
      </Layout>
    </Fragment>
  );
};

export default TableInfo;
