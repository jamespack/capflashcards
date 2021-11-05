const cardData = [
    {
        "Front": {"taskNumber" : "P-1", "taskName": "RISK MANAGEMENT ROLES"},
        "Back": {
            "taskDescription": "Identify and assign individuals to specific roles associated with security and privacy risk management.",
            "primaryResponsibility" : ["HOA", "CIO", "SAOP"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"} 
        }

    },
    {
        "Front": {"taskNumber" :"P-2", "taskName" : "RISK MANAGEMENT STRATEGY"},
        "Back": {
            "taskDescription": "Establish a risk management strategy for the organization that includes determination of risk tolerance.",
            "primaryResponsibility" : ["HOA"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" : "P-3", "taskName":"RISK ASSESSMENT - ORGANIZATION"},
        "Back": {
            "taskDescription": "Assess organization-wide security and privacy risk and update the risk assessment results on an ongoing basis.",
            "primaryResponsibility" : ["SAORM or Risk Executive (Function)", "SAISO", "SAOP"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" : "P-4", "taskName":"ORGANIZATIONALLY-TAILORED CONTROL BASELINES AND CYBERSECURITY FRAMEWORK PROFILES (Optional)"},
        "Back": {
            "taskDescription": "Establish, document, and publish organizationally-tailored control baselines and/or Cybersecurity Framework Profiles. ",
            "primaryResponsibility" : ["SAORM or Risk Executive (Function)", "MBO"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" :"P-5", "taskName":"COMMON CONTROL IDENTIFICATION"},
        "Back": {
            "taskDescription": "Identify, document, and publish organization-wide common controls that are available for inheritance by organizational systems",
            "primaryResponsibility" : ["SAISO", "SAOP"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" :"P-6", "taskName":"IMPACT-LEVEL PRIORITIZATION (Optional)"},
        "Back": {
            "taskDescription": "Prioritize organizational systems with the same impact level",
            "primaryResponsibility" : ["SAORM", "Risk Executive (function)"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" :"P-7", "taskName":"CONTINUOUS MONITORING STRATEGY - ORGANIZATION"},
        "Back": {
            "taskDescription": "Develop and implement an organization-wide strategy for continuously monitoring control effectiveness.",
            "primaryResponsibility" : ["SAORM", "Risk Executive (function)"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" :"P-8", "taskName":"MISSION OR BUSINESS FOCUS"},
        "Back": {
            "taskDescription": "Identify the missions, business functions, and mission/business processes that the system is intended to support.",
            "primaryResponsibility" : ["MBO"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-9", "taskName":"SYSTEM STAKEHOLDERS"},
        "Back": {
            "taskDescription": "Identify stakeholders who have an interest in the design, development, implementation, assessment, operation, maintenance, or disposal of the system.",
            "primaryResponsibility" : ["MBO", "SO"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-10", "taskName":"ASSET IDENTIFICATION"},
        "Back": {
            "taskDescription": "Identify assets that require protection.",
            "primaryResponsibility" : ["SO"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-11", "taskName":"AUTHORIZATION BOUNDARY"},
        "Back": {
            "taskDescription": "Determine the authorization boundary of the system.",
            "primaryResponsibility" : ["AO"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-12", "taskName":"INFORMATION TYPES"},
        "Back": {
            "taskDescription": "Identify the types of information to be processed, stored, and transmitted by the system.",
            "primaryResponsibility" : ["SO", "IO/IS"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-13", "taskName":"INFORMATION LIFE CYCLE"},
        "Back": {
            "taskDescription": "Identify and understand all stages of the information life cycle for each information type processed, stored, or transmitted by the system.",
            "primaryResponsibility" : ["SAOP", "SO", "IO/IS"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-14", "taskName":"RISK ASSESSMENT - SYSTEM"},
        "Back": {
            "taskDescription": "Conduct a system-level risk assessment and update the risk assessment results on an ongoing basis.",
            "primaryResponsibility" : ["SO","SSO","SPO"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-15", "taskName":"REQUIREMENTS DEFINITION"},
        "Back": {
            "taskDescription": "Define the security and privacy requirements for the system and the environment of operation.",
            "primaryResponsibility" : ["MBO", "SO","IO/IS","SPO"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-16", "taskName":"ENTERPRISE ACRHITECTURE"},
        "Back": {
            "taskDescription": "Determine the placement of the system in the enterprise architecture.",
            "primaryResponsibility" : ["MBO", "EA","SA","PA"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-17", "taskName":"REQUIREMENTS ALLOCATION"},
        "Back": {
            "taskDescription": "Allocate security and privacy requirements to the system and the environment of operation.",
            "primaryResponsibility" : ["SA","PA", "SSO", "SPO"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-18", "taskName":"SYSTEM REGISTRATION"},
        "Back": {
            "taskDescription": "Register the system with organizational program or management offices.",
            "primaryResponsibility" : ["SO"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    }
]

export default cardData;