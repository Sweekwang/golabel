
class FeaturesSummaryController {
    static retrieveFeaturesInformation = async () => {
        const response = await fetch('https://sweekwang.github.io/golabel/summariseData.json');
        //console.log(response);
        const data = await response.json();
        data.sort((a,b) => a.feature.toLowerCase() > b.feature.toLowerCase() ? 1 : -1);
        data.forEach((dataPoint) => {
            dataPoint.id = data.indexOf(dataPoint)
          })
        //console.log(data);
        return new Promise((resolve, rejected) => {
            resolve(data)
        })
    };
}

export default FeaturesSummaryController;