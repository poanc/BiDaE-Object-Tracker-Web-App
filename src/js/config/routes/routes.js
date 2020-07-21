/*
    Copyright (c) 2020 Academia Sinica, Institute of Information Science

    License:
        GPL 3.0 : The content of this file is subject to the terms and conditions

    Project Name:
        BiDae Object Tracker (BOT)

    File Name:
        routes.js

    File Description:
        BOT UI component

    Version:
        1.0, 20200601

    Abstract:
        BeDIS uses LBeacons to deliver 3D coordinates and textual descriptions of
        their locations to users' devices. Basically, a LBeacon is an inexpensive,
        Bluetooth device. The 3D coordinates and location description of every 
        LBeacon are retrieved from BeDIS (Building/environment Data and Information 
        System) and stored locally during deployment and maintenance times. Once 
        initialized, each LBeacon broadcasts its coordinates and location 
        description to Bluetooth enabled user devices within its coverage area. It 
        also scans Bluetooth low-energy devices that advertise to announced their 
        presence and collect their Mac addresses.

    Authors:
        Tony Yeh, LT1stSoloMID@gmail.com
        Wayne Kang, b05505028@ntu.edu.tw
        Edward Chen, r08921a28@ntu.edu.tw
        Joe Chou, jjoe100892@gmail.com
*/

const routes = {

    HOME: '/',

    SETTINGS: '/page/setting',

    OBJECT_MANAGEMENT: '/page/objectManagement',

    USER_SETTINGS: '/page/userSetting',

    BIG_SCREEN: '/page/bigScreen',

    ABOUT: '/page/about',

    TRACE: '/page/trace',

    CONTACT_TREE: '/page/contactTree',

    MONITOR_SETTINGS: '/page/monitor',

    RECORDS: '/page/report',

    LOGIN: '/login',

    FORGET_PASSWORD: '/resetpassword',

    RESET_PASSWORD: '/resetpassword/new/:token',

    RESET_PASSWORD_RESULT: '/resetpassword/success',

    RESET_PASSWORD_INSTRUCTION: '/resetpassword/instruction',

    BOT_ADMIN: '/page/BOTAdmin',

}

export default routes;