const monitorCardData = [
    {
        "Front": {"taskNumber" : "M-1", "taskName": "SYSTEM AND ENVIRONMENT CHANGES"},
        "Back": {
            "taskDescription": "Monitor the information system and its environment of operation for changes that impact the security and privacy posture of the system.",
            "primaryResponsibility" : ["System Owner", "Senior Agency Official for Privacy", "Common Control Provider","Senior Agency Information Security Officer"],
            "sdlcAlignment" : {"New": "Operations and Maintenance","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"M-2", "taskName" : "ONGOING ASSESSMENTS"},
        "Back": {
            "taskDescription": "Assess the controls implemented within and inherited by the system in accordance with the continuous monitoring strategy.",
            "primaryResponsibility" : ["Control Assessor"],
            "sdlcAlignment" : {"New": "Operations and Maintenance","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "M-3", "taskName": "ONGOING RISK RESPONSE"},
        "Back": {
            "taskDescription": "Respond to risk based on the results of ongoing monitoring activities, risk assessments, and outstanding items in plans of actions and milestones.",
            "primaryResponsibility" : ["Authorizing Official", "System Owner","Common Control Provider"],
            "sdlcAlignment" : {"New": "Operations and Maintenance","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"M-4", "taskName" : "AUTHORIZATION PACKAGE UPDATES"},
        "Back": {
            "taskDescription": "Update plans, assessment reports, and plans of action and milestones based on the results of the continuous monitoring process.",
            "primaryResponsibility" : ["System Owner", "Common Control Provider"],
            "sdlcAlignment" : {"New": "Operations and Maintenance","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "M-5", "taskName": "SECURITY AND PRIVACY REPORTING"},
        "Back": {
            "taskDescription": "Report the security and privacy posture of the system to the authorizing official and other organizational officials on an ongoing basis in accordance with the organization continuous monitoring strategy.",
            "primaryResponsibility" : ["System Owner", "Common Control Provider", "Senior Agency Information Security Officer", "Senior Agency Official for Privacy"],
            "sdlcAlignment" : {"New": "Operations and Maintenance","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"M-6", "taskName" : "ONGOING AUTHORIZATION"},
        "Back": {
            "taskDescription": "Review the security and privacy posture of the system on an ongoing basis to determine whether the risk remains acceptable.",
            "primaryResponsibility" : ["Authorizing Official"],
            "sdlcAlignment" : {"New": "Operations and Maintenance","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "M-7", "taskName": "SYSTEM DISPOSAL"},
        "Back": {
            "taskDescription": "Implement a system disposal strategy and execute required actions when a system is removed from operation.",
            "primaryResponsibility" : ["System Owner"],
            "sdlcAlignment" : {"New": "Not Applicable","Existing": "Operations and Maintenance"} 
        }

    }

]


export default monitorCardData