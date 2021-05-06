const result = require('dotenv').config({path:'./conf.env'})
const axios = require("axios");

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

sendMessage('testing bot')
// getData()
// setInterval(getData, 60 * 1000) 

async function getData() {
    let currentDate = getDateInRequiredFormat();
    const pincode = 360311
    let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${currentDate}`
    let response = ""
    try {
        response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
            }
        })
    } catch (error) {
        console.error(error);
        return;
    }
    console.log(`calling API at ${new Date()}`);

    const centers = response.data.centers
    for (const center of centers) {
        let msg = ''
        for (const session of center.sessions) {
            if (session.min_age_limit < 45 && session.available_capacity > 0) {
                let res = `${session.available_capacity} slots available for 18-44 at ${center.name} (${session.vaccine}) \n on ${session.date}`
                msg = msg + res + '\n\n'
            } else {
                console.log(`No slots available for 18+ currently at ${center.name}`);
            }
        }
        if(msg!=='') sendMessage(msg)
        console.log(msg);
        msg = ''
    }
    console.log('--------------------------------END------------------------------------')
}

function getDateInRequiredFormat() {
    let date = new Date();
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear();
    return day + "-" + month + "-" + year
}

async function sendMessage(msg) {
    let url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=@gdl_vaccination_alerts&text=${msg}&parse_mode=HTML`
    let response
    try {
        response = await axios.get(url)
    } catch (error) {
        console.error(error);
        return;
    }
}