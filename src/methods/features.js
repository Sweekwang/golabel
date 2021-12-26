
class FeaturesController {
    static retrieveFeaturesInformation = async () => {
        const response = await fetch('https://sweekwang.github.io/golabel/overallData.json');
        const data = await response.json();
        data.sort((a,b) => a.feature.toLowerCase() > b.feature.toLowerCase() ? 1 : -1);

        return new Promise((resolve, rejected) => {
            resolve(data)
        })
    };
}

export default FeaturesController;