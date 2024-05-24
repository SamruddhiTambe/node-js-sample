# DevOps/MLOps Internship Assignment Documentation

This documentation provides a detailed overview of the steps taken to complete the DevOps Internship Assignment, which involved setting up a GitOps pipeline using Argo CD and Argo Rollouts for deploying and managing a simple web application on Kubernetes.

## Setup and Configuration

### Docker Installation:
Followed the instructions provided [here](https://tecadmin.net/installing-docker-on-windows/) to install Docker on Windows.

### Kubectl Installation:
Installed Kubectl using Chocolatey package manager as per the instructions [here](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/#install-nonstandard-package-tools).

### Minikube Installation:
Installed Minikube using Chocolatey and started the cluster. Detailed steps can be found [here](https://minikube.sigs.k8s.io/docs/start/).

### Argo CD Installation:
Installed Argo CD on the Kubernetes cluster using the manifests provided in the official documentation [here](https://argo-cd.readthedocs.io/en/stable/getting_started/#1-install-argo-cd), [here](https://youtu.be/ZXOwXi_SG0A?si=hURurkh3NkQtOyav)

### Argo CD CLI Installation:
Downloaded and installed the Argo CD CLI on Windows using PowerShell commands. Instructions can be found [here](https://argo-cd.readthedocs.io/en/stable/cli_installation/).
- [here](https://youtu.be/35Qimb_AZ8U?si=Lbv-SZ5JUffBBbkM)

### Argo Rollouts Installation:
Installed Argo Rollouts in the Kubernetes cluster by applying the provided manifests. Executed the commands mentioned [here](https://github.com/argoproj/argo-rollouts#installation).

## Deployment Process

1. Cloned the repository containing a sample Node.js web application from [here](https://github.com/heroku/node-js-sample.git).
2. Set up Dockerfile to containerize the Node.js application.
3. Built and pushed the Docker image to Docker Hub.
4. Created Kubernetes manifests (deployment.yaml and service.yaml) to deploy the application.
5. Pushed the Kubernetes manifests to the GitHub repository.
6. Created an Argo CD application to monitor the GitHub repository and automatically deploy changes to the Kubernetes cluster.
7. Implemented a canary release strategy using Argo Rollouts by defining a rollout.yaml manifest and updating the Docker image version.
8. Monitored the rollout process using `kubectl argo rollouts get rollout my-app -w`.

## Challenges Encountered

- Initially faced issues while setting up Minikube due to conflicts with existing dependencies. Resolved by cleaning up the environment and reinstalling Minikube.
- Had difficulty logging into Argo CD using the initial password. Followed the documentation to retrieve the password and successfully logged in.
- Encountered issues with image versions during the canary release setup. Resolved by carefully updating the rollout.yaml manifest.

## Clean Up

To clean up the resources created during the assignment, follow these steps:
1. Delete the Argo CD and Argo Rollouts installations:
   
   kubectl delete namespace argocd
   kubectl delete namespace argo-rollouts
   kubectl delete -f deployment.yaml
   kubectl delete -f service.yaml
   kubectl delete -f rollout.yaml
