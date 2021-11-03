const categorizeCardData = [
    {
        "Front": {"taskNumber" : "C-1", "taskName": "SYSTEM DESCRIPTION"},
        "Back": {
            "taskDescription": "Document the characteristics of the system.",
            "primaryResponsibility" : ["System Owner"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"C-2", "taskName" : "SECURITY CATEGORIZATION"},
        "Back": {
            "taskDescription": "Categorize the system and document the security categorization results.",
            "primaryResponsibility" : ["System Owner", "Information Owner or Steward"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations and Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" : "C-3", "taskName":"SECURITY CATEGORIZATION REVIEW AND APPROVAL"},
        "Back": {
            "taskDescription": "Review and approve the security categorization results and decision.",
            "primaryResponsibility" : ["Senior Agency Official for Privacy", "Authorizing Official", "Authorizing Official Designated Representative"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations and Maintenance"}
        }
    }


]   
export default categorizeCardData