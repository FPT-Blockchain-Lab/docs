# Testing Checklist

The following is the list of items to test during the assessment:

Note: The `Status` column can be set for values similar to "Pass", "Fail", "N/A".

| Test ID           | Test Name                                                                  | Status | Notes |
|-------------------|----------------------------------------------------------------------------|--------|-------|
| **WSTG-CONF**     | **Configuration and Deploy Management Testing**                            |        |       |
| WSTG-CONF-01      | Test Network Infrastructure Configuration                                  |  Pass  |       |
| WSTG-CONF-02      | Test Application Platform Configuration                                    |  Pass  |       |
| WSTG-CONF-03      | Test File Extensions Handling for Sensitive Information                    |  Pass  |       |
| WSTG-CONF-04      | Review Old Backup and Unreferenced Files for Sensitive Information         |  Pass  |       |
| WSTG-CONF-05      | Enumerate Infrastructure and Application Admin Interfaces                  |  Pass  |       |
| WSTG-CONF-06      | Test HTTP Methods                                                          |  Pass  |       |
| WSTG-CONF-07      | Test HTTP Strict Transport Security                                        |  Pass  |       |
| WSTG-CONF-08      | Testing for Content Security Policy                                        |  Pass  |       |
| **WSTG-IDNT**     | **Identity Management Testing**                                            |        |       |
| WSTG-IDNT-01      | Test Role Definitions                                                      |  Pass    |  Manual test     |
| WSTG-IDNT-02      | Test User Registration Process                                             |  Pass    |  Manual test     |
| WSTG-IDNT-03      | Test Account Provisioning Process                                          |  Pass    |  Manual test     |
| **WSTG-ATHN**     | **Authentication Testing**                                                 |        |       |
| WSTG-ATHN-01      | Testing for Credentials Transported over an Encrypted Channel              |  Pass    | https://github.com/ConsenSys/quorum/blob/master/permission/permission_test.go      |
| WSTG-ATHN-02      | Testing for Default Credentials                                            |  Pass    |  https://github.com/ConsenSys/quorum/blob/master/permission/permission_test.go     |
| WSTG-ATHN-03      | Testing for Weak Lock Out Mechanism                                        |  Pass    |  https://github.com/ConsenSys/quorum/blob/master/permission/permission_test.go     |
| WSTG-ATHN-04      | Testing for Bypassing Authentication Schema                                |  Pass    |  https://github.com/ConsenSys/quorum/blob/master/permission/permission_test.go     |
| WSTG-ATHN-05      | Testing for Vulnerable Remember Password                                   |  Pass    |  https://github.com/ConsenSys/quorum/blob/master/permission/permission_test.go     |
| WSTG-ATHN-06      | Testing for Weak Password Policy                                           |  Pass    |  https://github.com/ConsenSys/quorum/blob/master/permission/permission_test.go     |
| **WSTG-ATHZ**     | **Authorization Testing**                                                  |        |       |
| WSTG-ATHZ-02      | Testing for Bypassing Authorization Schema                                 |  Pass    |  https://github.com/ConsenSys/quorum/blob/master/permission/permission_test.go     |
| WSTG-ATHZ-03      | Testing for Privilege Escalation                                           |  Pass    |  https://github.com/ConsenSys/quorum/blob/master/permission/permission_test.go     |
| **WSTG-ERRH**     | **Error Handling**                                                         |        |       |
| WSTG-ERRH-01      | Testing for Improper Error Handling                                        |  Pass  | Các lỗi như stack traces, network timeouts, input mismatch, memory dumps... đã được handle                                     |
| **WSTG-BUSLOGIC** | **Business Logic Testing**                                                 |        |       |
| WSTG-BUSL-01      | Test Business Logic Data Validation                                        |  Pass  | Mọi dữ liệu được truyền vào đều đã được verifying và validating để đảm bảo đúng logic                                      |
| WSTG-BUSL-02      | Test Ability to Forge Requests                                             |  Pass  | Mọi input sau khi được truyền vào đều phải trải qua các lần hash vì vậy việc forge request gần như là không thể               |
| WSTG-BUSL-03      | Test for Process Timing                                                    |  Pass  |       |
| WSTG-BUSL-04      | Test Number of Times a Function Can Be Used Limits                         |  Pass  |       |
| WSTG-BUSL-05      | Testing for the Circumvention of Work Flows                                |  Pass  |       |
| WSTG-BUSL-06      | Test Defenses Against Application Misuse                                   |        |  ddos |                                                                      
| **WSTG-APIT**     | **API Testing**                                                            |        |       |
| WSTG-APIT-01      | Testing GraphQL                                                            |  Pass  |Manual test|
| **WSTG-CRYP**     | **Cryptography Testing**                                                           |        |       |
| WSTG-CRYP-01      | Testing for Weak Transport Layer Security                                  |  Pass  |       |
| WSTG-CRYP-02      | Testing for Padding Oracle                                                 |  Pass  | Padding Oracle là một phương pháp tấn công gần giống với Brute Force attack và tương tự AES-128 chưa ghi nhận cuộc tấn công thành công nào trong lịch sử|
| WSTG-CRYP-03      | Testing for Weak Encryption                                                |  Pass  |  Hệ thống sử dụng AES-128 Encryption là một trong những tiêu chuẩn mã hóa được tổ chức NIST và IBM khuyên dùng nên đảm bảo độ mạnh của encryption      |
| **WSTG-KEYT**     | **Keystore Testing**                                                       |        |       |
| WSTG-KEYT-01      | Testing for Brute  Force Attack                                            |  Pass  |  Hệ thống sử dụng AES-128 Encryption là một trong những tiêu chuẩn mã hóa được tổ chức NIST và IBM khuyên dùng, ngoài ra AES-128 chưa từng ghi nhận một cuộc tấn công nào thành công bằng phương pháp Brute Force Attack  |
| WSTG-KEYT-02      | Testing for Side-channel Attack                                            |  Pass  | Trong lịch sử đã AES-128 đã từng ghi nhận một cuộc tấn công bằng phương pháp Side-channel Attack thành công tuy nhiên đó là ở version cũ, còn với version mới chưa ghi nhận một cuộc tấn công nào thành công                |
