**Revision History**

| Date       | Version | Author          | Change Description                          |
| ---------- | ------- | --------------- | ------------------------------------------- |
| 10/11/2023 | 0.1     | Tuan-Thanh Phan | Initial creation                            |
| 15/11/2023 | 0.2     | Tuan-Thanh Phan | Add Use Case diagrams and their description |
| 17/11/2023 | 0.3     | Tuan-Thanh Phan | Update Domain model and objects description |
| 20/11/2023 | 0.4     | Tuan-Thanh Phan | Update security matrix                      |
| 22/11/2023 | 0.5     | Tuan-Thanh Phan | Update Appendix                             |

**Approval**

| Date       | Version | Approver Name  | Position          |
| ---------- | ------- | -------------- | ----------------- |
| 10/11/2023 | 0.1     | Peter Tran     | Application Owner |
| 15/11/2023 | 0.2     | Thomas Yoshida | ITPM              |
| 17/11/2023 | 0.3     | Peter Tran     | Application Owner |
| 20/11/2023 | 0.4     | Thomas Yoshida | ITPM              |
| 22/11/2023 | 0.5     | Peter Tran     | Application Owner |

**Table of Contents**

[1 Objective and Scope 3](#objective-and-scope)

[2 Business Requirement 3](#business-requirement)

[2.1. Application Overview 3](#application-overview)

[2.2. Domain Model 4](#domain-model)

[2.2.1. Diagram 4](#diagram)

[2.2.2. Domain Objects Description 4](#domain-objects-description)

[2.3. Workflow 6](#heading=h.2xcytpi)

[2.4. Use Cases and Actors 6](#use-cases-and-actors)

[2.4.1. Diagram 6](#diagram-1)

[2.4.2. Description of Actors 11](#description-of-actors)

[2.4.3. Description of Use Cases 11](#description-of-use-cases)

[2.5. Security Matrix 11](#security-matrix)

[2.6. Change Requirement 12](#change-requirement)

[3 Appendix 13](#appendix)

[3.1. Glossary 13](#glossary)

[3.2. Mapping to Notes Application 13](#mapping-to-notes-application)

[3.3. Open Issues 13](#open-issues)

1. # **Objective and Scope** {#objective-and-scope}

This document describes the business requirements for CHC App. It contains the overall description of the application, the scope of data migration, and any changes need to be performed during migration of the application.

This document along with the prototype demo is used for requirements confirmation, and it is to be signed off by the business. Details of business logic and graphic user interface of the application, which are not mentioned in this document, will be migrated as they are in the application.

2. # **Business Requirement** {#business-requirement}
   1. # **Application Overview** {#application-overview}

The Child HealthCare App aims to provide a comprehensive and user-friendly platform for parents and caregivers to monitor, manage, and track the health and well-being of their children. The app will facilitate the input of health-related information, allow for error reporting, and enable seamless communication between parents and healthcare professionals.

The HCH database allows Global Markets to enter all the Futures and Options Errors.It is used for traders to input all information related errors.

Source Notes database(s) associated with this target application:

| \#  | DB Title   | Server   | DB Path                    |
| :-: | :--------- | :------- | -------------------------- |
|  1  | GES Errors | NDAL0007 | apps\\uk geese\\errors.nsf |

2. # **Domain Model** {#domain-model}
   1. # **Diagram** {#diagram}

![][image1]

2. # **Domain Objects Description** {#domain-objects-description}

| \#  | Object Name           | Object Description                                                                                                                                                                 |
| :-: | :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1  | CHC_Admin             | Users in this group have full permission on the CHC Administrator site.                                                                                                            |
|  2  | CHC_Doctor            | Users in this group have permissions to manage prescriptions and immunization schedules and exchange necessary information with parents on the CHC Doctor site.                    |
|  3  | CHC_Parent            | Users in this group have permissions to manage their child’s health events, view doctor instructions and documents, and receive notifications from doctors on the CHC Parent site. |
|  4  | Parent                | The object contains information about the parent.                                                                                                                                  |
|  5  | Doctor                | The object contains information about the doctor.                                                                                                                                  |
|  6  | Document              | The object contains information about the document.                                                                                                                                |
|  7  | User’s Report         | The object contains information of usage of the system.                                                                                                                            |
|  8  | Chat                  | The object is about the chat messages between parent and doctor.                                                                                                                   |
|  9  | Child                 | The object contains health information of the child.                                                                                                                               |
| 10  | Meal Times            | The object contains information about child mealtimes.                                                                                                                             |
| 11  | Sleep Times           | The object contains information of child sleep times.                                                                                                                              |
| 12  | Child Events          | The object contains information about child events.                                                                                                                                |
| 13  | Child Health Status   | The object contains information of child progress and their health.                                                                                                                |
| 14  | Prescription          | The object contains information about prescription.                                                                                                                                |
| 15  | Immunization Schedule | The object contains information about the immunization schedule.                                                                                                                   |
| 16  | Doctor Instructions   | The object contains information of given prescription and schedule.                                                                                                                |

3. # **Use Cases and Actors** {#use-cases-and-actors}
   1. # **Diagram** {#diagram-1}

**a. System UseCase**

**![][image2]**

**b. Admin UseCase**

**![][image3]**

**c. Doctor UseCase**

**![][image4]**

**d. Parent UseCase**

![][image5]

2. # **Description of Actors** {#description-of-actors}

| \#  | Actor Name | Definition                                                                                                                                                                            |
| :-- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Admin      | Who manages the accounts of doctors and parents, as well as their associated children, to maintain tighter control over the system. They also monitor the system’s usage performance. |
| 2   | Doctor     | A medical professional who has been added to the system to help care for the children and exchange necessary information with the parents.                                            |
| 3   | Parent     | The corresponding parent of the children. They can track their child’s developmental parameters, view instructional documents, and receive notifications from the doctor.             |

3.  # **Description of Use Cases** {#description-of-use-cases}

| \#  | Use Case Name                   | Definition                                                                           |
| --- | ------------------------------- | ------------------------------------------------------------------------------------ |
| 1   | Adjust Doctor                   | Admin CRUD account for doctor to use the system                                      |
| 2   | Adjust Parent                   | Admin CRUD account for parent to use the system if they can not create by themselves |
| 3   | Adjust Document                 | Admin CRUD document for the system to provide for parent                             |
| 4   | View User's Report              | Admin can view usage data of the system                                              |
| 5   | Supervise Prescription          | Doctor CRUD prescription and send to Parent                                          |
| 6   | Supervise Immunization Schedule | Doctor CRUD immunization schedule and send to Parent                                 |
| 7   | Supervise Child                 | Doctor and Parent can manage their corresponding children in the system              |
| 8   | Chat                            | Doctor and Parent can chat with others by using this function                        |
| 9   | Monitor Child Health Status     | Doctor and Parent can view the child's health progress                               |
| 10  | View Doctor Instruction         | Parent view the given prescription/immunization schedule from their doctor           |
| 11  | View Document                   | Parent view the document (health care tips) in the system                            |
| 12  | Track Child Events              | Parent can track their child's events by CRUD it                                     |
| 13  | Track Meal Times                | Parent can track their child's meal times by CRUD it                                 |
| 14  | Track Sleep Times               | Parent can track their child's sleep times by Read and Update it                     |
| 15  | Sign Up for Parent              | Parent can create their account by themselves                                        |
| 16  | Sign In                         | Admin/Doctor/Parent sign in to the system by their account                           |

4.  # **Security Matrix** {#security-matrix}

| Actor Function                  | Admin | Parent | Doctor |
| ------------------------------- | ----- | :----: | ------ |
| Adjust Doctor                   | X     |        |        |
| Adjust Parent                   | X     |        |        |
| Adjust Document                 | X     |        |        |
| View User's Report              | X     |        |        |
| Supervise Prescription          |       |        | X      |
| Supervise Immunization Schedule |       |        | X      |
| Supervise Child                 |       |   X    | X      |
| Chat                            |       |   X    | X      |
| Monitor Child Health Status     |       |   X    | X      |
| View Doctor Instruction         |       |   X    |        |
| View Document                   |       |   X    |        |
| Track Child Events              |       |   X    |        |
| Track Meal Times                |       |   X    |        |
| Track Sleep Times               |       |   X    |        |
| Sign Up for Parent              |       |   X    |        |
| Sign In                         |       |   X    |        |

X: User has full permission to do the action.

X (\*): User has permission to do the action on his own items.

X (\*\*): User has permission to do the action on items sent to him only.

X (1): reading permission is specified for each Listed Derivatives Form item regarding the Location of the item. For example, items, which have Location \= “London”, are only read by employees of the location.

5. # **Change Requirement** {#change-requirement}

| \#  | Item Name | Change Description |
| --- | --------- | ------------------ |
| 1   |           |                    |

3. # **Appendix** {#appendix}
   1. # **Glossary** {#glossary}

The list below contains all the necessary terms to interpret the document, including acronyms and abbreviations.

| Term  | Description                                                                                                                                                                  |
| :---- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _BR_  | **B**usiness **R**ule                                                                                                                                                        |
| _CBR_ | **C**ommon **B**usiness **R**ule                                                                                                                                             |
| _DB_  | Notes **D**ata**b**ase                                                                                                                                                       |
| _MSG_ | **M**es**s**a**g**e                                                                                                                                                          |
| _UC_  | **U**se **C**ase                                                                                                                                                             |
| _N/A_ | **N**ot **A**vailable or **N**ot **A**pplicable, used to indicate when information in a certain section could not be provided because it does not apply to this application. |
| _UI_  | **U**ser **I**nterface                                                                                                                                                       |
| _SRS_ | **S**oftware **R**equirements **S**pecification                                                                                                                              |
| _TBD_ | **T**o **b**e **d**etermined or **t**o **b**e **d**efined                                                                                                                    |

2. # **Mapping to Notes Application** {#mapping-to-notes-application}

This section describes the mapping between the migrated application and its source Notes application, including the mapping for data objects, features, actors.

|     | Migrated Application’s Elements | Notes Application’s Elements           |
| :-- | :------------------------------ | :------------------------------------- |
|     | **_Use Cases / Features_**      |                                        |
| 1   | Adjust Doctor                   | “Adjust Doctor” view                   |
| 2   | Adjust Parent                   | “Adjust Parent” view                   |
| 3   | Adjust Document                 | “Adjust Document” view                 |
| 4   | View User's Report              | “View User’s Report” view              |
| 5   | Supervise Prescription          | “Supervise Prescription” view          |
| 6   | Supervise Immunization Schedule | “Supervise Immunization Schedule” view |
| 7   | Supervise Child                 | “Supervise Child” view                 |
| 8   | Chat                            | “Chat” view                            |
| 9   | Monitor Child Health Status     | “View Child Health” view               |
| 10  | View Doctor Instruction         | “View Doctor Instruction” view         |
| 11  | View Document                   | “View Document” view                   |
| 12  | Track Child Events              | “Child Events” view                    |
| 13  | Track Meal Times                | “Child Meal Times” view                |
| 15  | Track Sleep Times               | “Child Sleep Times” view               |
| 16  | Sign Up for Parent              | “Sign Up” view                         |
| 17  | Sign In                         | “Sign In” view                         |

3. # **Open Issues** {#open-issues}

N/A
