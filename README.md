# cowin-telegram-alert
create `conf.env` file in root directory and put 2 env variables

`TELEGRAM_BOT_TOKEN=<your bot token>` and 
`TELEGRAM_CHANNEL_ID=<channel id>`

Refer [this blog](https://xabaras.medium.com/sending-a-message-to-a-telegram-channel-the-easy-way-eb0a0b32968) for setting up telegram


Change pincode at line 7 in [index.js](https://github.com/VatsalHirpara/cowin-telegram-alert/blob/main/index.js)

This code checks for availability of slots for particular pincode for next 7 days inclding today. 

## To run :
```
npm start
```
   or 
```
node index.js
```
cowin API docs : [https://apisetu.gov.in/public/marketplace/api/cowin](https://apisetu.gov.in/public/marketplace/api/cowin)
