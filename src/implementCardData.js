const implementCardData = [
    {
        "Front": {"taskNumber" : "I-1", "taskName": "CONTROL IMPLEMENTATION"},
        "Back": {
            "taskDescription": "Implement the controls in the security and privacy plans.",
            "primaryResponsibility" : ["System Owner", "Common Control Provider"],
            "sdlcAlignment" : {"New": "Development and Acquisition","Existing": "Operations and Maintenance"} 
        }

    },
    {
        "Front": {"taskNumber" :"I-2", "taskName" : "UPDATE CONTROL IMPLEMENTATION INFORMATION"},
        "Back": {
            "taskDescription": "Document changes to planned control implementations based on the as-implemented state of the controls.",
            "primaryResponsibility" : ["System Owner", "Common Control Provider"],
            "sdlcAlignment" : {"New": "Development and Acquisition;Implementation and Assessment","Existing": "Operations and Maintenance"}
        }
    }


]


export default implementCardData