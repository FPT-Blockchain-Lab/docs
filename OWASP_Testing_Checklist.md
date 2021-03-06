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
| WSTG-ERRH-01      | Testing for Improper Error Handling                                        |  Pass  | C??c l???i nh?? stack traces, network timeouts, input mismatch, memory dumps... ???? ???????c handle                                     |
| **WSTG-BUSLOGIC** | **Business Logic Testing**                                                 |        |       |
| WSTG-BUSL-01      | Test Business Logic Data Validation                                        |  Pass  | M???i d??? li???u ???????c truy???n v??o ?????u ???? ???????c verifying v?? validating ????? ?????m b???o ????ng logic                                      |
| WSTG-BUSL-02      | Test Ability to Forge Requests                                             |  Pass  | M???i input sau khi ???????c truy???n v??o ?????u ph???i tr???i qua c??c l???n hash v?? v???y vi???c forge request g???n nh?? l?? kh??ng th???               |
| WSTG-BUSL-03      | Test for Process Timing                                                    |  Pass  |       |
| WSTG-BUSL-04      | Test Number of Times a Function Can Be Used Limits                         |  Pass  |       |
| WSTG-BUSL-05      | Testing for the Circumvention of Work Flows                                |  Pass  |       |
| WSTG-BUSL-06      | Test Defenses Against Application Misuse                                   |        |  ddos |                                                                      
| **WSTG-APIT**     | **API Testing**                                                            |        |       |
| WSTG-APIT-01      | Testing GraphQL                                                            |  Pass  |Manual test|
| **WSTG-CRYP**     | **Cryptography Testing**                                                           |        |       |
| WSTG-CRYP-01      | Testing for Weak Transport Layer Security                                  |  Pass  |       |
| WSTG-CRYP-02      | Testing for Padding Oracle                                                 |  Pass  | Padding Oracle l?? m???t ph????ng ph??p t???n c??ng g???n gi???ng v???i Brute Force attack v?? t????ng t??? AES-128 ch??a ghi nh???n cu???c t???n c??ng th??nh c??ng n??o trong l???ch s???|
| WSTG-CRYP-03      | Testing for Weak Encryption                                                |  Pass  |  H??? th???ng s??? d???ng AES-128 Encryption l?? m???t trong nh???ng ti??u chu???n m?? h??a ???????c t??? ch???c NIST v?? IBM khuy??n d??ng n??n ?????m b???o ????? m???nh c???a encryption      |
| **WSTG-KEYT**     | **Keystore Testing**                                                       |        |       |
| WSTG-KEYT-01      | Testing for Brute  Force Attack                                            |  Pass  |  H??? th???ng s??? d???ng AES-128 Encryption l?? m???t trong nh???ng ti??u chu???n m?? h??a ???????c t??? ch???c NIST v?? IBM khuy??n d??ng, ngo??i ra AES-128 ch??a t???ng ghi nh???n m???t cu???c t???n c??ng n??o th??nh c??ng b???ng ph????ng ph??p Brute Force Attack  |
| WSTG-KEYT-02      | Testing for Side-channel Attack                                            |  Pass  | Trong l???ch s??? ???? AES-128 ???? t???ng ghi nh???n m???t cu???c t???n c??ng b???ng ph????ng ph??p Side-channel Attack th??nh c??ng tuy nhi??n ???? l?? ??? version c??, c??n v???i version m???i ch??a ghi nh???n m???t cu???c t???n c??ng n??o th??nh c??ng                |
