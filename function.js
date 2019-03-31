module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var now = new Date(Date.now());
    var nowPacificString = now.toLocaleString('en-US', { timeZone: 'america/los_angeles'});
    context.log("Pcific Time: "+nowPacificString);

    var nowPacific = new Date(nowPacificString);
    context.log("Day of week: " + nowPacific.getDay() + ", Hours: " + nowPacific.getHours());

    // Monday-Friday, 10:00:00-17:59:59
    var isWorkingHour = (nowPacific.getDay() >= 1) && (nowPacific.getDay() <= 5) && (nowPacific.getHours() >= 10) && (nowPacific.getHours() < 18)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { isWorkingHour: isWorkingHour, time: nowPacificString  }
    };  
};