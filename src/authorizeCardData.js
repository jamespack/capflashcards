const authorizeCardData = [
    {
        "Front": {"taskNumber" : "R-1", "taskName": "AUTHORIZATION PACKAGE"},
        "Back": {
            "taskDescription": "Assemble the authorization package and submit the package to the authorizing official for an authorization decision.",
            "primaryResponsibility" : ["System Owner", "Senior Agency Official for Privacy", "Common Control Provider"],
            "sdlcAlignment" : {"New": "Implementation and Assessment","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"R-2", "taskName" : "RISK AND ANALYSIS DETERMINATION"},
        "Back": {
            "taskDescription": "Ananlyze and determine the risk from the operation or use of the system or the provision of common controls.",
            "primaryResponsibility" : ["Authorizing Official", "Authorizing Official Designated Representative"],
            "sdlcAlignment" : {"New": "Implementation and Assessment","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "R-3", "taskName": "RISK RESPONSE"},
        "Back": {
            "taskDescription": "Identify and implement a preferred course of action in response to the risk determined.",
            "primaryResponsibility" : ["Authorizing Official", "Authorizing Official Designated Representative"],
            "sdlcAlignment" : {"New": "Implementation and Assessment","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"R-4", "taskName" : "AUTHORIZATION DECISION"},
        "Back": {
            "taskDescription": "Determine if the risk from the operation or use of the information system or the provision or use of common controls is acceptable.",
            "primaryResponsibility" : ["Authorizing Official"],
            "sdlcAlignment" : {"New": "Implementation and Assessment","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "R-5", "taskName": "AUTHORIZATION REPORTING"},
        "Back": {
            "taskDescription": "Report the authorization decision and any deficiencies in controls that represent significant security or privacy risk.",
            "primaryResponsibility" : ["Authorizing Official", "Authorizing Official Designated Representative"],
            "sdlcAlignment" : {"New": "Implementation and Assessment","Existing": "Operations and Maintenance"} 
        }

    }

]


export default authorizeCardData