const assessCardData = [
    {
        "Front": {"taskNumber" : "A-1", "taskName": "ASSESSOR SELECTION"},
        "Back": {
            "taskDescription": "Select the appropriate assessor or assessment team for the type of control assessment to be conducted.",
            "primaryResponsibility" : ["Authorizing Official", "Authorizing Official Designated Representative"],
            "sdlcAlignment" : {"New": "Development and Acquisition;Implementation and Assessment","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"A-2", "taskName" : "ASSESSMENT PLAN"},
        "Back": {
            "taskDescription": "Develop, review, and approve plans to asess implemented controls.",
            "primaryResponsibility" : ["Authorizing Official", "Authorizing Official Designated Representative"],
            "sdlcAlignment" : {"New": "Development and Acquisition;Implementation and Assessment","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "A-3", "taskName": "CONTROL ASSESSMENTS"},
        "Back": {
            "taskDescription": "Assess the controls in accordance with the assessment procedures described in the assessment plans.",
            "primaryResponsibility" : ["Control Assessor"],
            "sdlcAlignment" : {"New": "Development and Acquisition;Implementation and Assessment","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"A-4", "taskName" : "ASSESSMENT REPORTS"},
        "Back": {
            "taskDescription": "Prepare the assessment reports documenting the findings and recommendations from the control asseessments.",
            "primaryResponsibility" : ["Control Assessor"],
            "sdlcAlignment" : {"New": "Development and Acquisition;Implementation and Assessment","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "A-5", "taskName": "REMEDIATION ACTIONS"},
        "Back": {
            "taskDescription": "Conduct initial remediation actions on the controls and reassess remediated controls.",
            "primaryResponsibility" : ["System Owner", "Common Control Provider","Control Assessor"],
            "sdlcAlignment" : {"New": "Development and Acquisition","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"A-6", "taskName" : "PLAN OF ACTIONS AND MILESTONES"},
        "Back": {
            "taskDescription": "Prepare the plan of action and milestones based on the findings and recommendations of the assessment reports.",
            "primaryResponsibility" : ["System Owner", "Common Control Provider"],
            "sdlcAlignment" : {"New": "Implementation and Assessment","Existing": "Operations and Maintenance"}
        }
    }


]


export default assessCardData