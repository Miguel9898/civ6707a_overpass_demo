
import fs from 'fs';

const writeJsonData = function(filePath = './exportway.geojson', data) {
    const options = {
        flag: 'w'
    };
    fs.writeFileSync(filePath, JSON.stringify(data), options);
};

export {
    writeJsonData
}