# Testing Checklist

The following is the list of items to test during the assessment:

Note: The `Status` column can be set for values similar to "Pass", "Fail", "N/A".

| Test ID           | Test Name                                                                  | Status | Notes |
|-------------------|----------------------------------------------------------------------------|--------|-------|
| **WSTG-CONF**     | **Configuration and Deploy Management Testing**                            |        |       |
| WSTG-CONF-01      | Test Network Infrastructure Configuration                                  |        |       |
| WSTG-CONF-02      | Test Application Platform Configuration                                    |        |       |
| WSTG-CONF-03      | Test File Extensions Handling for Sensitive Information                    |        |       |
| WSTG-CONF-04      | Review Old Backup and Unreferenced Files for Sensitive Information         |        |       |
| WSTG-CONF-05      | Enumerate Infrastructure and Application Admin Interfaces                  |        |       |
| WSTG-CONF-06      | Test HTTP Methods                                                          |        |       |
| WSTG-CONF-07      | Test HTTP Strict Transport Security                                        |        |       |
| WSTG-CONF-09      | Test File Permission                                                       |        |       |
| WSTG-CONF-11      | Test Cloud Storage                                                         |        |       |
| WSTG-CONF-12      | Testing for Content Security Policy                                        |        |       |
| **WSTG-IDNT**     | **Identity Management Testing**                                            |        |       |
| WSTG-IDNT-01      | Test Role Definitions                                                      |        |       |
| WSTG-IDNT-02      | Test User Registration Process                                             |        |       |
| WSTG-IDNT-03      | Test Account Provisioning Process                                          |        |       |
| **WSTG-ATHN**     | **Authentication Testing**                                                 |        |       |
| WSTG-ATHN-01      | Testing for Credentials Transported over an Encrypted Channel              |        |       |
| WSTG-ATHN-02      | Testing for Default Credentials                                            |        |       |
| WSTG-ATHN-03      | Testing for Weak Lock Out Mechanism                                        |        |       |
| WSTG-ATHN-04      | Testing for Bypassing Authentication Schema                                |        |       |
| WSTG-ATHN-05      | Testing for Vulnerable Remember Password                                   |        |       |
| WSTG-ATHN-07      | Testing for Weak Password Policy                                           |        |       |
| **WSTG-ATHZ**     | **Authorization Testing**                                                  |        |       |
| WSTG-ATHZ-02      | Testing for Bypassing Authorization Schema                                 |        |       |
| WSTG-ATHZ-03      | Testing for Privilege Escalation                                           |        |       |
| **WSTG-ERRH**     | **Error Handling**                                                         |        |       |
| WSTG-ERRH-01      | Testing for Improper Error Handling                                        |        |       |
| WSTG-ERRH-02      | Testing for Stack Traces                                                   |        |       |
| **WSTG-BUSLOGIC** | **Business Logic Testing**                                                 |        |       |
| WSTG-BUSL-01      | Test Business Logic Data Validation                                        |        |       |
| WSTG-BUSL-02      | Test Ability to Forge Requests                                             |        |       |
| WSTG-BUSL-03      | Test Integrity Checks                                                      |        |       |
| WSTG-BUSL-04      | Test for Process Timing                                                    |        |       |
| WSTG-BUSL-05      | Test Number of Times a Function Can Be Used Limits                         |        |       |
| WSTG-BUSL-06      | Testing for the Circumvention of Work Flows                                |        |       |
| WSTG-BUSL-07      | Test Defenses Against Application Misuse                                   |        |  ddos |                                                                      
| **WSTG-APIT**     | **API Testing**                                                            |        |       |
| WSTG-APIT-01      | Testing GraphQL                                                            |        |       |
| **WSTG-CRYP**     | **Cryptography**                                                           |        |       |
| WSTG-CRYP-01      | Testing for Weak Transport Layer Security                                  |    Pass    |       |
| WSTG-CRYP-02      | Testing for Padding Oracle                                                 |        |       |
| WSTG-CRYP-03      | Testing for Sensitive Information Sent Via Unencrypted Channels            |        |       |
| WSTG-CRYP-04      | Testing for Weak Encryption                                                |     Pass   |        |
| **WSTG-KEYT**     | **Keystore Testing**                                                       |        |       |
| WSTG-KEYT-01      | Testing for Brute  Force Attack                                            |    Pass    |  Hệ thống sử dụng AES-128 Encryption là một trong những tiêu chuẩn mã hóa được tổ chức NIST và IBM khuyên dùng, ngoài ra AES-128 chưa từng ghi nhận một cuộc tấn công nào thành công bằng phương pháp Brute Force Attack      |
| WSTG-KEYT-01      | Testing for Side-channel Attack                                            |    Pass    | Trong lịch sử đã AES-128 đã từng ghi nhận một cuộc tấn công bằng phương pháp Side-channel Attack thành công tuy nhiên đó là ở version cũ, còn với version mới chưa ghi nhận một cuộc tấn công nào thành công      |
