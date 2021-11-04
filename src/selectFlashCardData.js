const selectCardData = [
    {
        "Front": {"taskNumber" : "S-1", "taskName": "CONTROL SELECTION"},
        "Back": {
            "taskDescription": "Select the controls for the system and the environment of operation.",
            "primaryResponsibility" : ["System Owner", "Common Control Provider"],
            "sdlcAlignment" : {"New": "Development and Acquisition","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"S-2", "taskName" : "CONTROL TAILORING"},
        "Back": {
            "taskDescription": "Tailor the controls selected for the system and the environment of operation.",
            "primaryResponsibility" : ["System Owner", "Common Control Provider"],
            "sdlcAlignment" : {"New": "Development and Acquisition","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "S-3", "taskName":"CONTROL ALLOCATION"},
        "Back": {
            "taskDescription": "Allocate security and privacy controls to the system and to the environment of operation.",
            "primaryResponsibility" : ["Security/Privacy Architect", "System Security/Privacy Officer"],
            "sdlcAlignment" : {"New": "Development and Acquisition","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "S-4", "taskName": "DOCUMENTATION OF PLANNED CONTROL IMPLEMENTATIONS"},
        "Back": {
            "taskDescription": "Document the controls for the system and environment of operation in security and privacy plans.",
            "primaryResponsibility" : ["System Owner", "Common Control Provider"],
            "sdlcAlignment" : {"New": "Development and Acquisition","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"S-5", "taskName" : "CONTINUOUS MONITORING STRATEGY - SYSTEM"},
        "Back": {
            "taskDescription": "Develop and implement a system-level strategy for monitoring control effectiveness that is consistent with and supplements the organizational continuous monitoring strategy.",
            "primaryResponsibility" : ["System Owner", "Common Control Provider"],
            "sdlcAlignment" : {"New": "Development and Acquisition","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "S-6", "taskName":"PLAN REVIEW AND APPROVAL"},
        "Back": {
            "taskDescription": "Review and approve the security and privacy plans for the system and the environment of operation.",
            "primaryResponsibility" : ["Authorizing Official", "Authorizing Official Designated Representative"],
            "sdlcAlignment" : {"New": "Development and Acquisition","Existing": "Operations and Maintenance"}
        }
    }


]


export default selectCardData