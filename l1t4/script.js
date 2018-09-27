let error = '';
let jsonData = [];
let result = 1;
var path = require("path");
let filePath = '';

const validateJson = jsonPath => {
let filePath = jsonPath;

const readPromise = new Promise(function (resolve, reject) {

    let fs = require("fs");

	fs.readFile(filePath, 'utf8',(err, data)=> {
		if (err) {
			reject(err);
		} else {
			jsonData = JSON.parse(data);
			resolve(data);
		}
	});

});

readPromise.then(function (data) {
//next block with all validations should be async but it should wait for "readFile" complete
validateFlagIsBool(jsonData.flag);
validateMyPromisesIsArr(jsonData.myPromises);
validateElementIsObj(jsonData.element);
validateScreenshotIsNull(jsonData.screenshot);
validateElementTextIsString(jsonData.elementText);
validateAllElementsText(jsonData.allElementsText);
validateCounter(jsonData.counter);
validateConfig(jsonData.config);
validateConst(jsonData.const);
validateParameters(jsonData.parameters);
validateDescription(jsonData.description);
}).then(function() {
    res();
});
return result;
}

function res() {
if (result === 1) {
    console.log("OK");
} else
    writeError();
};

const writeError = () => {

        let dirPath = path.dirname(filePath);
        let errorFilePath = dirPath + '/error.txt';

        let fs = require("fs");

        fs.writeFile(errorFilePath, error, function (err) {
          if (err) throw err;
        });
 };

const validateFlagIsBool = flag => {

 if (typeof flag !== 'boolean' )
    {
        error += "flag: not boolean\n";
        result = 0;
    }
};

const validateMyPromisesIsArr = myPromises => {
 if  (Array.isArray(myPromises) !== true )
    {
        error += "myPromises: not array\n";
        result = 0;
    }
};

const validateElementIsObj = element => {
 if (typeof element !== 'object' || element == null)
    {
        error += "element: not an object or it is null\n";
        result = 0;
    }
};

const validateScreenshotIsNull = screenshot => {
 if (screenshot !== null)
    {
        error += "screenshot: not null\n";
        result = 0;
    }
};

const validateElementTextIsString = elementText => {
 if (typeof elementText !== 'string')
    {
        error += "elementText: not string\n";
        result = 0;
    }
};

const validateAllElementsText = allElementsText => {
 if (typeof allElementsText !== 'string' || !(allElementsText.includes("const")))
    {
        error += "allElementsText: not a string or does not contain 'const'\n";
        result = 0;

    }
};

const validateCounter = counter => {
 if ((typeof counter !== 'number' ||  counter <= 10))
    {
        error += "Counter: not a number or not greater than 10\n";
        result = 0;

    }
};

const validateConfig = config => {
 if ((typeof config !== 'string' ||  config !== 'Common'))
    {
        error += "Config: not a string or not equal 'Common'\n";
        result = 0;

    }
};

const validateConst = const1 => {
 if (typeof const1 !== 'string' || ((const1.localeCompare('FiRst')) !== 0 ))
    {
        error += "const: not a string or not 'FiRst' (case insensitive)\n";
        result = 0;

    }
};

const validateParameters = parameters => {
 if ((Array.isArray(parameters) !== true ) || (parameters.length != 8))
    {
        error += "Parameters: not an array or array length != 8\n";
        result = 0;

    }
};

const validateDescription = description => {
 if ((typeof description !== 'string') || !((description.length > 5) && (description.length < 13)))
    {
        error += "Description: not a string or length less than 5 or greater than 13\n";
        result = 0;

    }
};


module.exports = validateJson;
require('make-runnable');


