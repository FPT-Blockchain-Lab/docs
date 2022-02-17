### PLAYGROUND

1. Navigate to the playground README (https://github.com/ConsenSys/quorum-kubernetes/tree/master/playground).
2. Ensure that your system meets the requirements specified (For details see \* below).
3. Choose your Ethereum client (Hyperledger Besu or GoQuorum): quorum-besu or quorum-go.
4. Choose your consensus algorithm. The playground supports Clique, Ethash (PoW), and IBFT2 for Besu, and IBFT for GoQuorum.
5. Follow the instructions from the README for the chosen client and consensus algorithm folder.

- Requirement install:

* Docker (https://docs.docker.com/engine/install/).
* Minikube (https://kubernetes.io/vi/docs/tasks/tools/install-minikube/).
  - Minikube defaults to 2 CPU's and 2GB of memory, unless configured otherwise. We recommend you
    starting with at least 16GB, depending on the amount of nodes you are spinning up - the
    recommended requirements for each besu node are 4GB.
* Kubernetes command-line tool kubectl (https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/).

**IMPORTANT NOTES**

- Consider the following when deploying and developing with the playground:
  - The playground is created specifically for developers and operators to become familiar with the
    deployment of Quorum in a Kubernetes environment in preparation for going into a cloud or on-
    premise environment. Thus, it should not be deployed into a production environment.
  - The playground is not a complete reflection of the dev and prod charts as it does not use Helm, but
    rather static or non-templated code that is deployed through kubectl apply -f. This means that without
    Helm there’s a significant amount of repeated code. This is fine for development but not ideal for a
    production environment.
  - The playground uses static/hard-coded keys. Automatic key generation is only supported in dev and
    prod charts.
  - As the playground is for local development, no cloud integration or lifecycle support is offered.

### DEV

1. Navigate to the playground README (https://github.com/ConsenSys/quorum-kubernetes/tree/master/dev).
2. Ensure that your system meets the requirements specified (For details see \* below).
3. Create a cluster (https://consensys.net/docs/goquorum/en/latest/tutorials/kubernetes/create-cluster/).
4. Deploy Charts (https://consensys.net/docs/goquorum/en/latest/tutorials/kubernetes/deploy-charts/).

- Requirement install:

* Docker (https://docs.docker.com/engine/install/).
* Minikube (https://kubernetes.io/vi/docs/tasks/tools/install-minikube/).
* Kubernetes command-line tool kubectl (https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/).
* Install AWS CLI and eksctl for AWS EKS clusters (https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html, https://eksctl.io/introduction/).
* Install Azure CLI for Azure AKS clusters (https://docs.microsoft.com/en-us/cli/azure/install-azure-cli).
* Install the cloud-specific CLI.
