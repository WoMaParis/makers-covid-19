const { GoogleSpreadsheet } = require('google-spreadsheet');
const arrayShuffler = require('./arrayShuffler.js');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
doc.useApiKey(process.env.GOOGLE_SHEET_API_KEY);

const sheetsAPI = {



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
    // },

    // Returns an array of all the people listed in the 'Benevoles' Tab with names, pictureUrl, and mail
    getVolunteers: async () => {
        const sheetLabel = "Bénévoles"; // Define name of the targeted sheet
        const dataLabels = {// Define header labels for targeted data
            name: "Nom",
            mail: "Mail",
            pictureUrl: "Photo"
        }

        try {
            await doc.loadInfo(); // loads document properties and worksheets
            const volunteerSheet = doc.sheetsByIndex.filter((el, i) => el.title.indexOf(sheetLabel) >= 0)[0]; // get volunteer sheet    
            const rows = await volunteerSheet.getRows(); // loads rows with first row as header
            // Filter results to cull empty rows
            let volunteers = rows.filter((el) => (el[dataLabels.name] !== ''));
            // Map all vrows to volunteers data
            volunteers = volunteers.map((el) => {
                if (el[dataLabels.name] === '') return
                return {
                    name: el[dataLabels.name] !== '' ? el[dataLabels.name] : null,
                    mail: el[dataLabels.mail] !== '' ? el[dataLabels.mail] : null,
                    pictureUrl: el[dataLabels.pictureUrl] !== '' ? el[dataLabels.pictureUrl] : null,
                }
            })
            // console.log(volunteers);
            
            // Shuffle array to display differnt peopel first
            return arrayShuffler(volunteers)
        } catch (error) { console.log(error); }
    },


    // NOT WORKING AS OF NOW 
    // WORK IN PROGRESS
    // NEED TO IMPLEMENT DATA RESTRUCTURATION
    //
    // Returns an array of all the organisation listed on the 'Structure' Tab with names, websiteUrl, and logoUrl
    // getOrganisations: async () => {
    //     const sheetLabel = "Structures"; // Define name of the targeted sheet
    //     const dataLabels = {// Define header labels for targeted data
    //         name: "Nom",
    //         websiteUrl: "",
    //         logoUrl : ""
    //     }

    //     try {
    //         await doc.loadInfo(); // loads document properties and worksheets
    //         const organisationsSheet = doc.sheetsByIndex.filter((el, i) => el.title.indexOf(sheetLabel) >= 0)[0]; // get organisations sheet    
    //         const rows = await organisationsSheet.getRows(); // loads rows with first row as header
           
    //         const sheet = organisationsSheet; // get volunteer sheet    
    //         await sheet.loadCells('A4:D5');
    //         console.log(sheet.getCell(0, 0));
            
    //         // Filter results to cull empty rows
    //         let organisations = rows.filter((el) => (el[dataLabels.name] !== ''));
    //         // Map all vrows to organisations data
    //         organisations = organisations.map((el) => {
    //             if (el[dataLabels.name] === '') return
    //             return {
    //                 name: el[dataLabels.name] !== '' ? el[dataLabels.name] : null,
    //             }
    //         })
    //         // Shuffle array to display differnt peopel first
    //         return arrayShuffler(organisations)
    //     } catch (error) { console.log(error); }
    // }

}

module.exports = sheetsAPI