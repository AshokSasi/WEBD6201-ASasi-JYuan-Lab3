/*
Name: Ashok Sasitharan 100745484, Jacky Yuan 100520106
Date: March 11 2021
WEBD6201 Lab3
*/
"use strict";

(() =>{
    // check if the user is already logged in
    if(sessionStorage.getItem("user"))
    {
    // redirect to the secure area
    location.href = "contact-list.html";
    }
})();
