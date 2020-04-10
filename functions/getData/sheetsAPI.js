const { GoogleSpreadsheet } = require('google-spreadsheet');
const arrayShuffler = require('./arrayShuffler.js');
const columnsIds = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ", "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ"];


// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
doc.useApiKey(process.env.GOOGLE_SHEET_API_KEY);


// Organize the data according to the freezed rows, omly taking into account the last header
const structureData = async(sheetLabel, labels, filter = 'all') => {
    try {
        
        await doc.loadInfo(); // loads document properties and worksheets
        const sheet = doc.sheetsByIndex.filter((el, i) => el.title.indexOf(sheetLabel) >= 0)[0]; // get sheet    
        
        // Get rows and readd headers
        let sheetData = await sheet.getRows();
        sheetData = sheetData.map((el) => el._rawData)
        sheetData.unshift(sheet.headerValues);
        
        const headerHeight = sheet._rawProperties.gridProperties.frozenRowCount; // Get Frozen row height from the API
        let body, headers;
        if (typeof (headerHeight) !== 'undefined') {
            headers = sheetData.slice(headerHeight - 1, headerHeight)[0];
            body = sheetData.slice(headerHeight);
        } else {
            headers = columnsIds.slice(0, sheet._rawProperties.gridProperties.columnCount);
            body = sheetData;
        }
        body = body.map((el, i) => {
            let row = {};
            for (let index = 0; index < headers.length; index++) { row[headers[index]] = typeof (el[index]) === 'undefined' ? null : el[index]; }
            return row
        })
        // Filter results to cull empty rows
        body = body.filter((el) => (el[headers[0]] !== ''));
        // Map all rows to filtered data
        body = body.map((el) => {
            let value = {};
            for (let label of Object.keys(labels)){ value[label] = el[labels[label]] !== '' ? el[labels[label]] : null;}
            return value
        })
        // Filter according to param if needed
        if (filter !== 'all') {
            body = body.filter((el) =>{
                console.log(`${el.mail} === ${filter}`)
                return el.mail === filter;
            })
        } 
        return body
    } catch (error) {
        console.log(error);
    }
}

const sheetsAPI = {
    // Returns an array of all the people listed in the 'Benevoles' Tab with names, pictureUrl, and mail
    getVolunteers: async (param = 'all') => {
        const sheetLabel = "Bénévoles"; // Define name of the targeted sheet
        const dataLabels = {// Define header labels for targeted data
            name: "Nom",
            mail: "Mail",
            pictureUrl: "Photo"
        }
        // Get Structured and filterd data
        let volunteers = await structureData( sheetLabel, dataLabels, param ); 
        
        // Shuffle array to display differnt peopel first
        return arrayShuffler(volunteers)
    },


    // Returns an array of all the organisation listed on the 'Structure' Tab with names, websiteUrl, and logoUrl
    getOrganisations: async (param = 'all') => {
        const sheetLabel = "Structure"; // Define name of the targeted sheet
        const dataLabels = {// Define header labels for targeted data
            name: "NOM",
            websiteUrl: "SITE",
            logoUrl: "LOGO",
            adress: "ADRESSE"
        }
        // Get Structured and filtered data
        let organisations = await structureData(sheetLabel, dataLabels, param);

        // Shuffle array to display differnt peopel first
        return arrayShuffler(organisations)
    },

    // Returns an array of all the organisation listed on the 'Structure' Tab with names, websiteUrl, and logoUrl
    getOrders: async (param = 'all') => {
        const sheetLabel = "Besoins"; // Define name of the targeted sheet
        const dataLabels = {// Define header labels for targeted data
            contact: "Contact",
            date: "Horodateur",
            mail: "Adresse e-mail",
            lead: "GÉRÉ PAR",
            status: "STATUS PRODUCTION",
            produced: "PRODUCTION ACTUELLE"
        }
        // return  Structured and filtered data
        return await structureData(sheetLabel, dataLabels, param)
    },

    // Returns an array of all the organisation listed on the 'Structure' Tab with names, websiteUrl, and logoUrl
    getMilestones: async (param = 'all') => {
        const sheetLabel = "Datas"; // Define name of the targeted sheet
        const dataLabels = {// Define header labels for targeted data
            icon: "Icone",
            label: "Datas",
            value: "Total",
            unit: "Unités",
        }
        // return Structured and filtered data
        return await structureData(sheetLabel, dataLabels, param);
    },

    // NOT WORKING AS OF NOW 
    // WORK IN PROGRESS
    // NEED TO CHECK FOR CELL LOADING ERROR
    //
    // Returns an array of key milestones
    // getMilestones: async () => {
    //     const sheetLabel = "Notice"; // Define name of the targeted sheet
    //     const dataLabels = {// Define header labels for targeted data
    //         delivered: "livré",
    //         built: "fabriqué",
    //         builtToday: "aujourd'hui",
    //         ordered: "demandé",
    //         theoricalCapacity: "théorique",
    //         effectiveCapacity: "effective",
    //         placesNumber: "lieux",
    //         volunteersNumber: "bénévoles",
    //         laserNumber: "laser",
    //         printerNumber: "3D",
    //         sewingMachineNumber: "coudre",
    //     }

    //     try {
    //         await doc.loadInfo(); // loads document properties and worksheets
    //         const milestonesSheet = doc.sheetsByIndex.filter((el, i) => el.title.indexOf(sheetLabel) >= 0)[0]; // get milestones sheet 


    //         await milestonesSheet.loadCells('N3:R14');; // loads rows with first row as header
    //         // Filter results to cull empty rows
    //         // console.log(milestonesSheet.getCell(0, 0));


    //         // Shuffle array to display differnt peopel first
    //         // return milestones
    //     } catch (error) { console.log(error); }
    // }

}

module.exports = sheetsAPI